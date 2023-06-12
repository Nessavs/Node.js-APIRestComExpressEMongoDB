import mongoose from "mongoose"

// mongoose.connect("mongodb+srv://alura:123@alura.dkjed.mongodb.net/alura-node"); //passar string de conexão


mongoose.connect("mongodb+srv://Alura:123@alura.npm80h3.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
