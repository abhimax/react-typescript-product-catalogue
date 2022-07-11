interface IFilterCardProps {
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>> | null
}

export { IFilterCardProps, onCategoryClick }