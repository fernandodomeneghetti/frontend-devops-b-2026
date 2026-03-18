describe('Testes referente a pagina de curso', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500/cursos.html')
    })

    it('Validar Ordenação dos Cursos', () => {
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('table tbody tr:first-child td:first-child')
            .should('contain', 'Administração')
    })

    it('Validar Filtro dos Cursos', () => {
        cy.get('input[type=search]').type('Ciências da Computação')
        cy.get('table tbody tr').should('have.length', 1)
    })

    it('Validar Filtro por Semestre', () => {
        cy.get('input[type=search]').type('10 semestres')
        cy.get('table tbody tr').should('have.length', 2)
    })
})