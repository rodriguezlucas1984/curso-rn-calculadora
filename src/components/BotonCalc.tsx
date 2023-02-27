import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

interface IProps {
  texto: string;
  color?: string;
  width?: number | string;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({texto, color, width, accion}: IProps) => {
  const {height: alto, width: ancho} = useWindowDimensions();
  const estilosBoton: ViewStyle =
    alto > ancho ? {...styles.boton} : {...styles.botonHorizontal};
  const estilosTextoBoton: TextStyle =
    alto > ancho ? {...styles.botonTexto} : {...styles.botonTextoHorizontal};

  if (color) {
    estilosBoton.backgroundColor = color;
    if (color === '#9B9B9B') {
      estilosTextoBoton.color = '#000';
    }
  }
  if (width) {
    estilosBoton.width = alto > ancho ? width : ancho * 0.4;
  }
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View style={estilosBoton}>
        <Text style={estilosTextoBoton}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};
