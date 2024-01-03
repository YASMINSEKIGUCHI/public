let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false 
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
} 
function adicionar() {
    let numero = document.querySelector('input#txtn')
    let lista = document.querySelector('select#fLista')
    let res = document.querySelector('div#res')
    
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}
function finalizar() {
    let res = document.querySelector('#res')
    if (valores == 0) {
            window.alert('Adicione um número à lista!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitadis é ${media}</p>`

    }
    
}