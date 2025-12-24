import { useState } from "react";

export default function Section({preName, familyName, mailAdress, phoneNumber, handleChange}) {

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

