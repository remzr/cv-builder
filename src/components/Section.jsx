import { useState } from "react";

export default function Section() {
    const [preName, setPreName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [mailAdress, setMailAdress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleChange(e) {
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
        }
    }

    return(
        <form>
            <h2>Allgemeine Angaben</h2>
            <fieldset>
                    <label for="name"> Vorname:
                        <input type="text" id="preName" value={preName} onChange={handleChange} />
                    </label>
                    <label for="name"> Nachname:
                        <input type="text" id="familyName" value={familyName} onChange={handleChange} />
                    </label>
                    <label for="email"> E-Mail:
                        <input type="email" id="mailAdress" value={mailAdress} onChange={handleChange} />
                    </label>
                    <label for="tel"> Telefon:
                        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handleChange} />
                    </label>
                <p>
                    <input class="submitButton" type="submit" value="Speichern" />
                </p>
            </fieldset>
        </form>
)};

