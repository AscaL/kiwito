import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default props => (
  <Grid container>
    <Grid item sm>
      <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>Element in Grid</Paper>
    </Grid>
  </Grid>
);