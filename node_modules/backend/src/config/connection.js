import mongoose from "mongoose";

let url = "mongodb://localhost:27017/Taller"

const connect = async () => {
    try {
        const db = await mongoose.connect(url);
        console.log("connect to db")
    } catch (error) {

        console.error(error)
    }
}

export default connect