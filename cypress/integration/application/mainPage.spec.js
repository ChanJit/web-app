describe('MainPage', () => {
  it('Loading screen should be shown', () => {
    cy.viewport('macbook-15');
    cy.visit('http://localhost:3000');
    cy.get('p').contains('Loading').should('be.visible');
  });
  it('Total Number of Employee should be shown', () => {
    cy.get('.companyInformation p').contains('20').should('be.visible');
  });
  it('Company Highlight should be shown', () => {
    cy.get('.companyHighlight p')
      .contains('Highest earning employee: MYR 11,444.00')
      .should('be.visible');
  });
  it('Most Recent should be shown', () => {
    cy.get('.companyHighlight p')
      .contains('Employee most recently joined: 04-08-2018')
      .should('be.visible');
  });
  it('Top sorting bar should be shown', () => {
    cy.viewport('macbook-15');
    cy.get('.employeeSortItem div').contains('Full Name').should('be.visible');
    cy.get('.employeeSortItem div')
      .contains('Joined Date')
      .should('be.visible');
    cy.get('.employeeSortItem div').contains('Salary').should('be.visible');
  });
  it('Dropdown should be shown when it is mobile view', () => {
    cy.viewport('iphone-6');
    cy.get('.dropdown').contains('Joined Date DESC').should('be.visible');
  });
  it('The first item joined date should be 04-08-2018', () => {
    cy.get('.employeeItem').first().contains('04-08-2018').should('be.visible');
  });
});
