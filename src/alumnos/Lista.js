import 'babel-polyfill';
import React, { Component } from 'react';
import { List, TextField, Datagrid, ShowButton } from 'admin-on-rest';

export const AlumnosLista = (props) => (
    <List {...props} perPage={25}>
        <Datagrid>
            <TextField source='id' label='ID' />        
            <TextField source='name' label='Nombre' />        
            <TextField source='lastname' label='Apellido' />        
            <TextField source='document' label='DNI' />        
            <TextField source='email' label='E-mail' />        
            <ShowButton />
        </Datagrid>
    </List>
);