function ConverterDolar() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorConvertidoParaDolar = valorNumerico * 0.2;

  var valorConvertidoParaDolarArredondado = valorConvertidoParaDolar.toFixed(2);

  var valorExibido =
    valorNumerico +
    " reais covertidos para dólares é igual a " +
    valorConvertidoParaDolarArredondado +
    " dólares. ";

  var elementoValorConvertido = document.getElementById("valorConvertido");
  console.log(valorExibido);
  elementoValorConvertido.innerHTML = valorExibido;
}

function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valor");
  var valorEuro = valorElementoEuro.value;
  var valorNumericoEuro = parseFloat(valorEuro);

  var coversaoEuro = (valorNumericoEuro * 0.18).toFixed(2);
  var valorExibidoEuro =
    valorNumericoEuro +
    " reais convertidos para euros é igual a " +
    coversaoEuro +
    " euros";
  console.log(valorExibidoEuro);
  var elementoValorConvertidoEuro = document.getElementById("valorConvertido");
  elementoValorConvertidoEuro.innerHTML = valorExibidoEuro;
}

function CoverterLibra() {
  var valorElementoLibra = document.getElementById("valor");
  var valorLibra = valorElementoLibra.value;
  var valorNumericoLibra = parseFloat(valorLibra);

  var conversaoLibra = (valorNumericoLibra * 0.15).toFixed(2);
  var valorExibidoLibra =
    valorNumericoLibra +
    " reais convertidos para libras é igual a " +
    conversaoLibra +
    " libras";

  var elementoValorConvertidoLibra = document.getElementById("valorConvertido");
  elementoValorConvertidoLibra.innerHTML = valorExibidoLibra;
  console.log(valorNumericoLibra);
}



