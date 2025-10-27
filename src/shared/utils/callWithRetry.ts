type WithRetryOptions = {
  retries?: number;
  delayMs?: number;
};

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export function withRetry<Args extends unknown[], T>(
  fn: (...args: Args) => Promise<T> | T,
  { retries = 3, delayMs = 500 }: WithRetryOptions = {}
) {
  let canceled = false;

  const cancel = () => {
    canceled = true;

    setTimeout(() => {
      canceled = false;
    }, 0);
  };

  const wrapped = async (...args: Args): Promise<T> => {
    let lastError: unknown;

    for (let attempt = 1; attempt <= retries; attempt++) {
      if (canceled) throw new Error('Retry canceled');

      try {
        return await Promise.resolve(fn(...args));
      } catch (err) {
        lastError = err;

        if (attempt >= retries || canceled) break;

        await sleep(delayMs);
      }
    }

    throw lastError;
  };

  return { run: wrapped, cancel };
}
