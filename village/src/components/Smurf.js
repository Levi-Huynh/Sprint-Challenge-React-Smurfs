import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Route } from 'react-router-dom';




const Smurf = props => {
  console.log(props.name);
  return (
   
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
    
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

