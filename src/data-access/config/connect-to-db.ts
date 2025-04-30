const mongoose = require("mongoose");
import * as dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  //mongoose.set("debug",true);
  try {
    const dbUrl = process.env.MONGODB_URL; 

    if (!dbUrl) {
      throw new Error("MONGODB_URL is not defined in the environment variables.");
    }
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (err: any) {
    console.log(err);
    process.exit(1);
  }
};
