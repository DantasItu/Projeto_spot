import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/songList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj._id === id
  )[0];
  // console.log(artistObj);

  const songArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === artistObj.name
  );
  // console.log(songArrayFromArtist);

  const randomIndex = Math.floor(
    Math.random() * (songArrayFromArtist.length - 1)
  );
  const randomIdFromArtist = songArrayFromArtist[randomIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade),var(--_shade)),url(${artistObj.banner})`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songArrayFromArtist} />
      </div>
      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
