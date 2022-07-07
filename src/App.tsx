import { Pokedex } from './pages/Pokedex/Pokedex'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Route, Routes } from "react-router-dom"
import { Legendaries } from './pages/Legendaries/Legendaries'

interface PokemonProps {
  name: string
  id: number
  sprites?: Object
}

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/legendaries" element={<Legendaries />} />
      </Routes>
    </>
  )
}