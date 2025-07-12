import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: "small-bussiness-crm",
    });
    console.log("Mongodb Connected");
  } catch (error) {
    console.log('Error Connecting Mongodb' + error);
  }
};
