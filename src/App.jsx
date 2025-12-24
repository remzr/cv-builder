import React from 'react';
import { useState } from 'react';
import './App.css'

//Components
import Section from './components/section'
import Cv from './components/Cv'

function App() {

    //Allgemeine Section
    const [preName, setPreName] = useState("");  
    const [familyName, setFamilyName] = useState("");
    const [mailAdress, setMailAdress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [algSectionVisible, setAlgSectionVisible] = useState("");

    const handleChange = (e) => {
      
        let targetField = e.target.value;

        switch (e.target.id) {
            case "preName":
                setPreName(targetField);
                break;
            case "familyName":
                setFamilyName(targetField);
                break;
            case "mailAdress":
                setMailAdress(targetField);
                break;
            case "phoneNumber":
                setPhoneNumber(targetField);
                break;               
        };
      }

      const closeEdit = (f) => {
        setAlgSectionVisible(!algSectionVisible);
      }

  return (
    <>

      {algSectionVisible && (
        <Section  
          handleChange={handleChange}
          closeEdit={closeEdit}
          preName={preName} 
          familyName={familyName} 
          mailAdress={mailAdress} 
          phoneNumber={phoneNumber}
        />
      )}
      <main>
        <Cv 
          preName={preName} 
          familyName={familyName} 
          mailAdress={mailAdress} 
          phoneNumber={phoneNumber}
        />
        <button onClick={() => setAlgSectionVisible(!algSectionVisible)}>
          Persönliche Angaben bearbeiten
        </button>
      </main>
    </>
  )
}

export default App
