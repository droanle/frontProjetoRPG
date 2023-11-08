var teste = "10";

var groups = /([0-1]+)(\d{2})+$/gm.exec(teste.replace(/([^\d])+/gm, ""));

var [unidade, decimal] = [groups[1], groups[2]];

var value =
  "R$ " + unidade.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + decimal;

console.log(value);
