import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import LoginForm from '../components/LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
});
