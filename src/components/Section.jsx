import { useState } from "react";

export default function Section({preName, familyName, mailAdress, phoneNumber, handleChange}) {

    return(
        <form>
            <h2>Allgemeine Angaben</h2>
            <fieldset>
                    <label for="name"> Vorname:
                        <input type="text" id="preName" placeholder={preName} onChange={handleChange} />
                    </label>
                    <label for="name"> Nachname:
                        <input type="text" id="familyName" placeholder={familyName} onChange={handleChange} />
                    </label>
                    <label for="email"> E-Mail:
                        <input type="email" id="mailAdress" placeholder={mailAdress} onChange={handleChange} />
                    </label>
                    <label for="tel"> Telefon:
                        <input type="tel" id="phoneNumber" placeholder={phoneNumber} onChange={handleChange} />
                    </label>
                <p>
                    <input class="submitButton" type="submit" placeholder="Speichern" />
                </p>
            </fieldset>
        </form>
)};

