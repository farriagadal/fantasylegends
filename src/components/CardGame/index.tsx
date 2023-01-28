import { useState, useEffect } from 'react'
import Battle from '../Battle'
import Chest from '../Chest'
import Collection from '../Collection'
import useCharacters from 'src/hooks/useCharacters'

// type Character = {
//   id: number;
//   name: string;
//   hp: number;
//   strength: number;
//   agility: number;
//   magic: number;
//   type: string;
// }

const CardGame = () => {
  const characters = useCharacters()
  const [selectedView, setSelectedView] = useState<'chest' | 'battle' | 'collection'>('chest')

  return (
    <div>
      <button onClick={() => setSelectedView('chest')}>Abrir cofres</button>
      <button onClick={() => setSelectedView('battle')}>Jugar</button>
      <button onClick={() => setSelectedView('collection')}>Revisar bodega</button>
      {selectedView === 'chest' && <Chest />}
      {selectedView === 'battle' && <Battle />}
      {selectedView === 'collection' && <Collection />}
    </div>
  )
}

export default CardGame