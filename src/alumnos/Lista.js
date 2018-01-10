import 'babel-polyfill';
import React, { Component } from 'react';
import { List, TextField } from 'admin-on-rest';

export const AlumnosLista = (props) => (
    <List {...props} perPage={25}>
        <TextField source='nombre' label='Nombre' />        
        <TextField source='apellido' label='Apellido' />        

    </List>
);