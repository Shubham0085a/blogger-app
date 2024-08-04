import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://aasy0085:007007@cluster0.buaqxje.mongodb.net/blog-app');
    console.log("DB Connected");
}