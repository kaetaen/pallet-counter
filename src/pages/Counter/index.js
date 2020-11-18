import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

function Counter () {
  const [counter, setCounter] = useState(0)
  const [disableCounter, setDisableCounter] = useState(false)

  const handleCounter = () => {
    setCounter(counter + 1)
    setDisableCounter(true)
    setTimeout(() => setDisableCounter(false), 5000)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          { counter }
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCounter()}
          disabled={disableCounter}
        >
          <Text style={styles.textButton}>
            Contar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onLongPress={() => setCounter(0)}
        >
          <Text style={styles.textButton}>
            Zerar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Counter
