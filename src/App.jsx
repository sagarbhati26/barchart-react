import { useState } from "react";
import BarChart from "./component/BarChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.week),
    datasets: [
      {
        label: "marks obtained",
        data: UserData.map((data) => data.marks),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{width:600}}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;