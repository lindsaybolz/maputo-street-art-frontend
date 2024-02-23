import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='aboutUsContainer'>
      <NavBar />
      <div className='aboutUsContent'>
        <div className='missionContainer'>
          <h3 className='missionHeader'>Our Mission</h3>
          <p className='mission'>
          The majority of art schools, galleries, funding, & opportunities are concentrated in the wealthy & central zones of provincial capitals. Our mission is to bring art & community development programs to under-resourced neighborhoods, promote artistic expression, facilitate cultural preservation, catalyze gender & youth empowerment, & foster community development. We seek to create open spaces for youth outside of city centers to explore art as a mode to communicate emotions, tell the stories of their neighborhood, discover new ways of thinking, & obtain income generating skills. Maputo Street Art believes that our country urgently needs innovative thinkers, from communities most affected, to take a proactive part in designing our future.
          </p>
        </div>
        <div className='overviewContainer'>
          <h3 className='overviewHeader'>Our History</h3>
          <p className='overview'>
          Maputo Street Art, a registered non-governmental organization in Maputo, Mozambique, was founded by engaged artists in 2012. Since its inception, a dedicated & interdisciplinary artist collective has worked tirelessly to bring public art, in the form of murals, photography, screen-printing, music, theater, poetry, & other mediums, to communities around Mozambique.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;