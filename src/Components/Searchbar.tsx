import { useState } from "react"

interface SearchbarProps {
    onSearch: (e: string) => void
}

export const Searchbar = ({ onSearch }: SearchbarProps) => {
    const [search, setSearch] = useState('')

    const onSubmitPokemon = () => {
        onSearch(search)
    }

    return (
        <div className="flex justify-center gap-2 mt-8">
            <input type="search"
                onChange={e => setSearch(e.target.value)}
            />
            <button onClick={onSubmitPokemon}>Search</button>
        </div>
    )
}