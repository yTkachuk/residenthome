import React, { useEffect, useMemo, useState } from "react"
import { Chevron } from "../../assets/images/Chevron"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import "./Dropdown.scss"

type DropdownProps = {
    active: string | null
    options: {
        label: string
        value: string
    }[]
    onChange: (option: string) => void
    onBlur: () => void
}

const Dropdown: React.FC<DropdownProps> = ({
    active,
    options,
    onChange,
    onBlur,
}) => {
    const [opened, setOpened] = useState(false)
    const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>
    useOnClickOutside(ref, () => setOpened(false))
    const chooseOption = (option: string): void => {
        onChange(option)
        setOpened(false)
    }

    const activeField = useMemo(() => {
        return options.find((option) => option.value === active)
    }, [active, options])

    useEffect(() => {
        if (!activeField && active !== null) {
            onBlur()
        }
    }, [active, activeField, onBlur])

    return (
        <div className="dropdown" ref={ref} onBlur={onBlur}>
            <div className="dropdown-head" onClick={() => setOpened(!opened)}>
                <span>{activeField?.label}</span>
                <Chevron />
            </div>
            {opened && (
                <div className="dropdown-body">
                    {options.map((option, i) => (
                        <span
                            key={i}
                            onClick={() => chooseOption(option.value)}
                        >
                            {option.label}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export { Dropdown }
