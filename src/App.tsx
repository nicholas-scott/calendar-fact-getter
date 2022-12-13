import FactCalender from "./components/FactCalender"

const App = () => {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <h1>Facts Calender</h1>
      <FactCalender />
    </div>
  )
}
export default App
