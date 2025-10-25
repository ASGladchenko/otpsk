/* eslint-disable @typescript-eslint/no-explicit-any */
export async function unwrap<T>(p: Promise<Response>): Promise<T> {
  try {
    const res = await p;
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || `API error ${res.status}`);
    return data as T;
  } catch (e: any) {
    if (e instanceof Response) {
      const data = await e.json().catch(() => ({}));
      throw new Error(data?.message || `API error ${e.status}`);
    }
    throw e;
  }
}
