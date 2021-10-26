import React from "react"
import "./HeaderError.scss"

export enum Position {
    horizontal = "horizontal",
    vertical = "vertical",
}

type HeaderErrorProps = {
    titleInput: string
    error?: string
    className?: string
    position?: Position
}

const HeaderErrorComponent: React.FC<HeaderErrorProps> = ({
    titleInput,
    error,
    children,
    className,
    position = Position.vertical,
}) => {
    return (
        <div
            className={`headerError ${className || ""} ${
                position === Position.horizontal ? "headerError-horizontal" : ""
            }`}
        >
            <span className="headerError-title">{titleInput}</span>
            <div
                className={
                    error
                        ? "headerError-children-active"
                        : "headerError-children"
                }
            >
                {children}
            </div>
            {error ? <span className="headerError-error">{error}</span> : null}
        </div>
    )
}

export { HeaderErrorComponent }
