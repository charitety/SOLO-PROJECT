import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SongDirectory.scss";

//  MAIN GOAL: A search bar to get the title of one song
// from the database when a country is typed

export const SongDirectory = () => {
  const [songs, setsongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Used inside addNewsong() function
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((response) => response.json())
      .then((data) => {

        setsongs(data);
      });
  }, []);

  const selectRandomSong = () => {
    const randomsongIndex = Math.floor(Math.random() * songs.length);
    const randomsong = songs[randomsongIndex];
    alert(`The turn is for ${randomsong.first_name}`);
  };

  const filtersongs = songs.filter(
    (song) =>
      song.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.last_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Used in button to navigate to add new song form (see AddSong component)
  const addNewSong = () => {
    navigate("/AddSong");
  };

  const handleDeletesong = (deletedsong) => {
    // console.log("f: ", deletedsong.song_id);
    fetch(`http://localhost/song/${deletedsong.song_id}`, {
      method: "DELETE",
    });
    const deletesongs = songs.filter(
      (song) => song.song_id !== deletedsong.song_id
    );
    setsongs(deletesongs);
  };

  return (
    <div className="SongDirectory">
      <div className="selectAddSearch">
        <button id="select" onClick={selectRandomSong}>
          Select
        </button>
        <button id="add" onClick={() => addNewSong()}>
          Add
        </button>
        <input
          placeholder="Search a country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />{" "}
        {"  "}
      </div>
      <div className="directoryHeading">Song Directory</div>
      <div className="grid">
        {filtersongs.map((song) => (
          <div className="grid_item" key={song.song_id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {song.prof_pic.length < 50 ? (
                  <img
                    src={process.env.PUBLIC_URL + song.prof_pic}
                    alt={song.first_name}
                  />
                ) : (
                  <img src={song.prof_pic} alt={song.first_name} />
                )}
              </div>
              <div className="flip-card-back">
                <div>
                  {song.first_name} {song.last_name}
                </div>
                <div>{song.title}</div>
                <button onClick={() => handleDeletesong(song)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
