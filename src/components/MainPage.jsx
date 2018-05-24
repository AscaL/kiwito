import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MapComponent from './MapComponent';
import { PopperTargetHelper } from 'reactstrap';

export default props => (
  <Grid container>
    <Grid item xs>
      <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>Element in Grid xs</Paper>
    </Grid>
    <Grid item xs>
      <Paper>
        <MapComponent
          defaultZoom={15}
          defaultCenter={{ lat: 41.9, lng: 12.511 }}
          position={{ lat: 41.9, lng: 12.511 }}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />;
      </Paper>
    </Grid>
  </Grid>
);
