import React from 'react';
import  './Home.scss';
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Home = () => {

    return (
      <section className="home-wrapper">
          <header>
              <img className="logo" src={require("../../assets/logo.png")} alt=""/>
              <nav>
                  <ul className="nav-list">
                      <li>about me </li>
                      <li>skills</li>
                      <li>projects</li>
                      <li>contact</li>
                  </ul>
              </nav>
          </header>
          <main>
              <div className="text-container">
                  <h1 className="hi">Hi,<br/>
                      I'm Bartek
                  </h1>
                  <h1 className="wanna">I wanna be fullstack dev</h1>
              </div>
              <img className="photo" src={require("../../assets/photo.png")} alt=""/>
              <div className="icon-list">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faEnvelope} />
              </div>
          </main>
      </section>

    )
}

export default Home;