describe('Home page', function() {
	it('test website loading', function() {
		cy.visit(Cypress.env("baseUrl"), {
			auth: {
				username: Cypress.env("username"),
				password: Cypress.env("password")
			}
		})
	})
}) 

describe('Lobby Page', function() {
	it('redirect lobby page', function() {
		cy.get('div').contains('Kaboo Casino').should('have.attr', 'href', '/en/lobby').click()
	})
}) 

describe('Game categories menu', function() {
	it('Lobby game categories menu is visible', function() {
		cy.get('ul[class="m-navigation__items"]>li').contains('Games').should('be.visible');
	})
})

describe('Banner', function() {
	it('Lobby banner is visible', function() {
		cy.get('div[class="m-promo__bg"]').find("img").should('be.visible');
	})
})

describe('Matrix of game thumbnails', function() {
	it('matrix of game thumbnails is visible', function() {
		cy.get('div[class="m-game-categories"]').should('be.visible') 
	})
})

describe('Search input text', function() {
	it('Lobby search input text is visible', function() {
		cy.get('input[name="query"]').should('be.visible') 
	})
})

describe('Search input text clear', function() {
	it('Search input text clear', function() {
	cy
	 .get('input[name="query"]').should('be.visible') 
	 .get('input[name="query"]').type('test')
	 .get('a[class="c-search__reset"]').click()
	})
})

describe('Lobby search result', function() {
	it('Lobby search result ', function() {
	  cy
	  	.get('input[name="query"]').type('bur')
	  	.get('ul[class="c-search__result-list is-open"]>li').eq(0).contains("Starburst")
	  	.get('ul[class="c-search__result-list is-open"]>li').eq(1).contains("Excalibur")
	    .get('ul[class="c-search__result-list is-open"]>li').eq(2).contains("Burning Desire")
	    .get('ul[class="c-search__result-list is-open"]>li').eq(3).contains("Burglin Bob")
	})
})

