import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component {
  state = {
    count: 10,
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text
            style={{fontSize: 100, fontWeight: 'bold', textAlign: 'center'}}>
            {this.state.count}
          </Text>
          <Button title="More" onPress={this.increment} />
          <TouchableOpacity
            onPress={this.increment}
            style={{
              backgroundColor: 'cyan',
              margin: 20,
              padding: 8,
              borderRadius: 8,
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
              More
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    flex: 1,
  },
});

export default App;
