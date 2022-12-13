export const monthsToInd: any = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

export const factToSimpleDate = (fact: string): [number, number, number] => {
  const regex = /^(\w+)\s(\d+).+?(\d+)/
  const match = regex.exec(fact)
  if (match) {
    return [parseInt(match[3]), monthsToInd[match[1]], parseInt(match[2])]
  }
  return [0, 0, 0]
}
