const estadistica = (stri) => {
  const nuevoestad = stri
    .split(",")
    .map((x) => parseFloat(x))
    .sort((a, b) => (a > b ? 1 : -1));

  const largo = nuevoestad.length;

  if (largo % 2 === 0) {
    const P = (largo + 1) / 2;

    const anteriorP = Math.trunc(P);
    const despuesP = Math.round(P);

    const Md = (nuevoestad[anteriorP - 1] + nuevoestad[despuesP - 1]) / 2;

    return Md;
  } else {
    const P = (largo + 1) / 2;
    const posicion = P;
    return nuevoestad[posicion - 1];
  }
};

//Datos Sin Agrupar

const estadDatosSinAgrupar = (inter, f) => {
  const X = inter.split(",").map((x) => parseFloat(x));

  const frecuencias = f.split(",").map((x) => parseFloat(x));

  const fa = [];

  frecuencias.forEach((elem, i) => {
    if (fa[i - 1] === undefined) {
      fa[i] = elem;
    } else {
      fa[i] = elem + fa[i - 1];
    }
  });

  N = frecuencias.reduce((actual, acumulado) => actual + acumulado, 0);

  P = N / 2;

  if (fa.includes(P)) {
    const posicion = fa.indexOf(P);

    const valor1 = X[posicion];
    const valor2 = X[posicion + 1];

    const Md = (valor1 + valor2) / 2;

    return Md;
  } else {
    const valorDelFa = fa.find((elem, index) => {
      if (elem > P) return index;
    });

    const posicion = fa.indexOf(valorDelFa);

    const Md = X[posicion];

    return Md;
  }
};

//Ingreso de datos

const resultados = document.querySelector(".resultados");
const calcular = document.getElementById("btnCalcularSimple");
const insertarDatos = document.querySelector(".datos");
const mensaje = document.querySelector(".mensaje");

let accion = 0;

calcular.addEventListener("click", () => {
  const datos = document.getElementById("valorSimples");
  resultados.style.display = "block";
  insertarDatos.innerHTML += datos.value;
  mensaje.innerHTML += `<b>Es</b>: ${estadistica(datos.value)}`;
  datos.value = "";
  accion++;
});

const nuevo = document.getElementById("limpiar");

nuevo.addEventListener("click", () => {
  insertarDatos.innerHTML = "";
  mensaje.innerHTML = "";
  resultados.style.display = "none";
});
