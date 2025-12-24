import React from 'react';
import { useCallback, useState } from 'react';
import './App.css'

//Components
import Section from './components/section'
import Cv from './components/Cv'

function App() {

    const [preName, setPreName] = useState("");  
    const [familyName, setFamilyName] = useState("");
    const [mailAdress, setMailAdress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

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
      
  return (
    <>
      <Cv 
        preName={preName} 
        familyName={familyName} 
        mailAdress={mailAdress} 
        phoneNumber={phoneNumber}
      />
      <Section  
        handleChange={handleChange}
        preName={preName} 
        familyName={familyName} 
        mailAdress={mailAdress} 
        phoneNumber={phoneNumber}
      />
    </>
  );
};

export default App
