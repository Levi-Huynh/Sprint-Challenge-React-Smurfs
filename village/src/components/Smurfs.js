import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              
              <Link className="link" to='/smurf-form'>Add A Smurf</Link>
             <Link className="link" to='/update-form'>Update Smurf</Link>
             <Link className="link" to='/update-form'>Delete Smurf</Link>
             </div>
            );
          })}
        
        </ul>

      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
