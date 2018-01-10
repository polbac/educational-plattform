import 'babel-polyfill';
import React, { Component } from 'react';
import { Create, TextInput, SimpleForm, DateInput, SelectInput, BooleanInput } from 'admin-on-rest';

export const AlumnosCrear = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='nombre' label='Nombre' />        
            <TextInput source='apellido' label='Apellido' />        
            <TextInput source='dni' label='DNI' />        
            <TextInput source='titulo' label='Titulo' />        
            <DateInput source='anio_egreso' label='Año Ingreso' />        
            <TextInput source='telefono' label='Telefono' />        
            <TextInput source='domicilio' label='Domicilio' />        
            <TextInput source='localidad' label='Localidad' />        
            <TextInput source='provincia' label='Provincia' />        
            <TextInput source='lugar_nacimiento' label='Lugar de Nacimiento' />        
            <TextInput source='lugar_residencia' label='Lugar de Residencia' />        
            <TextInput source='email' label='E-mail' type="email" />        
            <SelectInput source="sexo" label="Sexo" choices={[
                { id: 'femenini', name: 'Femenino' },
                { id: 'masculino', name: 'Masculino' },
                { id: 'otro', name: 'Otro' },
            ]} />
            <TextInput source='anio_inscripcion' label='Año Inscripción' />        
            <DateInput source='fecha_nacimiento' label='Fecha de Nacimiento' />        
            <BooleanInput source="carrera_aprovada" label="Carrera Aprovada" />

        </SimpleForm>
    </Create>
);