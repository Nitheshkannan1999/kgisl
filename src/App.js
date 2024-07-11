import CallSummary from "./Components/CallSummary";
import Header from "./Components/Header";
import logo from "./logo.svg";
import "./Components/styles/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <CallSummary />
    </div>
  );
}

export default App;
