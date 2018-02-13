import 'babel-polyfill';
import React, { Component } from 'react';
import { TabbedForm, FormTab, TextField, Show, SimpleShowLayout, DateField, EditButton, RichTextField } from 'admin-on-rest';

export const AlumnosVista = ({ ...props }) => (
    <Show title="Detalle de Estudiante" {...props}>
        <TabbedForm>
            <FormTab label="Datos Personales">
                <TextField source='name' label='Nombre' />        
                <TextField source='lastname' label='Apellido' />        
                <TextField source='document' label='DNI' />        
                <TextField source='phone' label='Telefono' />        
                <TextField source='email' label='E-mail' type="email" />        
                <TextField source='gender' label='Gender' />        
            </FormTab>
            <FormTab label="Domicilio">
                <TextField source='address' label='Domicilio' />        
                <TextField source='locality' label='Localidad' />        
                <TextField source='province' label='Provincia' />        
                <TextField source='city' label='Ciudad' />        
                <TextField source='placer_birht' label='Lugar de Nacimiento' />        
                <TextField source='place_residence' label='Lugar de Residencia' />        
            </FormTab>
            <FormTab label="Alumno">
            <DateField source='entry' label='Fecha de Entrada' />        
            <DateField source='egress' label='Fecha de Egresado' />        
            <TextField source='status' label='Estado' />        
            </FormTab>
        
        </TabbedForm>
    </Show>
);
