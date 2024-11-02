//JSON JAVASCRIPT OBJECT NOTATION
// OBJETO SIMPLES DE CHAVE E VALOR  COM OBJETIVO DE TRANSFERIR DADOS
// EXEMPLO SEM O JSON:

let name = "Felipe"
let age = 28
let products = ["Mouse 2xwm", "Teclado mecânico" , "Monitor"]
let productsValues = [29.90, 129.99, 899,99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products , age){      
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("--------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}