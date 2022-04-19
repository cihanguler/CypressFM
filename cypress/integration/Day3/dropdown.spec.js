var data = require('../../fixtures/states.json')

describe('dropdown handling',()=>{


    it('First Test',()=>{
        cy.visit('http://practice.cybertekschool.com/dropdown')

        
        cy.get('[id="state"] > option').each(($el,index)=>{

            const text = $el.text()

            expect(text).to.contain(data.states[index])

            cy.get('[id="state"]').select($el.text()).should('be.visible')
        })
    })

    it('Choose_Birthday',()=>{
        cy.visit('http://practice.cybertekschool.com/dropdown')

        const year ='1983'
        const month ='December' // 12. month
        const day ='21'

        cy.get('[id="year"] > option').each(($el,index)=>{
            const text = $el.text()    
            if (text==year) {         
            cy.get('[id="year"]').select($el.text())
            }
        })

        cy.get('[id="month"] > option').each(($el,index)=>{
            const text = $el.text()    
            if (text==month) {
                cy.get('[id="month"]').select($el.text())
            }
        })

        cy.get('[id="day"] > option').each(($el,index)=>{
            const text = $el.text()    
            if (text==day) {
                cy.get('[id="day"]').select($el.text())
            }          
        })
    })



})

//Task 
//Go to http://practice.cybertekschool.com/dropdown
// select your date of birth and do the assertion base on your birthdate.

