import React from "react";
import Player from "../components/Player.jsx";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs.js";
import { artistArray } from "../assets/database/artists.js";

const Song = () => {
  const { id } = useParams();
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currSongObj) => currSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currArtistObjs) => currArtistObjs.name === artist
  )[0];

  const songArrayFromArtist = songsArray.filter(
    (currValue) => currValue.artist === artist
  );

  // logic nextBottom & backBottom

  // localizo o index de uma array
  let atualIndex = songArrayFromArtist.findIndex(
    (currValue) => currValue.name === name
  );

  const nextIndex =
    atualIndex === songArrayFromArtist.length - 1 ||
    atualIndex + 1 > songArrayFromArtist.length - 1
      ? 0
      : atualIndex + 1;

  const backIndex =
    atualIndex === 0 || atualIndex - 1 < 0
      ? songArrayFromArtist.length - 1
      : atualIndex - 1;

  const nextBottom = songArrayFromArtist[nextIndex]._id;

  const backBottom = songArrayFromArtist[backIndex]._id;

  return (
    <div className="song">
      <div className="song__header">
        <img
          className="song__image-album"
          src={image}
          alt={`image da musica ${name}`}
        />
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__image-artist">
          <img
            width={45}
            height={45}
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        <></>
        <Player
          duration={duration}
          nextBottom={nextBottom}
          backBottom={backBottom}
          audio={audio}
        />
        <div className="song__info">
          <p className="song__title">{name}</p>
          <p className="song__artist-name">{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
