import React,{Component} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class TradeList extends Component{
	constructor(props){
		super(props)
	}
	onButtonClick = e => {
	
    const selectedNodes = this.gridApi.getSelectedNodes()  
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node)
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
	}
render(){
return(
<div className="ag-theme-balham" style={{height: '500px'}} >
	<AgGridReact onGridReady={ params => this.gridApi = params.api }
		rowSelection="single" columnDefs={this.props.columnDefs}
		rowData={this.props.rowData} onCellClicked={this.onButtonClick}>
	</AgGridReact>
</div>
)
}
}

export default TradeList