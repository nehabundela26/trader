import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import Nav from './component/nav.jsx'
import TradeList from './component/tradeList.jsx'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import {connect} from 'react-redux';
import {fetchTrade,fetchTradeHeader,addAction,testAction} from './action/listAction'
import TradeEditBox from './component/TradeEditBox.jsx'

class App extends Component {
	constructor(props){
		super(props);		
	}
	componentWillMount(){
    this.props.fetchTrade();
    this.props.fetchTradeHeader();
  }

  componentWillReceiveProps = (nextProps)=> {
    console.log("Testing props", nextProps)
  }
	onAdd = (task) => {
    this.props.onAddAction(task);
    this.props.testAction();
  }
  render() {
	 console.log("redux",this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Metallic App</h1>
        </header>
		<div className="text-left">
		<Nav gotoHome={this.gotoTrade} />
		<TradeList rowData={this.props.tradeListRow} columnDefs={this.props.tradeListCol} />
		</div>	
    <TradeEditBox onAdd={this.onAdd}/>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tradeListRow:state.rowData,
    tradeListCol:state.columnDefs,
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddAction: task => dispatch(addAction(task)),
    fetchTrade: () => dispatch(fetchTrade()),
    fetchTradeHeader: () => dispatch(fetchTradeHeader()),
    testAction: () => dispatch(testAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps  )(App);