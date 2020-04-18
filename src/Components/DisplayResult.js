import React from "react";

const DisplayResult = props => {
  const {result, image} = props;

  return (
    <div className="result-container">
      <div className="result-value">{ result }</div>
      <img src={image} alt="pizza image" className="result-image"/>
    </div>
  )
}

// DisplayResult.propTypes = {
//   image: string.isRequired,
//   result: string.isRequired,
// }

export default DisplayResult