import { useState } from "react"
import { factToSimpleDate } from "../util/util"

const useNumberFacts = () => {
  const [currentFact, setcurrentFact] = useState<string>("Lets Find a Fact!")
  const [favouriteFacts, setFavouriteFacts] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown | null>(null)

  const getFact = async (month: number, day: number) => {
    setLoading(true)
    try {
      const url = `http://numbersapi.com/${month}/${day}/date`
      const response = await fetch(url)
      const text = await response.text()
      setcurrentFact(text)
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
      setcurrentFact("Error !!!")
    }
  }

  const saveFact = () => {
    //Check if adding first fact
    if (currentFact.startsWith("Lets")) {
      return
    }
    //Check if fact already added
    const factSimpleDate = factToSimpleDate(currentFact)
    const lastFavFactSimpleDate = factToSimpleDate(favouriteFacts[0])
    if (
      factSimpleDate[0] === lastFavFactSimpleDate[0] &&
      factSimpleDate[1] === lastFavFactSimpleDate[1] &&
      factSimpleDate[2] === lastFavFactSimpleDate[2]
    ) {
      return
    }

    //Add Fact
    const favFactsCopy = [currentFact, ...favouriteFacts]

    setFavouriteFacts(favFactsCopy)
  }
  return { currentFact, favouriteFacts, getFact, saveFact }
}

export default useNumberFacts
