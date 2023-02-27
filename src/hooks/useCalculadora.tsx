import {useRef, useState} from 'react';

enum Operadores {
  dividir,
  multiplicar,
  restar,
  sumar,
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
    ultimaOperacion.current = undefined;
  };
  const armarNumero = (numeroTexto: string) => {
    //Mensaje error
    if (/^[\D+\s]+$/.test(numero) && /[0-9]/.test(numeroTexto)) {
      setNumero(numeroTexto);
      return;
    }
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }
    // No aceptar doble cero
    if (numeroTexto === '0' && /^-{0,1}0$/.test(numero)) {
      return;
    }
    // Remplazar cero por otro valor
    if (/^-{0,1}0(?!\.)$/.test(numero) && /[1-9]/.test(numeroTexto)) {
      setNumero(numero.replace('0', numeroTexto));
      return;
    }
    setNumero(numero + numeroTexto);
  };

  const positivoNegativo = () => {
    //Mensaje error
    if (/^[\D+\s]+$/.test(numero)) {
      return;
    }
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    //Mensaje error
    if (/^[\D+\s]+$/.test(numero)) {
      return;
    }
    return /^-{0,1}[0-9]$/.test(numero)
      ? setNumero('0')
      : setNumero(numero.slice(0, -1));
  };

  const cambiarNumPorAnterior = () => {
    let valor = numero;
    //Mensaje error
    if (/^[\D+\s]+$/.test(numero)) {
      return false;
    }
    if (/^-{0,1}[0-9]+\.$/.test(valor)) {
      valor = valor.slice(0, -1);
    }
    setNumeroAnterior(valor);
    setNumero('0');
    return true;
  };

  const dividir = () => {
    if (cambiarNumPorAnterior()) {
      ultimaOperacion.current = Operadores.dividir;
    }
  };
  const multiplicar = () => {
    if (cambiarNumPorAnterior()) {
      ultimaOperacion.current = Operadores.multiplicar;
    }
  };
  const restar = () => {
    if (cambiarNumPorAnterior()) {
      ultimaOperacion.current = Operadores.restar;
    }
  };
  const sumar = () => {
    if (cambiarNumPorAnterior()) {
      ultimaOperacion.current = Operadores.sumar;
    }
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        // Mensaje error
        if (/^[\D+\s]+$/.test(numero)) {
          return;
        }
        if (numero === '0') {
          setNumero('La división por cero no está definida');
          return;
        }
        setNumero(`${num2 / num1}`);
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    armarNumero,
    btnDelete,
    calcular,
    dividir,
    limpiar,
    multiplicar,
    numero,
    numeroAnterior,
    positivoNegativo,
    restar,
    sumar,
  };
};
