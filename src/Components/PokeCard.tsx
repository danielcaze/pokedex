// interface PokemonTypesProps {
//     pokemonData: {
//         name: string
//         sprites: {
//             front_default: string
//         }
//         types: {
//             slot: number
//             type: {
//                 name: string
//             }
//         }[]
//     }
// }

export const PokeCard = ({ pokemonData }: any) => {
    return (
        <>
            <div>
                {pokemonData.name}
            </div>
        </>
    )
}

// export const PokeCard = ({ pokemonData }: PokemonTypesProps) => {
//     const { sprites, name, types } = pokemonData
//     const pokemonName = name.charAt(0).toUpperCase() + name.slice(1)
//     return (
//         <div className="flex ml-20">
//             <div className="flex flex-col justify-around items-center bg-zinc-200 rounded-l-2xl p-4">
//                 <p>{pokemonName}</p>
//                 <div className="flex gap-4">
//                     {types.map((type) => {
//                         const pokemonType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
//                         return (
//                             <p key={type.slot}>{pokemonType}</p>
//                         )
//                     })}
//                 </div>

//             </div>
//             <div className="bg-sky-600 rounded-r-2xl p-4">
//                 <img src={sprites.front_default} alt={pokemonName} />
//             </div>
//         </div>
//     )
// }