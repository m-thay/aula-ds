const produto = {
    nome: " Samsung Galaxy A54 5G",
    marca: "Smasung Galaxy",
    preco: 2.499,
  };
  for ( let chave in produto ) {
    console.log(chave, produto[chave]);
  }

console.log(Object.keys(produto));
console.log(Object.values(produto));