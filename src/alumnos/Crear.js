import 'babel-polyfill';
import React, { Component } from 'react';
import { Create, AutocompleteInput, TextInput, SimpleForm, DateInput, SelectInput, BooleanInput, TabbedForm, FormTab } from 'admin-on-rest';

const required = value => value ? undefined : 'Required';

export const AlumnosCrear = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Personales">
                <TextInput source='name' label='Nombre' validate={required} />        
                <TextInput source='lastname' label='Apellido' validate={required} />        
                <TextInput source='document' label='DNI' validate={required} />        
                <TextInput source='degree' label='Titulo' validate={required} />        
                <TextInput source='phone' label='Telefono' validate={required} />        
                
                
                
                <TextInput source='email' label='E-mail' type="email" validate={required} />        
                <SelectInput source="gender" label="Sexo"  choices={[
                        { id: 'masculino', name: 'Masculino' },
                        { id: 'femenino', name: 'Femenino' },
                ]} validate={required} />        
        </FormTab>
        <FormTab label="Domicilio">
            <TextInput source='address' label='Domicilio' validate={required} />        
            <TextInput source='locality' label='Localidad' validate={required} />        
            <AutocompleteInput 
                source='province' 
                label='Provincia'
                optionText="value"
                choices={[
                    { id: 1, value: 'Buenos Aires' }
                ]}
            validate={required} />        
            <TextInput source='city' label='Ciudad' validate={required} />        
            <TextInput source='placer_birh' label='Lugar de Nacimiento' validate={required} />        
            <TextInput source='place_residence' label='Lugar de Residencia' validate={required} />        
        </FormTab>
        <FormTab label="Alumno">
            <DateInput source='entry' label='Año Inscripción' validate={required} />        
            <DateInput source='egress' label='Fecha de Egreso' validate={required} />        
            <SelectInput 
                source="status" 
                label="Carrera Aprovada" 
                choices={[
                    { id: 'alumno_regular', name: 'Alumno Regular' },
                    { id: 'egresado', name: 'Egresado' },
                ]}
            validate={required} />        
        </FormTab>
        </TabbedForm>
    </Create>
);
