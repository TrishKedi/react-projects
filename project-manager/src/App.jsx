import { useState } from "react";
import NoProjects from "./components/NoProjects";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projectList, updateProjectList] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [project, updateProject] = useState()
  const [projectId, updateProjectId] = useState()

  function displayForm(){
    setShowForm(true)
  }

  function displayProject(projectId){
    console.log(projectId)
    // updateProject(project => {
    //   project = projectList[projectId]
    //   return project
    // })

    updateProjectId(projectId)
    setShowForm(true)

  }

  function createProject(title, desc, date){
    
    updateProjectList(projectList => {
      let newProject = {
        title: title,
        desc: desc,
        date: date,
        todos: ['Task 1']
      }
      
      projectList.push(newProject)
      console.log(projectList)
      
      return projectList
      
    })
    setShowForm(false)

   
  }

  function editProject(editedProject, pjtId){

    updateProjectList(prevProjectList => {
      prevProjectList[pjtId] = editedProject
      console.log(prevProjectList)
      return prevProjectList
    })
    setShowForm(false)

  }

  function addTask(){
    setTodos(theTodos => {
        let theTask = `Task ${theTodos.length + 2}`
        theTodos.push(theTask)
        console.log('the todos')
        console.log(theTodos)

        return theTodos
    })

}

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      {showForm ?
      <ProjectForm handleProjectCreation={createProject}  handleProjectUpdating={editProject} projects={projectList} projectId={projectId}/> 
      : 
      <NoProjects projects={projectList} handleShowForm={displayForm} handleShowProject={displayProject}/>
      }
    </>
  );
}

export default App;
