export const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL
};

export const getEnv = (key: keyof typeof env) => {
  const value = env[key];

  if (!value) {
    throw new Error(`Env ${key} not found`);
  }

  return value;
};
