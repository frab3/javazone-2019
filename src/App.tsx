import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { List } from '../node_modules/immutable';
import './App.css';
import { Navigation, NavRoute } from './components/Navigation/Navigation';
import { Frontpage } from './pages/Frontpage/Frontpage';

const routes: List<NavRoute> = List([
  {title: 'Home', url: '/'},
  {title: 'Info', url: '/info'},
  {title: 'Tickets', url: '/tickets'},
  {title: 'Partners', url: '/partners'}
]);

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Navigation sticky routes={routes} />
          <Route exact path="/" component={Frontpage} />
        </div>
      </Router>
    );
  }
}

export default App;