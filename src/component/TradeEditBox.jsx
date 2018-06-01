import React,{Component} from 'react'

class TradeEditBox extends Component{
    onAdd = (task) => {
        this.newTask.value = '';
		this.props.onAdd({"tradeId":Math.floor(Math.random() * 100 + 1),"side":"Buy","price":3500,"tradeDate":"22/03/2017",
		"status":"OPEN","commodity":task,"counterParty":"Buenos Aires","location":"London","quantity":12});
    }
    render(){
        return(
            <div><h4>TradeEditBox</h4>
            <div className="form-group">
	  			<label htmlFor="commodity">
	  				Commodity
  				</label>
	  			<input 	type="text" 
	  					id="commodity"
	  					className="form-control" 
	  					ref={(input)=>{this.newTask = input;}}
	  					placeholder='Please enter the task' />
	  			<button className="btn btn-primary" 
	  					onClick={() => this.onAdd(this.newTask.value)}>
					Save
				</button>
			</div>
            </div>
        )
    }
}

export default TradeEditBox