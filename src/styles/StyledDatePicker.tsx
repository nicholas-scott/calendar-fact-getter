import styled from "styled-components"

const StyledDatePicker = styled.div`
  .react-datepicker {
    width: 100%;
    border-radius: 0;
    border-style: solid;
    border-color: black;
    box-sizing: border-box;
    background: ;
  }

  .react-datepicker__header {
    background: #a8dadc;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-radius: 0;
  }

  .react-datepicker__month-container {
    width: 100%;
    box-sizing: border-box;
  }

  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__navigation {
    top: 50%;
  }

  .react-datepicker__day--today {
    font-weight: normal;
  }

  .react-datepicker__day-name {
    width: 10%;
    aspect-ratio: 2 / 1;
    max-width: 50px;
  }
  .react-datepicker__day {
    background: #a8dadc;
    border-color: #f1faee;
    width: 10%;
    aspect-ratio: 1 / 1;

    max-width: 50px;
    border-style: solid;
    box-sizing: border-box;
    border-radius: 50%;
  }

  div {
    width: 100%;
  }
  .react-datepicker__current-month {
    font-size: 1.4rem;
  }

  .react-datepicker__day:hover {
    background: #457b9d;
    border-color: #1d3557;
    border-radius: 50%;
  }

  .react-datepicker__day--selected {
    background: #457b9d;
    border-radius: 50%;
    border-color: #1d3557;
  }

  .react-datepicker__day--selected:hover {
    background: #1d3557;
  }

  display: flex;
  width: 100%;
  max-width: 720px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`

export default StyledDatePicker
