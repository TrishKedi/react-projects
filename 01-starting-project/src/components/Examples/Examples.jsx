import { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import TagButtons from "../TabButton/TabButton";
import Section from "../Section/section";
import Tabs from "../Tabs/Tabs";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState(null);
    let tabcontent = "Please click a button"
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton)
        // console.log(selectedButton)
    }
    return(
        <Section id='examples' title="Examples">
            <Tabs 
            ButtonsContainer='menu'
            buttons={
                <>
                    <TagButtons onClick={ () => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TagButtons>
                    <TagButtons onClick={ () => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TagButtons>
                    <TagButtons onClick={ () => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TagButtons>
                    <TagButtons onClick={ () => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TagButtons>
                </>
                }>
                {!selectedTopic ? <p>Please select a topic</p>: null}
                {selectedTopic? 
                ( <div id='tab-content'>
                    <h2>{EXAMPLES[selectedTopic].title}</h2>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
                    </div>
                )
                : 
                null
                }
            </Tabs>
    
      </Section>
    );
}