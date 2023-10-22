import React from 'react'

const Edit = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input type="text" required="required" placeholder="enter un name" name="prenom" value={editFormData.prenom} onChange={handleEditFormChange} />
      </td>
      <td>
      <input type="text" required="required" placeholder="enter un nom" name="nom" value={editFormData.nom} onChange={handleEditFormChange} />
      </td>
      <td>
      <input type="number" required="required" placeholder="saisir age" name="age" value={editFormData.age} onChange={handleEditFormChange} />
      </td>
      <td>
      <input type="text" required="required" placeholder="enter email" name="email" value={editFormData.email} onChange={handleEditFormChange} />
      </td>
      <td>
      <input type="text" required="required" placeholder="enter un modalité" name="module" value={editFormData.module} onChange={handleEditFormChange} />
      </td>
      <td>
      <input type="text" required="required" placeholder="enter un statut" name="statut" value={editFormData.statut} onChange={handleEditFormChange} />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>cancel</button>
      </td>
    </tr>
  )
}

export default Edit
