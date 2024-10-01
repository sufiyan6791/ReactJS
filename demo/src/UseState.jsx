


//hooks

//usestate

// functional component - stateless

//class component - stateful

import React, { Component } from 'react'

export default class UseState extends Component {
    constructor(){
        super();

        this.state= {
            city:"mumbai",
            pincode:12345,


        }
    }
        changePincode=()=>{
this.setState({pincode: 2121})
        }


        changecity=()=>{
            this.setState({city:"ahmedabad"})
        }
   
  render() {
    return (
      <div>
        <h3>classcomponent</h3>
        <h4>city:{this.state.city}</h4>
        <h4>pincode:{this.state.pincode}</h4>

        <button onClick={this.changePincode}> changepincode</button>
        <button onClick={this.changecity}> changecity</button>
      </div>
    )
  }
}



    
