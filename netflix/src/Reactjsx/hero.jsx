import React, { useState } from "react";
import "../Reactcss/hero.css";
import "../Reactcss/div1.css";
import "../Reactcss/div2.css";
import "../Reactcss/div3.css";
import "../Reactcss/div4.css";
import "../Reactcss/footer.css";
import Vid1 from "../assets/video-tv-in-0819.mp4";
import Vid2 from "../assets/video-devices-in.mp4";
import tv from "../assets/tvframe.png"
import mac from "../assets/macframe.png"
import logo from "../assets/netflixlogo.png";

function Hero() {
  const getStarted = () => {
    console.log("LOGGED IN");
  };
  return (
    <>
      <div className="div1">
        <div className="header">
          <div className="nav">
            <div className="logo">
              <img src={logo} width="40%" height="45%" />
            </div>
            <div className="signup">
              <select className="lang">
                <option>English</option>
                <option>Hindi</option>
                <option>Telugu</option>
              </select>
              <button className="signup_btn">Sign In</button>
            </div>
          </div>
        </div>
        <div className="matter">
          <h1 className="div1_font h1">Unlimited movies, TV shows and more</h1>
          <br />
          <p className="div1_font p1">Watch anywhere. Cancel anytime.</p>
          <br />
          <p className="div1_font p2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="email">
            <input type="text" placeholder="Email address" className="ip" />
            <button onClick={getStarted} className="getStarted">
              Get Started &nbsp; &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Div1() {
  return (
    <>
      <div className="onTV">
        <div className="left_matter">
          <h1>Enjoy on your TV</h1>
          <br />
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="tv_unit">
          <img src={tv}/>
          <div className="tv_video">
            <video autoPlay loop muted>
              <source src={Vid1} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

function Div2() {
  return (
    <>
      <div className="download">
        <div className="mobile">
          <div className="save_anime">
            <div className="web">
              <div className="stranger_things"></div>
              <div className="downloading">
                <p className="Show">Stranger Things</p>
                <p className="task">Downloading...</p>
              </div>
            </div>
            <div className="svg"></div>
          </div>
        </div>
        <div className="right_matter">
          <h1 className="down_matter">Download your shows to watch offline</h1>
          <br/>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </>
  );
}

function Div3() {
  return (
    <>
      <div className="watch">
        <div className="left_matter">
          <h1>Watch everywhere</h1>
          <br />
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="macframe">
          <img src={mac}/>
          <div className="mac_video">
          <video autoPlay loop muted width='100%' height='100%'>
              <source src={Vid2} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

function Div4() {
  return (
    <>
      <div className="kids">
        <div className="kids_img"></div>
        <div className="right_matter">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_content">
          <p>Questions? Call 000-800-919-1694</p>
          <ul className="quries">
            <li className="querry1 qry">FAQ</li>
            <li className="querry2 qry">Help Centre</li>
            <li className="querry3 qry">Account</li>
            <li className="querry4 qry">Media Centre</li>
            <li className="querry5 qry">Investor Relations</li>
            <li className="querry6 qry">Jobs</li>
            <li className="querry7 qry">Ways to Watch</li>
            <li className="querry8 qry">Terms of Use</li>
            <li className="querry9 qry">Privacy</li>
            <li className="querry10 qry">Cookie Preferences</li>
            <li className="querry11 qry">Corporate Information</li>
            <li className="querry12 qry">Contact Us</li>
            <li className="querry13 qry">Speed Test</li>
            <li className="querry14 qry">Legal Notices</li>
            <li className="querry15 qry">Only on Netflix</li>
          </ul>
          <select className="lang">
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
          </select>
        </div>
      </div>
    </>
  );
}

export { Hero, Div1, Div2, Div3, Div4, Footer };
