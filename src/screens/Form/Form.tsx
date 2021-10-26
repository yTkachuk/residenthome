import React, { useState } from "react"
import "./Form.scss"
import { Close } from "../../assets/images/Close"
import { Plus } from "../../assets/images/Plus"
import { HeaderErrorComponent } from "../../components/HeaderError/HeaderError"
import { Project } from "../../components/Project/Project"
import { DataType } from "../../App"
import { DROPDOWN_DATA, NEW_PROJECT } from "../../utils"
import { errors } from "./utils"

type Options = {
    [key: string]: string | number
}

type FormProps = {
    json: DataType
    setJson: (data: DataType) => void
    isDirty: boolean
}

const Form: React.FC<FormProps> = ({ json, setJson, isDirty }) => {
    const [isNameDirty, setIsNameDirty] = useState(false)
    const [activeProjects, setActiveProjects] = useState(DROPDOWN_DATA)

    const onEnter = (e: KeyboardEvent): void => {
        e = e || window.event
        if (e.keyCode === 13) {
            const elem = e.target as HTMLInputElement
            setActiveProjects([
                ...activeProjects,
                {
                    label: elem.value,
                    value: elem.value,
                },
            ])
        }
    }

    const onDelete = (projectId: number): void =>
        setJson({
            ...json,
            projectsDetails: json.projectsDetails.filter(
                ({ id }) => id !== projectId
            ),
        })

    const onChange = (
        param: string,
        value: string,
        projectId: number
    ): void => {
        const newData = JSON.parse(JSON.stringify(json)) as typeof json
        const currentProject = newData.projectsDetails.find(
            ({ id }) => id === projectId
        ) as Options
        if (currentProject) {
            currentProject[param] = value
        }
        setJson({
            ...newData,
        })
    }

    const newProject = (): void => {
        setJson({
            ...json,
            projectsDetails: [
                {
                    id: +new Date().getTime(),
                    ...NEW_PROJECT,
                },
                ...json.projectsDetails,
            ],
        })
    }

    const deleteProjects = (projects: {
        label: string
        value: string
    }): void => {
        setActiveProjects(activeProjects.filter((pr) => pr !== projects))

        setJson({
            ...json,
            projectsDetails: json.projectsDetails.map((details) => ({
                ...details,
                project:
                    projects.value === details.project ? "" : details.project,
            })),
        })
    }

    return (
        <>
            <HeaderErrorComponent
                titleInput="name"
                error={errors("name", json.name, isDirty || isNameDirty)}
                className="form-body-name"
            >
                <input
                    onBlur={() => setIsNameDirty(true)}
                    onFocus={() => setIsNameDirty(true)}
                    value={json.name}
                    onChange={(e) => {
                        setJson({
                            ...json,
                            name: e.target.value,
                        })
                    }}
                />
            </HeaderErrorComponent>

            <div className="form-body-projects">
                <span className="form-body-projects-title">Projects</span>
                <div className="form-body-projects-row">
                    {activeProjects.map((projects, i) => (
                        <div key={i} className="form-body-projects-component">
                            <span>{projects.label}</span>
                            <Close onClick={() => deleteProjects(projects)} />
                        </div>
                    ))}
                    <input
                        onKeyDown={(e) =>
                            onEnter(e as unknown as KeyboardEvent)
                        }
                    />
                </div>
            </div>

            <div className="form-body-details">
                <span>Projects Details</span>
                <div className="form-body-details-new" onClick={newProject}>
                    <Plus />
                </div>
            </div>

            <div className="form-body-content">
                {json.projectsDetails.map((project) => (
                    <Project
                        activeProjects={activeProjects}
                        onDelete={() => onDelete(project.id)}
                        onChange={(param, value) =>
                            onChange(param, value, project.id)
                        }
                        key={project.id}
                        errors={(name, value, dirty) =>
                            errors(name, value, isDirty || dirty)
                        }
                        {...project}
                    />
                ))}
            </div>
        </>
    )
}

export { Form }
