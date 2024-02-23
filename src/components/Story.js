import React from 'react';
import PropTypes from 'prop-types';
import './Story.css';

const Story = ({ title, text, imageReference, justify, color }) => {
  console.log('storyContainer ' + justify + ' ' + color)
  return (
    <div className={'storyContainer ' + justify + ' ' + color}>
      <div className='storyText'>
        <h3 className='title'>
          {title}
        </h3>
        <p className='text'>
            {text}
        </p>
      </div>
      <img 
        className="storyImg"
        // src={require('../resources/image8.jpeg')}
        src={imageReference}
        alt="Man and woman dancing with eachother amongst drums"
      />
    </div>
  )
}

Story.protoTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageReference: PropTypes.string.isRequired,
  justify: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Story;