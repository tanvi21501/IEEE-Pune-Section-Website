import './App.css';
import StudentSocities from './components/About/StudentSocieties/StudentSocities';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/studentSocieties" component={StudentSocities} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
