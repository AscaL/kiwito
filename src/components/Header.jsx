import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Typography variant="title" color="inherit">
        Dr. Kiwi
      </Typography>
    </Toolbar>
  </AppBar>
);
