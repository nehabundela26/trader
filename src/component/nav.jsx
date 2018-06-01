import React, { Component } from 'react';

class Nav extends Component{
	
	render(){
		return(
		<div>
		<button onClick={this.props.gotoTrade}>Trades</button>
		 <button >Transfers</button>
		 <button >Transports</button>
		 </div>
		)
	}
} 
export default Nav