import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#153361'
  },

  title: {
    marginTop: -20,
    marginBottom: 40,
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: '#FF8c00',
    borderBottomWidth: 4,
    borderBottomColor: '#f8f8f2'
  },

  button: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#f8f8f2',
    backgroundColor: '#FF4500',
    padding: 20,
    borderRadius: 30,
    width: 200
  },

  textButton: {
    color: '#f8f8f2',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})

export default styles
