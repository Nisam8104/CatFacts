import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,

    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  textstyle: {
    fontSize: 20,
    color: 'black',
  },
  headingtext: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  Heading: {
    padding: 20,
    flex: 1,
  },
});

export default styles;
