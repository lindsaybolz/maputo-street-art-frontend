import React from "react";
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Home.css';
import YoutubeEmbed from '../components/YoutubeEmbed';

const Home = () => {
  return (
    <div className="homeContainer">
      <img
        class="demo-bg"
        src={require('../resources/image11.jpeg')}
        alt="Girl dancing in front of colorful mural"
      />
      <section className="topSection">
        <NavBar />
        <div className="quote">
          Bringing art back to communities to re-create narratives and empower youth
        </div>
        <div className="bullets">
          <p>
            Reaching 20+ neighborhoods & involving 2,000+ youth
          </p>
          <p>
            Active Beira, Nampula, and Inhambane Street Art satellite programs
          </p>
        </div>
      </section>
      <section className="videoSection">
        <section className="leftOfVideoSection">
          <p className="launchStatement">
            Maputo Street Art book launched in February 2023
          </p>
          <NavLink
            className='tourLink'
            to='/tour'
            >
            Book a tour now!
          </NavLink>
        </section>
        <div className="youTubeComponent">
          <YoutubeEmbed embedId='BiImKY5xls8' />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home;