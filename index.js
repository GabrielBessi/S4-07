let arrayA = [
    "Categoria",
    "Peça",
    "Quantidade",
]

let arrayB = [
    "Periférico",
    "Hardware",
]

let arrayC = [ 
    "Mouse",
    "Teclado",
    "Monitor",
    "HD",
    "SSD",
    "Memória"
]

let arrayD = [
    10,
    12,
    2,
    3,
    2,
    5,
]

console.log(arrayA[0], arrayA[1], arrayA[2])
console.log(arrayB[0], arrayC[0], arrayD[0])
console.log(arrayB[0], arrayC[1], arrayD[1])
console.log(arrayB[0], arrayC[2], arrayD[2])
console.log(arrayB[1], arrayC[3], arrayD[3])
console.log(arrayB[1], arrayC[4], arrayD[4])
console.log(arrayB[1], arrayC[5], arrayD[5])



  let resultado = 0;

  for (let i = 0; i < arrayD.length; i++ ){
        resultado += arrayD[i]
    }


  console.log(`Estoque total é de ${resultado} equipamentos`)