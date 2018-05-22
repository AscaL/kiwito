import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ContactIcon from '@material-ui/icons/Contacts';
import LocationIcon from '@material-ui/icons/LocationOn';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export default props => (
  <Paper>
    <Tabs value={0} indicatorColor="secondary" textColor="secondary" centered>
      <Tab icon={<ContactIcon />} label="RECENTS" />
      <Tab icon={<LocationIcon />} label="FAVORITES" />
      <Tab icon={<PersonPinIcon />} label="NEARBY" />
    </Tabs>
  </Paper>
);
