describe("Homepage", () => {
    it('displays a heading', () => {
        cy.visit("https://beta.gouv.fr/");

        cy.findByRole("heading", { level: 1 }).should("be.visible")

        cy.findByRole("searchbox").type("foo")
        cy.findByRole("button", { name: "Rechercher" }).click()

        cy.findByRole("heading", {level: 1}).should("have.text", "Résultats")
    })
})
