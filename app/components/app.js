
import '@babel/polyfill';
import '../style/styles.scss';
import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from './history';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      currentPath: '',
    };
  }

    clearError = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Router history={history}>
          <div className='App'>
            <title>React Mumble Client</title>

            <Main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route component={Home}/>
              </Switch>
            </Main>
          </div>
        </Router>
      );
    }
}

export default App;
