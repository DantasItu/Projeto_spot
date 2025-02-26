import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray2 } from "../../front-end/src/assets/database/temple.js";
import { db } from "./connect.js";

// newArtistsArray
// const newArtistArray = artistArray.map((currArtistOj) => {
//   const newArtistObj = { ...currArtistOj };
//   delete newArtistObj.id;

//   return newArtistObj;
// });

// newSongsArray
const newsongsArray = songsArray2.map((currsongsOj) => {
  const newsongsObj = { ...currsongsOj };

  return newsongsObj;
});

const responseSongs = await db.collection("songs").insertMany(newsongsArray);

// const responseArtists = await db
//   .collection("artists")
//   .insertMany(newArtistArray);

console.log(responseSongs);
// console.log(responseArtists);
