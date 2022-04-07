import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import View from './pages/View'
import Font from './Tutorials/Font';
import Button_tut from './Tutorials/Button_tut';
import Icons_tut from './Tutorials/Icons_tut';
import Style_tut from './Tutorials/Style_tut';
import Custom_theme from './Tutorials/Custom_theme';
import Text_Field from './Tutorials/Text_Field';
import radio_tut from './Tutorials/radio_tut';
import Grid_tut from './Tutorials/Grid_tut';

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
        <Route path="/radio" component={radio_tut} exact/>
        <Route path="/grid" component={Grid_tut} exact/>

        {/* Application code */}
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/view">
          <View />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
