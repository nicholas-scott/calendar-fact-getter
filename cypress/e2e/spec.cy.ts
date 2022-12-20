describe("Save Fact Button With No Facts", () => {
  it("saves a fact when no facts have been loaded should save nothing", () => {
    cy.visit("/")
    cy.contains("Save Fact").click()
    cy.get("[data-cy=saved-facts-div]").should("have.text", "")
  })
})

describe("Go to Today Button Click", () => {
  it("Clicking on go to today should get a fact or error. Changing default text", () => {
    cy.visit("/")
    cy.get(".react-datepicker__day--001").first().click()
    cy.get("[data-cy=current-fact-div]").should(
      "not.have.text",
      "Lets Find a Fact!"
    )
  })
})

const today = new Date()
describe("Go To Fact Day With No Fact", () => {
  it("no change in map should occur because no fact loaded", () => {
    cy.visit("/")
    cy.contains("Go To Fact Date").click()
    const month = today.toLocaleString("default", {
      month: "long",
    })
    const year = today.getFullYear()
    const day = today.getDate()

    cy.contains(`${month} ${year}`).should("exist")
    cy.contains(".react-datepicker__day--selected", `${day}`).should("exist")
  })
})
