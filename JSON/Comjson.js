//JSON JAVASCRIPT OBJECT NOTATION
// OBJETO SIMPLES DE CHAVE E VALOR  COM OBJETIVO DE TRANSFERIR DADOS
// EXEMPLO COM O JSON:
let invoice = {
    name: "felipe", 
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado", 39.90],
        2: ["Monitor", 109.90],
        3: ["Monitor2", 169.90],
        4: ["Monitor3", 129.63],
        5: ["Monitor3", 100.50]
    }
}
generateInvoice(invoice)

function generateInvoice(invoice){      
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("--------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }

}