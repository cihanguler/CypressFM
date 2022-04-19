
require('cypress-downloadfile/lib/downloadFileCommand')
import { username,password,wrongpassword,wrongusername,url } from './authentication.constant'


Cypress.Commands.add('login',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(username)
    cy.get('[type="password"]').clear().type(password)

    cy.contains('Log In').click()
})

Cypress.Commands.add('wrong_username_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('[type="password"]').clear().type(password)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('wrong_password_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(username)
    cy.get('[type="password"]').clear().type(wrongpassword)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('wrong_username_password_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('[type="password"]').clear().type(wrongpassword)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('login_Positive_Scenarios', () => { 
    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(password)
    cy.get('[data-testid="royal_login_button"]').click()
 })

 Cypress.Commands.add('Negative_Password_Testing', () => { 
    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(wrongpassword)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
 })

 Cypress.Commands.add('Negative_Username_Testing', () => { 

    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(password)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')


 })

 Cypress.Commands.add('Negative_Username_Password_Testing', () => { 

    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(wrongpassword)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')


 })
