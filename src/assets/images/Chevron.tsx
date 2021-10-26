import React from "react"
import { ImageTypes } from "./types"

const Chevron: React.FC<ImageTypes> = ({ onClick, stroke = "#3FA9F5" }) => {
    return (
        <svg
            onClick={(data) => onClick && onClick(data)}
            xmlns="http://www.w3.org/2000/svg"
            width="12.55"
            height="6.12"
            viewBox="0 0 14.373 8.247"
        >
            <defs />
            <path
                className="a"
                d="M237.442,289.489l6.126-6.126,6.126,6.126"
                transform="translate(250.754 290.55) rotate(180)"
                fill="none"
                stroke={stroke}
                strokeLinecap="round"
                strokeWidth="1.5px"
            />
        </svg>
    )
}

export { Chevron }
