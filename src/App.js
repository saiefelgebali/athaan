import Calendar from "./components/Calendar";
import SalahTimes from "./components/SalahTimes";
import './app.css';
import DateProvider from "./components/DateProvider";

function App() {
  return (
    <div id="app">
      <div className="main">
        <DateProvider>
          <Calendar />
          <SalahTimes />
        </DateProvider>
      </div>
    </div>
  );
}

export default App;
