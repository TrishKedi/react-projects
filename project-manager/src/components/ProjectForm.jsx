import {useRef, useState} from 'react' 
export default function ProjectForm({handleProjectCreation, projects, projectId, handleProjectUpdating}){
    const projectTitle = useRef()
    const projectDesc = useRef()
    const projectDate = useRef()

    const [todos, setTodos] = useState(projectId !== undefined ? projects[projectId].todos : null)
    const [projectUpdated, setProjectUpdated] = useState(false)

    function addProject(){
        handleProjectCreation(projectTitle.current.value, projectDesc.current.value, projectDate.current.value)
        
    }

    function updateProject(){
        let editedProject = {
            title: projectTitle.current.value,
            desc: projectDesc.current.value,
            date: projectDate.current.value,
            todos: todos
          }
        handleProjectUpdating(editedProject, projectId)
    }

    // function editProject(key, value){
    //     updateProjectDetails(prevProjectDets => {
    //         return{
    //           ...prevProjectDets,
    //           [key]: value
    //         }
    //       })

    // }

    function addTask(){
        setTodos(theTodos => {
            let theTask = `Task ${theTodos.length + 1}`
            theTodos.push(theTask)
           
            setProjectUpdated(true)

            return theTodos
        })

    }

    function removeTask(targetIndex){
        setTodos(theTodos => {

            const newTodos = theTodos.filter((value, index) => index !== targetIndex)
            console.log('the todos')
            console.log(theTodos)
          
            setProjectUpdated(true)

            return newTodos
        })
    }
    return(
    

        
        <>
        
        {
            
        projectId !== undefined ? 
        <div>
            <input type="text" placeholder="Project Title" ref={projectTitle} defaultValue={projects[projectId].title}/>
            <textarea type="text" placeholder="Project Description" ref={projectDesc} defaultValue={projects[projectId].desc}></textarea>
            <input type="date" placeholder="Due date" ref={projectDate} defaultValue={projects[projectId].date}/>
            <h3>Todos</h3>
            {projectUpdated ? todos.map((todo, index) => 
                <>
                 <input type="text" defaultValue={todo}/>
                 <button onClick={() => removeTask(index)}>clear</button>
                </>
               
            
                
            ) : ''}
            
            <button onClick={addTask}>Add Task</button>
            
            <button onClick={updateProject}>Save</button> 
        </div>
        
         
         :

         <div>
            <input type="text" placeholder="Project Title" ref={projectTitle}/>
            <textarea type="text" placeholder="Project Description" ref={projectDesc}></textarea>
            <input type="date" placeholder="Due date" ref={projectDate}/>
            <button onClick={addProject}>Create Project</button>
         </div>


        }
        
        </>
    )
}