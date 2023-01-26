import React from 'react';
import { Contact } from '../../models/Contact';
import ComponentB from './ComponentB';

function ComponentA() {
  
  const defaultContact = new Contact('Juan', 'Smith', 'sthg@gmail.com', false);
  
  return (
    <div>
      <h2>
        Información del contacto: 
      </h2>
      <h3>
        Nombre: {defaultContact.name}
      </h3>
      <h3>
        Apellido: {defaultContact.lastName}
      </h3>
      <h3>
        Email: {defaultContact.email}
      </h3>
      <ComponentB contact={defaultContact}></ComponentB>
    </div>
  )  
}

export default ComponentA;