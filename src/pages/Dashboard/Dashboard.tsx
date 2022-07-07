import { Navbar } from "../../Components/Navbar"
import banner from "../../assets/banner.png"
import { Link } from "react-router-dom"

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-full min-h-full bg-gradient-to-b from-terciary to-primary overflow-hidden">
                <div className="flex justify-between pt-40">
                    <div className="font-sans max-w-lg ml-40 mt-32">
                        <h1 className="text-7xl">
                            <strong>Find</strong> all your favorite <strong>Pokémon</strong>
                        </h1>
                        <h2 className="text-3xl mt-16">
                            You can know the type of Pokemon, its strengths, disadvantages and abilities
                        </h2>
                        <Link to="/pokedex" className="block mt-16 px-9 py-5 w-60 bg-safe rounded-lg text-center "><strong>See pokemons</strong></Link>
                    </div>
                    <img src={banner} alt="" className="max-w-3xl h-2xl mt-16" />
                </div>
                <footer className="flex justify-start pb-7">
                    <p className="ml-40">Made with 💜 by Daniel Cazé</p>
                </footer>
            </div>

        </>
    )
}