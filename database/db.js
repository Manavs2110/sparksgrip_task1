 const mongoose = require('mongoose');

/*try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}*/
console.log(process.env.MONGO_URI);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports= connectDB;