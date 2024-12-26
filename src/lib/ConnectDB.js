import mongoose from "mongoose";

export default async function ConnectDB() {

    let connection;
    if (connection?.connection?.readtstate != 1) {
        connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb connect');
    }


}
