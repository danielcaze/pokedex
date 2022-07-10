import { useEffect, useState } from "react"
import { searchPokemon } from "../services/api"

interface PokecardProps {
    pokemonData?: {
        name: string
        url: string
    },
    pokemon?: string
}

interface PokemonCardDataProps {
    name: string
    sprites: {
        front_default: string
    }
    types: {
        slot: number
        type: {
            name: string
            url: string
        }
    }[]
}

export const PokeCard = ({ pokemonData, pokemon }: PokecardProps) => {
    const [pokemonCardData, setPokemonCardData] = useState<PokemonCardDataProps>()
    const [searchError, setSearchError] = useState({ isError: false, errorMessage: "" })

    useEffect(() => {
        const onLoadingPokemons = async (pokemon: string) => {
            setSearchError({ isError: false, errorMessage: "" })
            const result = await searchPokemon(pokemon)
            if (result) {
                setSearchError({ isError: false, errorMessage: "" })
                setPokemonCardData(result)
            } else {
                setSearchError({ isError: true, errorMessage: "Pokemon not found" })
                setPokemonCardData(result)
            }
        }
        if (pokemon) {
            onLoadingPokemons(pokemon)
        } else if (pokemonData) {
            onLoadingPokemons(pokemonData.name)
        }

    }, [pokemon])

    return (
        <>
            {searchError.isError && <p>{searchError.errorMessage}</p>}
            {pokemonCardData &&
                <div className="flex ml-20">
                    <div className="flex flex-col justify-around items-center bg-zinc-200 rounded-l-2xl p-4">
                        <p>{pokemonCardData.name.charAt(0).toUpperCase() + pokemonCardData.name.slice(1)}</p>
                        <div className="flex gap-4">
                            {pokemonCardData.types.map((type) => {
                                const pokemonType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
                                return (
                                    <p key={type.slot}>{pokemonType}</p>
                                )
                            })}
                        </div>

                    </div>
                    <div className="bg-sky-600 rounded-r-2xl p-4">
                        <img src={pokemonCardData.sprites.front_default} alt={pokemonCardData.name} />
                    </div>
                </div>
            }
        </>
    )
}