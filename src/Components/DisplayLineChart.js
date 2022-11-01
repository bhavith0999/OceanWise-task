import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

var modifyFormatter = (value, name, props) => {
    const nameJSX = <span><span style={{
        display: "inline-block",
        marginRight: "5px",
        borderRadius: "10px",
        width: "10px",
        height: "10px",
        backgroundColor: props.color
    }}></span>{'Measure Value'} : {value}</span>
    return [nameJSX];
}

function DisplayLineChart(props) {

    return (
        <LineChart
            width={800}
            height={300}
            data={props?.data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}>
            <CartesianGrid strokeDasharray={10} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={modifyFormatter} />
            <Legend />
            {/* {getLineChart()} */}
            <Line type="monotone" dataKey="FL" stroke="#8884d8" />
        </LineChart>


    );

}
export default DisplayLineChart;