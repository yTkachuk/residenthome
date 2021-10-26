import React from "react"
import { ImageTypes } from "./types"

const Close: React.FC<ImageTypes> = ({ onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => onClick && onClick()}
        >
            <defs />
            <g style={{ opacity: 0.63 }}>
                <rect style={{ fill: "none" }} width="24" height="24" />
                <g transform="translate(6 6)">
                    <path
                        style={{
                            fill: "none",
                            stroke: "#c3c4c9",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "2px",
                        }}
                        d="M0,0,12,12"
                    />
                    <path
                        style={{
                            fill: "none",
                            stroke: "#c3c4c9",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "2px",
                        }}
                        d="M0,0-12,12"
                        transform="translate(12)"
                    />
                </g>
            </g>
        </svg>
    )
}

export { Close }
