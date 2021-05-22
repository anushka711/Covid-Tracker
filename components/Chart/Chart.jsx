import React, {useEffect, useState} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data, country}) =>{
    const [dailyData, setDailyData] = useState([]);
   
    useEffect(() => {
         const fetchAPI = async () => {     
            setDailyData(await fetchDailyData());     
         }
        fetchAPI();   
    },[]);

    const dates = dailyData.map(({ date }) => date);
    const cases = dailyData.map(({confirmed}) =>confirmed);
    const demise = dailyData.map(({ deaths }) => deaths);

    const dataNeeded={
        labels: dates,
        datasets:[{label: "Infected", data: cases, borderColor:"#3333ff", fill:true,},
                  {label: 'Deaths', data: demise, borderColor:'red', backgroundColor:'rgba(255,0,0,0.5)', fill:true }
        ]}
  
    const LineChart =(
        dailyData?(<Line data = {dataNeeded}/>): null
    );

    const barChart =(
        data.confirmed ? (
            <Bar 
                data={{
                    labels : ['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'], 
                        data:[data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]       
                }}
                options={{
                    legend : {display : false},
                    title :{display :true, text : `Current state in ${country}`}
                }}
            />
        ): null
    );

    return (
        <div className={styles.container}>
            {country ? barChart :LineChart}
        </div>
    );
}
export default Chart;
