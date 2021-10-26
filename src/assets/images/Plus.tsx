import React from "react"
import { ImageTypes } from "./types"

const Plus: React.FC<ImageTypes> = ({ onClick }) => {
    return (
        <svg
            onClick={(data) => onClick && onClick(data)}
            xmlns="http://www.w3.org/2000/svg"
            width="40.773"
            height="40.773"
            viewBox="0 0 40.773 40.773"
        >
            <defs />
            <path
                fill="#bbbbc2"
                opacity="0.5"
                className="a"
                d="M49.773,30.82H30.662V49.773H27.955V30.82H9V28.113H27.953V9h2.707V28.113H49.773Z"
                transform="translate(-9 -9)"
            />
        </svg>
    )
}

export { Plus }
