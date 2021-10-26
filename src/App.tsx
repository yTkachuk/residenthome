import React, { useState } from "react"
import "./App.scss"
import data from "./assets/data.json"
import { Form } from "./screens/Form/Form"

type ProjectType = {
    id: number
    project: string | null
    details: string
    duration: string
    durationType: string | null
}

export type DataType = {
    name: string
    projectsDetails: ProjectType[]
}

function App(): JSX.Element {
    const [json, setJson] = useState(data as DataType)
    const [isForm, setIsFrom] = useState(true)
    const [isDirty, setIsDirty] = useState(false)
    return (
        <div className="app">
            <div className="app-content">
                <div className="app-head">User Projects</div>
                <div className="app-body">
                    {isForm ? (
                        <Form
                            json={json}
                            setJson={(newData) => setJson(newData)}
                            isDirty={isDirty}
                        />
                    ) : (
                        JSON.stringify(json, null, 4)
                    )}
                </div>
                <div className="app-footer">
                    <span
                        className="app-footer-json"
                        onClick={() => {
                            setIsFrom(!isForm)
                        }}
                    >
                        {isForm ? "View form JSON" : "Show form"}
                    </span>
                    <div className="app-footer-buttons">
                        <span
                            onClick={() => {
                                setJson(data)
                                setIsDirty(false)
                            }}
                        >
                            Cancel
                        </span>
                        <span onClick={() => setIsDirty(true)}>Save</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
