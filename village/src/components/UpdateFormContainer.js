import React from 'react';
import UpdateForm from './UpdateForm';

function UpdateFormContainer(props) {


return (
<div>
   {props.smurfs.map(smurf=> (
    <div>
       
       <UpdateForm  name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
      updateSmurf={props.updateSmurf.bind(this)}
        delete={props.delete} 
       />
    
      

</div>
 ) )} 



</div>
)

}

export default UpdateFormContainer;