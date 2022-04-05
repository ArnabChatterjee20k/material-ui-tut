import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Font from './Tutorials/Font';
import Button_tut from './Tutorials/Button_tut';
import Icons_tut from './Tutorials/Icons_tut';
import Style_tut from './Tutorials/Style_tut';

function App() {
  return (
    <Router>
      <Switch>
        {/* Tutorials */}
        <Route path="/typography" component={Font}/>
        <Route path="/buttons" component={Button_tut}/>
        <Route path="/icons" component={Icons_tut}/>
        <Route path="/style" component={Style_tut}/>

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
