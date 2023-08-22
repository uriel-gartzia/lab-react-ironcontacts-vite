import "./App.css";
import allContacts from "../src/contacts.json"
import { useState } from "react";
console.log(allContacts)



function App() {

  const [ contacts, setContacts ] = useState(allContacts.slice(0, 5));
  console.log("quiero ver los 5 primeros contactos", allContacts.slice(0, 5))

  const handleAddContact = () => {
    // console.log("Añadiendo un nuevo contacto")
    let randomNumber = Math.random() * allContacts.length // me devuelve un número entre 0 y 52 
    // console.log(randomNumber)
    let randomIndex = Math.floor(randomNumber) // redondea el resultado hacia abajo
    // console.log(randomIndex)
    let randomContact = allContacts[randomIndex] // me devuelve un objeto aleatorio del array allContacts
    // console.log(randomContact)
    let clone = JSON.parse(JSON.stringify(contacts))
    clone.unshift(randomContact) //lo añade al inicio del array

    setContacts(clone)
  }

  const handleSortAZ = () => {
    // console.log("orden alfabético")

    let clone = JSON.parse(JSON.stringify(contacts))

    clone.sort((cont1, cont2) => {
      // cont1.name.localeCompare(cont2.name) NO ME SALE :(
        return cont1.name > cont2.name ? 1 : -1
    })

    setContacts(clone)
  }

  const handleSortPop = () => {
    // console.log("popularidad")

    let clone = JSON.parse(JSON.stringify(contacts))

    clone.sort((cont1, cont2) => {
      if (cont1.popularity < cont2.popularity) {
        return 1
      } else {
        return -1
      }
    })
    setContacts(clone)
  }

  const handleDeleteContact = (index) => {
    console.log("delete")

    let clone = JSON.parse(JSON.stringify(contacts))

    clone.splice(index, 1)

    setContacts(clone)

  }

  

    return (
      <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={handleAddContact}>Add Random Contact</button>
      <button onClick={handleSortAZ}>Sort by name</button>
      <button onClick={handleSortPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
         
      {contacts.map((eachContact, i) => {
       return (
      <tr>
        <td><img src={eachContact.pictureUrl} alt="" width={75}/></td>
        <td>{eachContact.name}</td>
        <td>{eachContact.popularity}</td>
        <td>{eachContact.wonOscar === true ? "🏆" : null}</td>
        <td>{eachContact.wonEmmy === true ? "🌟" : null}</td>
        <td><button onClick={() => handleDeleteContact(eachContact[i])}>Delete</button></td>
      </tr>

       )

  
     
      })
   
}   
</tbody>
 </table>
  </div>
  )
  
  
  
}

export default App;
