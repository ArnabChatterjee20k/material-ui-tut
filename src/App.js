import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Font from './Tutorials/Font';
import Button_tut from './Tutorials/Button_tut';
import Icons_tut from './Tutorials/Icons_tut';
import Style_tut from './Tutorials/Style_tut';
import Custom_theme from './Tutorials/Custom_theme';
import Text_Field from './Tutorials/Text_Field';

function App() {
  return (
    <Router>
      <Switch>
        {/* Tutorials */}
        <Route path="/typography" component={Font} exact/>
        <Route path="/buttons" component={Button_tut} exact/>
        <Route path="/icons" component={Icons_tut} exact/>
        <Route path="/style" component={Style_tut} exact/>
        <Route path="/themes" component={Custom_theme} exact/>
        <Route path="/textfield" component={Text_Field} exact/>

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
