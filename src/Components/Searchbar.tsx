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
        <div className="flex flex-col items-center justify-center gap-2 pt-44 z-0">
            <h1 className="text-5xl">800 <strong>Pokemons</strong> for you to choose your favorite</h1>
            <div className="mt-4 w-full text-center">
                <input type="search"
                    className="border-none drop-shadow-lg w-3/4"
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Find your pokémon..."
                />
                <button
                    className="transition-colors ml-4 bg-sky-400 p-2 rounded-lg hover:bg-sky-700"
                    onClick={onSubmitPokemon}
                >
                    Search
                </button>
                <div>
                    <select name="type" id="type"> {/* I think i can do this with the api */}
                        <option value="normal">Normal</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="ice">Ice</option>
                        <option value="fighting">Fighting</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="flying">Flying</option>
                        <option value="psychic">Psichic</option>
                        <option value="bug">Bug</option>
                        <option value="rock">Rock</option>
                        <option value="ghost">Ghost</option>
                        <option value="dark">Dark</option>
                        <option value="dragon">Dragon</option>
                        <option value="steel">Steel</option>
                        <option value="fairy">Fairy</option>
                    </select>
                </div>
            </div>
        </div>
    )
}