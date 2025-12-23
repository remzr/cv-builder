import { useState } from "react";

export default function Section() {
    return(
        <form>
            <h2>Allgemeine Angaben</h2>
            <fieldset>
                <p>
                    <label for="name"> Vorname:</label>
                    <input type="text" id="preName" name="preName" />
                </p>
                <p>
                    <label for="name"> Nachname:</label>
                    <input type="text" id="familyName" name="familyName" />
                </p>
                <p>
                    <label for="email"> E-Mail:</label>
                    <input type="email" id="email" name="email" />
                </p>
                <p>
                    <label for="tel"> Telefon:</label>
                    <input type="tel" id="tel" name="tel" />
                </p>
                <p>
                    <input class="submitButton" type="submit" value="Speichern" />
                </p>
            </fieldset>
        </form>
)};