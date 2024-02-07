import { useSelector } from "react-redux"
import { NavBarComponent } from "../../components/navbar/navbar"
import { ProjectItemComponent } from "../../components/projectItem/projectItem"
import { getProjects } from "../../features/userprojects/userProjectsSlice"
import { useEffect, useState } from "react"
import { ProjectFormComponent } from "../../components/projectForm/projectForm"



export const UserProjects = () => {
    const projects = useSelector(getProjects)
    const [listProjects, setListProjects] = useState(projects)

    useEffect(() =>{
        setListProjects(projects)


    },[projects])
    
    
    return(
        <>
             <NavBarComponent/>
            <section className="introSection">
                <div>
                    <h2>PROJECTS</h2>
                    <ProjectFormComponent/>
                </div>
            </section>
            <section className="mainSection">
                <div>
                    <ProjectItemComponent title = 'DEFAULT'/>
                    {listProjects.length === 0 || listProjects === undefined ? '' :
                        <div>
                        {listProjects.map((project) => <ProjectItemComponent
                                            title = {project.text}
                                            key= {project.id}
                                            item = {project}
                        
                                                />)}
                    </div>
                    }
                </div>
                
            </section>
        </>
    )
}