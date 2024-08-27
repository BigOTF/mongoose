import mongoose from "mongoose";

const databaseConnection = async(URL) => {
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch(err) { 
        console.log(err);
    }
}

export default databaseConnection;