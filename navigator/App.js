import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen!</Text>
        <Button style={styles.button}
          title="Go to Detail(Navigate)"
          onPress={() => this.props.navigation.navigate('Details')}
        ></Button>
      </View>
    );
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screens!</Text>
        <Button style={styles.button}
          title="Go to Detail(push)"
          onPress={() => this.props.navigation.push('Details')}
        ></Button>
        <Button style={styles.button}
          title="Go to Home(navigate)"
          onPress={() => this.props.navigation.navigate('Home')}
        ></Button>
        <Button style={styles.button}
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen
},{
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);