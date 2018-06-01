import data from '../data.json'
import CONSTANTS from '../constant/constant';

export  function fetchTrade(){
    return{
        type:CONSTANTS.FETCH_USER,
        payload:data
    }
}
export function fetchTradeHeader(){
    return{
        type:CONSTANTS.FETCH_HEADER,
        payload:[
            {headerName: "Trade Date", field: "tradeDate"},
            {headerName: "Commodity", field: "commodity"},
            {headerName: "Side", field: "side"},
            {headerName: "Qty(MT)", field: "quantity"},
            {headerName: "Price(/MT)", field: "price"},
            {headerName: "Counterparty", field: "counterParty"},
            {headerName: "Location", field: "location"}
        ]
    }
}

export function addAction(task){
    return{
        type:CONSTANTS.ADD_TODO,
        payload:task
    }
}

export function testAction(){
    return {
        type: "TEST_ACTION"
    }
}