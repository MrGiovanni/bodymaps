import React from 'react';

const ButtonGroup = (props) => {
  return (
    <div className="button-group">
      {Object.keys(props.buttonsUrls).map((buttonText, index) => (
        <a href={props.buttonsUrls[buttonText]} className="btn" target="_blank">{buttonText}</a>
      ))}
    </div>
  );
};

export default ButtonGroup;