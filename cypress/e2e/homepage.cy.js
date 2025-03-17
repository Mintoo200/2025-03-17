describe("Homepage", () => {
    it('displays a heading', () => {
        cy.visit("https://beta.gouv.fr/");

        cy.get("h1").should("be.visible")
    })
})
