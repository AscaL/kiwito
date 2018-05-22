import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Header />
          <MainPage />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
