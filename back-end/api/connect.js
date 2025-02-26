import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://admin:p6AeFo7EfSkYGJeO@cluster0.jssai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("ProjetoSpotify");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
