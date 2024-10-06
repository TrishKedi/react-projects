import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import {CartContext} from './store/shopping-cart-context'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddStartProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]

      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      }
    })
  }

  function handleSelectProject(id){
    console.log('selecting project')
    console.log(id)
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,

      }
    })
  }

  function handleDeleteProject(){

    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId)
      }
    })

  }

  function handleAddTask(text){
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]

      }
    })

  }

  function handleDeleteTask(id){
    setProjectsState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id)
      }
    })

  }


  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  const selectedTasks = projectsState.tasks.filter((task) => task.projectId === projectsState.selectedProjectId)
  let content = <SelectedProject 
    project={selectedProject} 
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={selectedTasks}
    />

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }

  if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleAddStartProject}/>
  }



  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleAddStartProject}
      projects={projectsState.projects} 
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
