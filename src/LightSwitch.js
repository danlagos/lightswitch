import React, { Component} from 'react';

class LightSwitch extends Component{
  constructor(props){
  super(props)
  this.state = {
    light:"off",
    color: "white"
  }
}

incrementCounter(){
  let { light,color } = this.state
  light= (light==="on" ? "off" : "on")
  color= (light === "on" ? "yellow" : "white")
  this.setState({light:light})
  this.setState({color:color})
}

  render(){
    var colorStyle = {
      background : this.state.color
    }
    return(
      <div onClick={this.incrementCounter.bind(this)} style={colorStyle} className="container">Light is : {this.state.light} </div>
    )
  }
}

export default LightSwitch
