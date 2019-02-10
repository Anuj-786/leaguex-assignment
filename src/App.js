import React, { Component } from 'react';
import {history} from './history';
// import './App.css';
import Container from 'muicss/lib/react/container';
import Appbar from 'muicss/lib/react/appbar';
import Login from './containers/Login';
import { Router, Route } from 'react-router-dom';
import ListAllMatches from './containers/AllMatches';
import PrivateRoute from './components/Privateoutes';
import GetAllLeague from './containers/GetAllLeague';

class App extends Component {
  render() {
    
    return (
        <Container fluid={true} style={{padding: 0}} >
          <div className="App">
            <Appbar color="primary">
            <table width="100%">
              <tbody>
                <tr>
                  <td className="mui--appbar-height mui--text-title" style={{paddingLeft: '15px'}}>Welcome To LeagueX</td>
                </tr>
              </tbody>
            </table>
            </Appbar>
            <Router history={history}>
              <div>
                  <PrivateRoute exact path="/" component={ListAllMatches} />
                  <Route path="/AllMacthesList" component={ListAllMatches} />
                  <Route path="/login" component={Login} />
                  <Route path="/AllLeagues" component={GetAllLeague}/>
              </div>
            </Router>
          </div>
        </Container>
      
      
    );
  }
}

export default App;
