import React, { useState } from "react"
import { Close } from "../../assets/images/Close"
import { DROPDOWN_DURATION } from "../../utils"
import { Dropdown } from "../Dropdown/Dropdown"
import { HeaderErrorComponent, Position } from "../HeaderError/HeaderError"
import "./Project.scss"

type ProjectProps = {
    project: string | null
    details: string
    duration: string
    durationType: string | null
    onDelete: () => void
    onChange: (param: string, value: string) => void
    errors: (name: string, value: string | null, dirty: boolean) => string
    activeProjects: {
        label: string
        value: string
    }[]
}

const Project: React.FC<ProjectProps> = ({
    project,
    details,
    duration,
    durationType,
    onDelete,
    onChange,
    errors,
    activeProjects,
}) => {
    const [dirtyProject, setDirtyProject] = useState(false)
    const [dirtyDeatils, setDirtyDeatils] = useState(false)
    const [dirtyDuration, setDirtyDuration] = useState(false)

    return (
        <div className="project">
            <div className="project-close" onClick={() => onDelete()}>
                <Close />
            </div>
            <HeaderErrorComponent
                titleInput="Projects"
                error={errors("project", project, dirtyProject)}
                position={Position.horizontal}
            >
                <Dropdown
                    onBlur={() => setDirtyProject(true)}
                    active={project}
                    options={activeProjects}
                    onChange={(option) => onChange("project", option)}
                />
            </HeaderErrorComponent>

            <HeaderErrorComponent
                titleInput="Details"
                error={errors("details", details, dirtyDeatils)}
                position={Position.horizontal}
            >
                <textarea
                    onBlur={() => setDirtyDeatils(true)}
                    value={details}
                    onChange={(e) => onChange("details", e.target.value)}
                />
            </HeaderErrorComponent>

            <HeaderErrorComponent
                titleInput="Duration"
                error={errors(
                    "duration",
                    durationType || duration,
                    dirtyDuration
                )}
                position={Position.horizontal}
            >
                <div className="project-duration">
                    <input
                        onBlur={() => setDirtyDuration(true)}
                        onFocus={() => setDirtyDuration(true)}
                        value={duration}
                        onChange={(e) => onChange("duration", e.target.value)}
                    />
                    <Dropdown
                        active={durationType}
                        onBlur={() => setDirtyDuration(true)}
                        options={DROPDOWN_DURATION}
                        onChange={(option) => onChange("durationType", option)}
                    />
                </div>
            </HeaderErrorComponent>
        </div>
    )
}

export { Project }
