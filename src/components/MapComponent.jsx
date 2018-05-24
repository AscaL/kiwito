import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={props.defaultZoom} defaultCenter={props.defaultCenter}>
      {props.isMarkerShown && <Marker position={props.position} />}
    </GoogleMap>
  ))
);

export default MapComponent;
