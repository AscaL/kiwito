import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 41.9, lng: 12.511 }}>
      {props.isMarkerShown && <Marker position={{ lat: 41.9, lng: 12.511 }} />}
    </GoogleMap>
  ))
);

export default MapComponent;
