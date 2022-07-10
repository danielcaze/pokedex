import { Link } from "react-router-dom"
import Logo from '../assets/Logo.svg'

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full px-40 bg-terciary h-24 drop-shadow-lg fixed z-50">
            <img className="w-40 h-16"
                src={Logo} alt=""
            />
            <ul className="flex gap-16 justify-center items-center">
                <li className="transition-all border-zinc-900 hover:border-b-4 py-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="transition-all border-zinc-900 hover:border-b-4 py-2">
                    <Link to="/pokedex">Pokédex</Link>
                </li>
                <li className="transition-all border-zinc-900 hover:border-b-4 py-2">
                    <Link to="/legendaries">Legendaries</Link>
                </li>
                <li className="transition-all border-zinc-900 hover:border-b-4 py-2">
                    <a target="_blank" href="https://pokeapi.co/">Documentation</a>
                </li>
            </ul>
        </nav>
    )
}