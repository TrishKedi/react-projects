import noProjectsImage from '../assets/no-projects.png'
import {useRef} from 'react' 
export default function NoProjects({projects, handleShowForm, handleShowProject}){
    
    function showProject(event){
        
        let projectId = event.target.getAttribute('projectindex')
        handleShowProject(projectId)
    }
    return(
        <>
        {projects.length ? 

            projects.map((project, index) => 
                <section>
                    <ul>
                        <li key={index}><button onClick={(event) => showProject(event)} projectindex={index} >{project.title}</button></li>
                    </ul>
                    
                
                </section>
            
            )

            :

            <div>
                {/* <img src={noProjectsImage}/> */}
                <h2>No project Selected</h2>
                <p> Select a project or get started with one</p>
                
            </div>
        
        }
        <button onClick={handleShowForm}>Create New Project</button>
        
        </>
    )
}