import logo from './logo.svg';

import FirstComponent from "./Components/FirstComponent";
// import RadarChart from "./Components/RadarChart";
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import RadarChart from "./Components/RadarChart";
import LineChart from "./Components/LineChart";
import StartStopInterface from "./Components/StartStopInterface";
// import {RadarChart} from "chart.js";
function App() {
  return (
      <div className={'flex-column'}>
          <StartStopInterface/>
          {/*<RadarChart />*/}
          {/*<LineChart/>*/}
      </div>
  );
}

export default App;
