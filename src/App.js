import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource, jsonServerRestClient } from 'admin-on-rest';
import Theme from './theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import config from './config';

import { AlumnosLista } from './alumnos/Lista';
import { AlumnosCrear } from './alumnos/Crear';

class App extends Component {
    

    render() {
        return (
            <Admin
                theme={getMuiTheme(Theme)}
                restClient={jsonServerRestClient('http://localhost/api')}
                title={config.name}
            >
            <Resource name="alumnos" list={AlumnosLista} create={AlumnosCrear} />
   
            </Admin>
        );
    }
}

export default App;