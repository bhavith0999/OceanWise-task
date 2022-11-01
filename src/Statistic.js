
import React , {useState} from 'react';
import MyDropdownList from './DropDown';
import MyLineChart from './LineChart'
import axios from 'axios';
function  Statistic(props) {
  
    return (
      <div>
       <p>count: {state}</p>
       <MyLineChart data={props.data}/>
      </div>
    )
}

export default Statistic;