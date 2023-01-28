import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Character } from 'src/models/Character'

const generateCharacters = () => {
  const characters: Character[] = []
  const types = ['fire', 'water', 'air', 'earth']
  for (let i = 0; i < 20; i++) {
    const name = Math.random().toString(36).substring(2, 8)
    const hp = Math.floor(Math.random() * (100 - 30 + 1) + 30)
    const strength = Math.floor(Math.random() * (100 - 30 + 1) + 30)
    const agility = Math.floor(Math.random() * (100 - 30 + 1) + 30)
    const magic = Math.floor(Math.random() * (100 - 30 + 1) + 30)
    const type = types[Math.floor(Math.random() * types.length)]
    characters.push({
      id: uuidv4(),
      name: name,
      hp: hp,
      strength: strength,
      agility: agility,
      magic: magic,
      type: type
    })
  }
  localStorage.setItem('characters', JSON.stringify(characters))
}

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const charactersFromStorage = localStorage.getItem('characters')
    if (charactersFromStorage) {
      setCharacters(JSON.parse(charactersFromStorage))
    } else {
      generateCharacters()
    }
  }, [])

  return characters
}

export default useCharacters