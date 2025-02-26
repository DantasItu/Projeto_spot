import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://dantas:dantas161013@cluster0.jssai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("ProjetoSpotify");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
