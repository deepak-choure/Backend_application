import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    console.log(`\n MongoDB connected !! `);
    console.log(`Host: ${response.connection.host}`);
    console.log(`Database name: ${response.connection.name}`);
  } catch (error) {
    console.error("MongoDb Connection Error ", error);
    process.exit(1);
  }
};
export default connectDB;
