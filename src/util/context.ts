import React from 'react';
import Nominations from 'src/models/nominations';
import {updateNominees} from './nominationsGateway';

const context = React.createContext({
  nominations: new Nominations(updateNominees),
});

export default context;
