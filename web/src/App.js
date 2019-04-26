import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from "./Nav"
import UploadForm from './UploadForm';
import AnalysisView from './AnalysisView';
import AnalysisList from './AnalysisList';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <main role="main" className="container">
              <div>
                <Switch>
                  <Route exact path='/' component={AnalysisList}/>
                  <Route exact path='/submit' component={UploadForm}/>
                  <Route exact path='/analysis/:aid' component={AnalysisView}/>
                </Switch>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
