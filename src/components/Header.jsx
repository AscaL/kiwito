import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Dr. Kiwi
      </Typography>
    </Toolbar>
  </AppBar>
);
