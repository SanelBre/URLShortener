import mongoose from "mongoose";

let retryConnectCount = 0;

export const startDb = async (): Promise<void> => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ?? "mongodb://localhost:27017/");
    console.log("connected to mongodb");
  } catch (e) {
    console.error(e);
    console.error("Failed to connect to mongo on startup - retrying in 1 sec");
    if (retryConnectCount < 5) setTimeout(startDb, 1000);
    retryConnectCount = +1;
  }
};
