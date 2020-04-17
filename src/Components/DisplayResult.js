import React from "react";
import {string} from "prop-types"


const DisplayResult = props => {
  const {result, image} = props;

  return (
    <div>
      <div>{ result }</div>
      <img src={image} alt="pizza image" height="100" width="100" />
    </div>
  )
}

DisplayResult.propTypes = {
  image: string.isRequired,
  result: string.isRequired,
}

export default DisplayResult