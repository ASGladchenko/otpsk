export const getErrorMessage = (
  error: unknown,
  fallback = 'Error loading, connect with us'
): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return fallback;
};
