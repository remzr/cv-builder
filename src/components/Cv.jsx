import { useState } from "react"

export default function Cv({preName, familyName, mailAdress, phoneNumber}) {
    return (
        <main>
            <h1>Lebenslauf</h1>
            <section id="sectionAlg">
                <p><strong>Name: </strong>{preName} {familyName}</p>
                <p><strong>E-Mail: </strong>{mailAdress}</p>
                <p><strong>Tel.: </strong>{phoneNumber}</p>
            </section>
        </main>
    )
}