
describe('mafia-app-e2e', () => {
  // beforeEach(()=> {});

  it('should go through game setup', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.visit('/')

    cy.get('h1').contains(/Mafia/);

    // find input and enter a number
    // input label should be 'Number of Players'
    cy.get('label').contains('Number of Players');
    cy.get('input').type('5'); 

    // find a button with the text 'Start Game' and click it
    cy.get('button').contains('Start Game').click();
    // check if the url is '/game-setup'
    cy.url().should('include', '/game-setup');

    // check number of players is 5
    cy.get('h2').contains(/Number of Players: 5/);
  });
});
