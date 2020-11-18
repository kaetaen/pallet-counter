import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './styles'

function Start ({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.title} >
          Contador de Paletes
        </Text>

        <Text style={styles.textContent}>
          Está com a memória fraca? Esqueceu como contar de 1 até 100?
          Não Consegue contar sem pensar no salário no fim do mês?
          Seus problemas acabaram!!!
          Chegou o contador do paletes, a ferramenta ideal para contar paletes.
          E o melhor, não tem descréscimos!!!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Contador') }
        >
          <Text style={styles.textButton}> Bora contar? </Text>
        </TouchableOpacity>
      </View>
  )
} 

export default Start
