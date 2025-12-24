import './App.css'
import { useCallback, useState } from 'react';

//Components
import Section from './components/section'
import Cv from './components/Cv'

function App() {

    const [preName, setPreName] = useState("");  
    const [familyName, setFamilyName] = useState("");
    const [mailAdress, setMailAdress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    /* const handleChange = useCallback((e) => { //Not working yet
        let targetField = e.target.value;
        console.log(e.target.value);

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
        };*/

  return (
    <>
      <Cv 
        preName={"Remo"} 
        familyName={"Moser"} 
        mailAdress={"remo@mail.com"} 
        phoneNumber={"+44 999 99 99"}
      />
      <Section  
        preName={"Remo"} 
        familyName={"Moser"} 
        mailAdress={"remo@mail.com"} 
        phoneNumber={"+44 999 99 99"}
      />
    </>
  );
};

export default App
