function getEnv(key: string, fallback = ""): string {
  const value = process.env[key];
  if (!value && fallback === "") {
    console.error(`❌ Missing environment variable: ${key}`);
    process.exit(1);
  }
  return value || fallback;
}

const _env = {
  PORT: parseInt(process.env.PORT || "5000", 10),
  MONGO_URI: getEnv("MONGO_URI"),
  MONGO_DB_NAME: getEnv("MONGO_DB_NAME"),
  JWT_SECRET: getEnv("JWT_SECRET"),
};

export default _env;
