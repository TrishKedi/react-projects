import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept.jsx"
import Section from "../Section/section.jsx";
export default function CoreConcepts(){
    return(
        <Section id='core-concepts'>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/> )}
        </Section>
    );
}