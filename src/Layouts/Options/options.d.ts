
interface IOptionsProps {
        props: Array<{
                label: string | null
                value: string | null
        }>
        active: string
        setActive: React.Dispatch<React.SetStateAction<string>> | null
}

export { IOptionsProps }