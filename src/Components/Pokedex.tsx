import { PokeCard } from "./PokeCard"

export const Pokedex = ({ pokemon, pokedex, loading }: any) => {
    console.log("pokedex:", pokedex)
    return (
        <>
            <div>
                <h1>Pokedex</h1>
                <p>Paginação:</p>
            </div>
            <div className="grid gap-4 grid-cols-3">
                {loading || !pokedex ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {pokedex.map((poke: any, index: any) => {
                            return (
                                <PokeCard key={index} pkmn={poke} />
                            )
                        })}
                    </div>
                )
                }
                {pokemon && <PokeCard pkmn={pokemon} />}
            </div>
        </>
    )
}