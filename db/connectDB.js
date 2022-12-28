import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      bdName: 'registration',
    };
    mongoose.set('strictQuery', true);
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log('DB connected successfully...');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
