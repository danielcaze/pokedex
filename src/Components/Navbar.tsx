export const Navbar = () => {
    return (
        <nav className="flex justify-between mx-8">
            <img className="w-24"
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt=""
            />
            <ul className="flex gap-4 justify-center items-center">
                <li className="bg-violet-600 text-zinc-400 hover:text-zinc-100 hover:bg-violet-900 "><a href="">Home</a></li>
                <li><a href="">Credits</a></li>
                <li><a href="https://pokeapi.co/">PokeApi</a></li>
            </ul>
        </nav>
    )
}