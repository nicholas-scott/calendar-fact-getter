const FactDisplayer = ({ currentFact, favouriteFacts }: any): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        className="react-datepicker__header"
        style={{ background: "white", borderStyle: "none" }}
      >
        <h3 className="react-datepicker__current-month">Current Fact:</h3>
        <p
          style={{
            textAlign: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          {currentFact}
        </p>
      </div>
      <div>
        <h3 className="react-datepicker__current-month">Favorite Facts:</h3>
        <div
          style={{ overflowY: "scroll", height: "100px", textAlign: "left" }}
        >
          {favouriteFacts &&
            favouriteFacts.map((fact: string, index: number) => {
              return (
                <p
                  key={`fact-${index}`}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  {fact}
                </p>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default FactDisplayer
