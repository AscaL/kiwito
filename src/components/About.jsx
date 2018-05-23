import React, { Fragment } from 'react';
import MapComponent from './MapComponent';

const About = () => {
  return (
    <Fragment>
      <MapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />;
    </Fragment>
  );
};

export default About;
