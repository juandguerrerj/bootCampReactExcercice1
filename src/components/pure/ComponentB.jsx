import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/Contact'

function ComponentB({contact}) {
  
  const [contactChanged, setContactChanged] = useState(contact);

  const changeContactState = () => {
    setContactChanged(contactChanged => ({
      onLine: !contactChanged.onLine
    }));   
  }

  return (
    <div>
      <h3>
        Estado: Contacto { contactChanged.onLine ? 'En Línea' : 'No Disponible'}
      </h3> 
      <button onClick={changeContactState}> Cambiar Estado </button>
    </div>
  )
}

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
}

export default ComponentB
