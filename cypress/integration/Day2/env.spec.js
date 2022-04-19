var data =require('../../fixtures/staging.json')

if(Url.include('staging')){
    cy.fixture('staging.json').then((data)=>{
       data.Url()
       data.username()
       data.password()
    })
}else if(Url.include('uat')){
    cy.fixture('uat.json').then((data)=>{

    })
}else if(Url.include('prod')){
    cy.fixture('prod.json').then((data)=>{

    })
}

