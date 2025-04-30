const lineChartData ={
    labels:[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    datasets:[
        {
            label: "Running",
            data:[20,40,20,80,40,40,20,60,60,20,100,60],
            borderColor:"#1ea7c5",
            pointBorderColor: '#1ea7c5',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            pointBackgroundColor:'#1ea7c5',
            hoverOffest:4

        },
        {
            
            label: "Cycling",
            data:[45,100,40,40,0,0,80,20,40,40,40,40],
            borderColor:"#ff9432",
            pointBorderColor: "#ff9432",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            pointBackgroundColor:"#ff9432",
            hoverOffest:4

        },
        {
            label: "Yoga",
            data:[65,65,65,120,120,80,120,100,100,120,120,120],
            borderColor:"#c046d3",
            pointBorderColor: "#c046d3",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            pointBackgroundColor:"#c046d3",
            hoverOffest:8,

        }
    ]

};
export {lineChartData}