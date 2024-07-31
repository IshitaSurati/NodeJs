const mongoose = require("mongoose")

const dbConnect = async () => {

    await mongoose.connect("mongodb+srv://ishitasurati:12345@cluster0.wi3og5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to the db");
}

module.exports=dbConnect