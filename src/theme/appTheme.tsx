import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  resultado: {
    color: '#FFF',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: '#FFFFFF50',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  boton: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 80,
    marginHorizontal: 10,
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    color: '#FFF',
  },
  filaHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 18,
  },
  botonHorizontal: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 80,
    marginHorizontal: 20,
    height: 34,
    width: 150,
    backgroundColor: '#2D2D2D',
  },
  botonTextoHorizontal: {
    textAlign: 'center',
    padding: 2,
    fontSize: 18,
    fontWeight: '300',
    color: '#FFF',
  },
});
