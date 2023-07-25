import React, { useState} from "react";
import "./ContactPage.scss";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contactPage">
      <h1 className="contactHeading">Contact US:</h1>{" "}
      <div className="contactForm">
        <p>Step It Up Academic Interns: </p>
        <p>1166 6th Ave, New York, NY 10036</p>
        <p>Phone: 212-777-7777 </p>

        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </p>
            </label>
          </p>

          <button type="submit" className="sendButton">Send</button>

        </form>
      </div>
    </div>
  );
};
