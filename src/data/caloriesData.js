const data = [
  { day: '01', calories: 20 },
  { day: '02', calories: 40 },
  { day: '03', calories: 15 },
  { day: '04', calories: 5 },
  { day: '05', calories: 35 },
  { day: '06', calories: 15 },
  { day: '07', calories: 20 },
  { day: '08', calories: 10 },
  { day: '09', calories: 25 },
  { day: '10', calories: 15 },
  { day: '11', calories: 10 },
  { day: '12', calories: 25 },
  { day: '13', calories: 40 },
  { day: '14', calories: 15 },
  { day: '15', calories: 5 },
  { day: '16', calories: 35 },
  { day: '17', calories: 25 },
  { day: '18', calories: 15 },
  { day: '19', calories: 25 },
  { day: '20', calories: 15 }
];
const chartData = {
  labels: data.map(item => item.day),
  datasets: [
    {
      label: 'Calories',
      data: data.map(item => item.calories),
      backgroundColor: "#c046d3",
      borderRadius: 4,
      barThickness: 12,
      offset:4
    },
  ],
};
export default chartData;
