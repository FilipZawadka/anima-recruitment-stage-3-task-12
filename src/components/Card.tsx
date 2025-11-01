import "./Card.css";
import { useState } from 'react';
import profileImg from "../assets/images/fox_background_01.png";

function Card() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  return (
    <div id="card">

    <div id="card-input-form">
      <div className="content">
        <div className="left-column">
          <div className="label">
            <span>Your firstname: </span>
            <input value={firstname}
            onChange={(e) => setFirstname(e.target.value)}/>
          </div>
          <div className="label">
            <span>Your lastname: </span>
            <input 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}/>
          </div>
        </div>
      </div>
    </div>

    <div className="card-display-container" id="card-display">
     <div className="card-text-container">
      <div  className="card-text">Thank you for supporting us, {firstname} {lastname}!</div>
    </div>
      <img className="image" src={profileImg} alt="profile" />
    </div>

    </div>
  );
}

export default Card;