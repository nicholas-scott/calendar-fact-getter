import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import useNumberFacts from "../hooks/useNumberFacts"
import StyledDatePicker from "../styles/StyledDatePicker"
import { factToSimpleDate } from "../util/util"
import FactDisplayer from "./FactDisplayer"

const FactCalender = () => {
  const todayDate = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(todayDate)
  const { currentFact, favouriteFacts, getFact, saveFact } = useNumberFacts()

  const onDateChange = (date: Date): void => {
    setSelectedDate(date)
    getFact(date.getMonth() + 1, date.getDate())
  }

  const setSelectedDateCurrentFact = (): void => {
    const factSimpleDate = factToSimpleDate(currentFact)
    const factDate = new Date(...factSimpleDate)
    setSelectedDate(factDate)
  }

  return (
    <StyledDatePicker>
      <DatePicker
        inline
        disabledKeyboardNavigation
        fixedHeight
        selected={selectedDate}
        onChange={onDateChange}
      >
        <div
          style={{
            background: "#a8dadc",
            display: "flex",
            width: "100%",
            padding: "8px",
            justifyContent: "space-between",
          }}
        >
          <button onClick={saveFact}>Save Fact</button>
          <button onClick={setSelectedDateCurrentFact}>Go To Fact Date</button>
          <button
            onClick={() => {
              setSelectedDate(todayDate)
            }}
          >
            Go To Today
          </button>
        </div>
      </DatePicker>

      <FactDisplayer
        currentFact={currentFact}
        favouriteFacts={favouriteFacts}
      ></FactDisplayer>
    </StyledDatePicker>
  )
}

export default FactCalender
