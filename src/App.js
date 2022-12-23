import logo from './logo.svg';


// import RadarChart from "./Components/RadarChart";
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import PlayerComponent from "./Components/PlayerComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
import RadarChart from "./Components/RadarChart";
import LineChart from "./Components/LineChart";
import StartStopInterface from "./Components/StartStopInterface";
// import {RadarChart} from "chart.js";
function App() {
  return (
      <div className={'flex-column'}>
          {/*<StartStopInterface/>*/}
          {/*<RadarChart />*/}
          {/*<LineChart/>*/}
          <PlayerComponent/>
      </div>
  );
}

export default App;
