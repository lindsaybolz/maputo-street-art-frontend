import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Story from "../components/Story";
import './Stories.css';
const storyData = [
  {
    title: 'First Annual Maputo Street Art Festival: November 2023',
    text: "To amplify Maputo Street Art’s impact, we held Mozambique's first annual street art festival from November 29th – December 3rd 2023. We brought together artists from around the country with the public, to host a variety of activities including, mural painting, youth development workshops, concerts, gender equity events, community theater, poetry, dance, marionetas gigantes, food vending, fashion shows, & sewing. The festival took place in various sites around Maputo including Unidade 7, Maxaquene, Mafalala, & Polana Caniço. We gathered artists & communities to promote artistic expression, give capacity to youth, create open forums for art discussion, teach technical skills, & ultimately invoke community development.",
    imageReference: require('../resources/image8.jpeg'),
    color: 'violet',
  },
  {
    title: 'Adolescent Girls and Young Women Ambassador Initiative',
    text: 'Maputo Street Art has designed a one year project, Adolescent Girls and Young Women (AGYW) Ambassador Initiative, to train AGYW to spread art and community development to 10 new neighborhoods around Maputo (5) and Beira (5). Our project will empower AGYW to refine their artistic crafts, introduce street art into their communities, obtain income generation skills, connect with a community of other AGYW, and ultimately invoke community development. Two AGYW will be selected as ambassadors from each neighborhood. Our program will rotate between neighborhoods and capacity building workshops will be held during the first weekend of each rotation at primary schools to introduce technical skills and interact with students. The remaining weeks will be devoted to live mural painting and visual art creation. The culmination in each neighborhood will be an exhibition where community members are invited to celebrate the created visual art. Maputo Street Art is seeking funding to execute project logistics including paint, paint brushes, food, per diem, transportation, lodging, space rental, manual creation, scaffolding, ladders, projector, canvas, printing costs, safety equipment, license for exhibitions, security, etc.',
    imageReference: require('../resources/image10.jpeg'),
    justify: 'reverse',
    color: 'aqua'
  },
  {
    title: 'Mozambique 16 day Gender Based Violence Campaign',
    text: 'As part of the 16 day Gender Based Violence Campaign, in Mozambique, from November 25th- December 10th 2023, Maputo Street Art partnered with the embassy of the Netherlands to execute two murals that spread awareness about gender based violence and promote women’s empowerment. Members from the Maputo Street Art Women’s crew joined this initiative.',
    imageReference: require('../resources/image11.jpeg'),
    color: 'tomato'
  },
  {
    title: 'Mafalala Festival',
    text: 'Maputo Street Art partook in a workshop for children at the Mafalala Festival. Youth members of our crew organized and carried out live-screen printing for youth.',
    imageReference: require('../resources/image9.jpeg'),
    justify: 'reverse',
    color: 'green'
  },
  
]
const Stories = () => {
  return (
    <div className="storiesContainer">
      <NavBar />
      <div className="storiesContent">
        <Story title={storyData[0].title} text={storyData[0].text} imageReference={storyData[0].imageReference} justify={storyData[0].justify} color={storyData[0].color}/>
        <Story title={storyData[1].title} text={storyData[1].text} imageReference={storyData[1].imageReference} justify={storyData[1].justify} color={storyData[1].color}/>
        <Story title={storyData[2].title} text={storyData[2].text} imageReference={storyData[2].imageReference} justify={storyData[2].justify} color={storyData[2].color}/>
        <Story title={storyData[3].title} text={storyData[3].text} imageReference={storyData[3].imageReference} justify={storyData[3].justify} color={storyData[3].color}/>
      </div>
      <Footer />
    </div>
  )
}

export default Stories;