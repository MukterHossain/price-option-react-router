import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        {id: 1, name: "Student A", math: 82, physics: 92, chemistry: 85},
        {id: 2, name: "Student B", math: 63, physics: 94, chemistry: 55},
        {id: 3, name: "Student C", math: 95, physics: 82, chemistry: 65},
        {id: 4, name: "Student D", math: 70, physics: 98, chemistry: 80},
        {id: 5, name: "Student E", math: 85, physics: 93, chemistry: 68},
        {id: 6, name: "Student F", math: 90, physics: 78, chemistry: 80},
        {id: 7, name: "Student G", math: 72, physics: 99, chemistry: 89},
        {id: 8, name: "Student H", math: 80, physics: 92, chemistry: 80},
        {id: 9, name: "Student I", math: 87, physics: 90, chemistry: 90},
        {id: 10, name: "Student J", math: 92, physics: 95, chemistry: 70},
       
        
      ]

    return (
        <div>
            <LChart width={600} height={400} data={mathMarksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='green'></Line>
                <Line dataKey="physics" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>

            </LChart>
            
        </div>
    );
};

export default LineChart;