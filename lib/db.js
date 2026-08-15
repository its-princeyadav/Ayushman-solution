import mongoose from "mongoose";

// Cached on `global` (not a module-scope variable) so the connection
// survives Next.js dev's Fast Refresh, which can re-evaluate this module
// without restarting the process.
const cached = global.mongooseConn || (global.mongooseConn = { conn: null, promise: null });

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_URI)
      .then((mongooseInstance) => {
        cached.conn = mongooseInstance;
        return mongooseInstance;
      })
      .catch((error) => {
        // Do not process.exit here (unlike the old standalone Express
        // server) - this process also serves every page/route, not just
        // the DB-backed ones. Reset the cached promise so the next request
        // retries instead of awaiting an already-rejected promise forever.
        cached.promise = null;
        console.error("MongoDB connection error:", error.message);
        throw error;
      });
  }

  return cached.promise;
}
