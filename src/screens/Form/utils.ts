export const errors = (
    type: string,
    value: string | null,
    isDirty?: boolean
): string => {
    if (!isDirty) {
        return ""
    }

    switch (type) {
        case "name":
            if (!value) {
                return "is required"
            }
            return ""
        case "project":
            if (!value) {
                return "please select a project"
            }
            return ""
        case "details":
            if (!value) {
                return "is required"
            }
            return ""
        case "duration":
            if (!value) {
                return "is required"
            }
            return ""
        default:
            return ""
    }
}
