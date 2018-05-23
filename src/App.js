import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import About from './components/About';
import Contacts from './components/Contacts';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import brown from '@material-ui/core/colors/brown';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: brown,
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Header />
            <Route path="/home" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Footer />
          </MuiThemeProvider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
