import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
import { getGuessStatuses } from './statuses'
import { INDEX_OFFSETS } from '../constants/offsets'
export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toUpperCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  const knownLetterSet = new Set<string>()
  for (const guess of guesses) {
    const statuses = getGuessStatuses(guess)

    for (let i = 0; i < guess.length; i++) {
      if (statuses[i] === 'correct' || statuses[i] === 'present') {
        knownLetterSet.add(guess[i])
      }
      if (statuses[i] === 'correct' && word[i] !== guess[i]) {
        return `tu dois utiliser ${guess[i]} en ${i + 1}`
      }
    }
  }

  for (const letter of Array.from(knownLetterSet.values())) {
    // fail fast, always return first failed letter if applicable
    if (!word.includes(letter)) {
      return `Ca doit contenir ${letter}`
    }
  }
  return false
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('February 13, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const randomIndex = INDEX_OFFSETS[index % INDEX_OFFSETS.length]
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS[randomIndex % WORDS.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
export const MAX_WORD_LENGTH = solution.length
