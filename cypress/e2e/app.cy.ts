describe('Dish Recommendation System', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the application successfully', () => {
    cy.contains('Sistema de Recomendación de Platos Personalizado').should('be.visible');
  });

  it('can switch languages', () => {
    // Click language selector
    cy.get('button').contains('🌎').click();
    
    // Select English
    cy.contains('English').click();
    
    // Verify title changed
    cy.contains('Personalized Dish Recommendation System').should('be.visible');
  });

  it('displays all sections of the flowchart', () => {
    cy.get('.mermaid').should('be.visible');
    cy.contains('Desafíos y Soluciones').should('be.visible');
  });

  it('shows challenges section with proper formatting', () => {
    cy.contains('Inicio en frío').should('be.visible');
    cy.contains('Tiempo real').should('be.visible');
    cy.contains('Privacidad').should('be.visible');
  });
});