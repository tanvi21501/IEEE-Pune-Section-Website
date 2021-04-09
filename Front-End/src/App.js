import './App.css';
import StudentSocities from './components/About/StudentSocieties/StudentSocities';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageFromChair from './components/About/MessageFromChair/MessageFromChair';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/studentSocieties" component={StudentSocities} />
          <Route path="/message-from-chair" component={MessageFromChair} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
