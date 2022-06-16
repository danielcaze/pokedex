export const PokeCard = ({ pkmn }: any) => {
    const { sprites, name, types } = pkmn
    return (
        <div className="flex flex-col mt-8 m-auto items-center gap-2 bg-violet-800 w-32 p-4 text-center">
            <img src={sprites.front_default} alt="" />
            <p>Pokemon: {name.charAt(0).toUpperCase() + name.slice(1)}</p>
            <p className="bg-gray-400">Type: {types[0].type.name.charAt(0).toUpperCase() + types[0].type.name.slice(1)}</p>
        </div>
    )
}