import React from 'react'

const Row = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
          <td>{contact.prenom}</td>
          <td>{contact.nom}</td>
          <td>{contact.age}</td>
          <td>{contact.email}</td>
          <td>{contact.module}</td>
          <td>{contact.statut}</td>
          <td>
            <button type='button' className="ro" onClick={(event)=> handleEditClick(event, contact)}>Edit</button>
            <button type="button" className="ra" onClick={()=> handleDeleteClick(contact.id)}>Delete</button>
          </td>
        </tr>
  )
}

export default Row
