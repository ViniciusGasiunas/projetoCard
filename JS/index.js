 let homemDeFerro = {
         nome: "homem de ferro",
        "description": "heroi",
        "idade": 39,
        "poder": "dinheiro",
        "hobbies":"gastar", 
        "inimigos": ["thanos","loki","homem 13"]   
}

let titulo = document.querySelector('.card-body')
let conteudo = document.querySelector('.card-text')
let lista = document.createElement('ul')

homemDeFerro.inimigos.forEach(function(value, position){ //valor e posição que vai receber o item da array cada vez que ele percorrer uma array
        let item = document.createElement('li')
        item.innerHTML = inimigos
        lista.appendChild(item)
})

conteudo.appendChild(lista)

//titulo.textContent = homemDeFerro.nome
titulo.innerHTML = homemDeFerro.nome