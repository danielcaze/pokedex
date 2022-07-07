import { PokeCard } from "./PokeCard"

interface PokedexCardsProps {
    loading: boolean
    pokedex: {
        name: string
        url?: string
    }[]
}

export const PokedexCards = ({ pokedex, loading }: PokedexCardsProps) => {
    return (
        <>
            {loading ? (
                <div>Loading please wait...</div>
            ) : (
                <>
                    {pokedex.map((pokemon, index) => {
                        return (
                            <PokeCard key={index} pokemonData={pokemon} />
                        )
                    })}
                </>
            )
            }
        </>
    )
}