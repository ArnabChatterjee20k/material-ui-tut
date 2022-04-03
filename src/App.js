import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Font from './Tutorials/Font';

function App() {
  return (
    <Router>
      <Switch>
        {/* Tutorials */}
        <Route path="/typography">
          <Font />
        </Route>

        {/* Application code */}
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
