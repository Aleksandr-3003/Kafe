import React, { Component } from 'react'
import rest  from './Ulrest'

export default class Restorans extends Component {
  state={
    display: false,
    title: '',
    url: '',
};
  disL=()=>{
    const { display } = this.state;
    this.setState({display: !display})
  };

  mRe = (rest) => {
    const {title, id} = rest;
    this.setState({title:title});
  };
  
  render() {
    rest.map(rest=>{
    console.log(rest.title);});
    return (
      <div>
        
       <button onClick={this.disL} className=''>
          кафешки
        </button>

        {this.state.display?(
        <ul>
          
          {rest.map(rest=>{

          return <li onMouseOver={()=>this.mRe(rest)}>{rest.title}</li>;  
          })} 
        </ul>
       
        ):null }

        
              
      </div> 
    )
  }
}
