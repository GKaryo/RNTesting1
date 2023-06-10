import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <WebView
            source={{
              uri: 'https://aquamarine-sunburst-62192c.netlify.app/',
            }}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
  },
});

export default App;
