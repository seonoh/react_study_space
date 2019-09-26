import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 60,
    marginLeft: 14
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: '#0250a3',
    fontWeight: 'bold',
  },
  bottomText : {
    marginLeft : 14,
    marginTop : 10
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginLeft: 14
  }
});

export default styles;