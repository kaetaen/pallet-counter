import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#153361'
  },

  title: {
    marginTop: 40,
    marginBottom: 40,
    fontFamily: 'fantasy',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',  
    color: '#FF8c00',
    borderBottomWidth: 4,
    borderBottomColor: '#f8f8f2'
  },

  textContent: {
    fontFamily: 'fantasy',
    fontSize: 20,
    fontWeight: '100',
    textAlign: 'center',
    color: '#f8f8f2'
  },

  button: {
    marginTop: 40,
    borderWidth: 2,
    borderColor: '#f8f8f2',
    backgroundColor: '#FF4500',
    padding: 20,
    borderRadius: 30,
  },

  textButton: {
    color: '#f8f8f2',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default styles
