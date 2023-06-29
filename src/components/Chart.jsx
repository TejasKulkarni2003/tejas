import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as chartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

chartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({arr=[], currency, days}) => {
    const prices = []
    const date = []
    for (let i = 0; i < arr.length; i++) {
        if(days === "24h"){
            date.push(new Date(arr[i][0]).toLocaleTimeString())
        }
        else{
            date.push(new Date(arr[i][0]).toLocaleString())
        }
        // date.push(new Date(arr[i][0]).toLocaleString())
        prices.push(arr[i][1]);
        date.push()
        
    }
    console.log(date)
    const data = {
        labels:date,
        datasets:[{
            label:`Price in ${currency}`, 
            data:prices, borderColor:"red",
            backgroundColor:"white"
        }]
    }
    return (
        <>
            <Line
                options={{responsive: true}}
                data = {data}
            />
        </>
  )
}

export default Chart