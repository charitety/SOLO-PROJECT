import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AddSong.scss";

export const AddSong = () => {
  // Assigns useRef to each input field
  const refFirstName = useRef();
  const refLastName = useRef();
  const refTitle = useRef();
  const refProfPic = useRef();

  // Use in handleFormSubmit() function
  let navigate = useNavigate();

  const postsong = (song) => {
    fetch("http://localhost/song", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    })
      .then((res) => res.json())
      .then((newsongData) => {
        console.log(newsongData);
      })
      .catch((err) => console.error(err));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Assigns the value of each input field to these variable names
    const first_name = refFirstName.current.value;
    const last_name = refLastName.current.value;
    const title = refTitle.current.value;
    const prof_pic = refProfPic.current.value;

    // Object to represent new song input in form
    const newsong = {
      first_name: first_name,
      last_name: last_name,
      title: title,
      prof_pic: prof_pic,
    };

    // Pass in postsong function as call back to send to db
    postsong(newsong);

    e.target.reset();

    // When form is submitted, navigates back to song gallery
    navigate("/SongDirectory");
  };

  return (
    <div className="AddSong">
      {/* handleFormSubmit() function passed into form tag to handle the form submission */}
      <div className="addHeading">Add song</div>
      <form className="addForm" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="fname"
          ref={refFirstName}
          placeholder="Country"
        />
        <br />
        <input
          type="text"
          name="lname"
          ref={refLastName}
          placeholder="Song"
        />
        <br />
        {/* <input type="text" name="title" ref={refTitle} placeholder="Title" />
        <br /> */}
        <input className="sendButton" type="submit" value="Submit" />
      </form>
    </div>
  );
};
