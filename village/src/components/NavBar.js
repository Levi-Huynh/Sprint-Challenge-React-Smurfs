
import React from 'react';
import {NavLink} from 'react-router-dom';

export default props => {
  return (
   
      <div className='navbar'>
    
            
            
            <NavLink  activeClassName="activeNavButton" to='/smurfs'><button>Smurfs</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/smurf-form'><button> Add Smurf Form</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/update-form'><button>Update Smurf Form</button></NavLink>
      
      </div>
   
  )
}
