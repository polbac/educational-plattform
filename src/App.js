import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource, jsonServerRestClient } from 'admin-on-rest';

import { AlumnosLista } from './alumnos/Lista';
import { AlumnosCrear } from './alumnos/Crear';

class App extends Component {
    

    render() {
        return (
            <Admin
                restClient={jsonServerRestClient('http://localhost/api')}
                title="IFTS 16 / Dashboard"
            >
            <Resource name="alumnos" list={AlumnosLista} create={AlumnosCrear} />
   
            </Admin>
        );
    }
}

export default App;