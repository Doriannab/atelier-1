import React, { useState, Fragment } from "react"
import "./App.css";
import data from "./mock.data.json";
import { nanoid } from 'nanoid';
import Row from "./components/Row";
import Edit  from "./components/Edit";


const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    email:'',
    module: '',
    statut: '',
  });

  const [editFormData, setEditFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    email:'',
    module: '',
    statut: '',
  })

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName]= fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) =>{
    event.preventDefault();

    const  fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;


    const newFormData = {...editFormData};
    newFormData[fieldName]= fieldValue;

    setEditFormData(newFormData)

  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      prenom: addFormData.prenom,
      nom: addFormData.nom,
      age: addFormData.age,
      email: addFormData.email,
      module: addFormData.module,
      statut: addFormData.statut,

    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
        event.preventDefault(); 
        const editedContact = {
          id: editContactId,
      prenom: editFormData.prenom,
      nom: editFormData.nom,
      age: editFormData.age,
      email: editFormData.email,
      module: editFormData.module,
      statut:editFormData.statut,

        }

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId);

        newContacts[index] = editedContact;
        
        setContacts(newContacts);
        setEditContactId(null)
  }

  const handleEditClick = (event, contact)=>{
     event.preventDefault();
     setEditContactId(contact.id);
     

     const formValues = {

      id: nanoid(),
      prenom: contact.prenom,
      nom: contact.nom,
      age: contact.age,
      email: contact.email,
      module: contact.module,
      statut: contact.statut,
     }
     setEditFormData(formValues);
  };

  const handleCancelClick = () => {
      setEditContactId(null);
  };


  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

newContacts.splice(index, 1);

setContacts(newContacts);

  }

  return <div className="app-container">
  <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
      <tr>
        <th>Prenom</th>
        <th>Nom</th>
        <th>Age</th>
        <th>E-mail</th>
        <th>Module</th>
        <th>Statut</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map((contact) =>(
       <Fragment key={contact.id}>
       { editContactId === contact.id ? <Edit editFormData={editFormData} handleEditFormChange={handleEditFormChange}  handleCancelClick={handleCancelClick}  />: (
        <Row contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
       )}
       </Fragment>
      ) )}
        
      </tbody>
    </table>
    </form>


    <h2>Add a Student</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="prenom" required="required" placeholder="Enter un prenom" onChange={handleAddFormChange} />
      <input type="text" name="nom" required="required" placeholder="Enter un nom" onChange={handleAddFormChange} />
      <input type="number" name="age" required="required" placeholder="saisir age" onChange={handleAddFormChange}  />
      <input type="email" name="email" required="required" placeholder="Enter l'emal" onChange={handleAddFormChange}  />
      <input type="text" name="module" required="required" placeholder="choisir un module" onChange={handleAddFormChange}  />
      <input type="text" name="satut" required="required" placeholder="Enter un statut" onChange={handleAddFormChange}  />

      <button type ="submit">Add</button>
      
    </form>
  </div>
};



export default App;
