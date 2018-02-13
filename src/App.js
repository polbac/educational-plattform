import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource, jsonServerRestClient, fetchUtils } from 'admin-on-rest';
import UserIcon from 'material-ui/svg-icons/social/group';

import Theme from './theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import authClient from './authClient';
import authLogin from './authLogin';

import config from './config';

import { AlumnosLista } from './alumnos/Lista';
import { AlumnosCrear } from './alumnos/Crear';
import { AlumnosVista } from './alumnos/Vista';

const AppTitle = () => (
    <div
        style={{
            textAlign: 'center',
            marginTop: 12,
        }}
    >
        <img 
            src="./images/eduly.png" 
            align='middle'
            width='90' 
        /> <span style={{
                position: 'relative',
                top: -10,
                letterSpacing: '3px',
        }}> :: {config.name}</span>
    </div>
  );
  
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `JWT ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const restClient = jsonServerRestClient(config.api, httpClient);

export default () => (
            <Admin
                theme={getMuiTheme(Theme)}
                restClient={restClient}
                authClient={authClient}
                loginPage={authLogin}
                title={<AppTitle />}
            >
                <Resource icon={UserIcon} options={{ label: 'Estudiantes' }} name="students" label="Estudiantes" list={AlumnosLista} create={AlumnosCrear} show={AlumnosVista}/>  
            </Admin>
);
