import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';


import {
  BrowserRouter as Router,
  NavLink,
  Route,
  withRouter
} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: "",
      PostSuccessMessage: "",
      postError:""
    };
  }

  componentDidMount() {

    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log("resolved", res)
    
      this.setState({
        smurfs: res.data,
        error:""
      });
    })
    .catch(err=> {
      console.log("error", err)
      this.setState({error:"smurf not found"})
    });

  };

addSmurfServer = (body)=> {
axios
.post('http://localhost:3333/smurfs', body)
.then(res => {
  console.log("resolved", res)
this.setState({
  PostSuccessMessage: "sucess!",
  postError: ""
});
this.props.history.push('/');
window.location.reload();
})
.catch(err=> {
  console.log("error", err);

  this.setState({
    postError:"error no smurf added",
    PostSuccessMessage: ""
  });
});

};





  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs)
    return (
      <div className="App">
    
    <Route path="/" component={NavBar}/>
      <Route exact path ="/smurf-form" render={props => (<SmurfForm {...props} addSmurfServer={this.addSmurfServer}/>)}/>

       <Route exact path ="/" render={props => (<Smurfs {...props}  smurfs={this.state.smurfs} />)}/>
      </div>
    );
  }
}

export default App;
