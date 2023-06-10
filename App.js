import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';

class App extends React.Component {
  state = {
    corrects: 0,
    currentIndex: 0,
    buttonClass: ['butt', 'butt', 'butt', 'butt'],
    statusBarWidth: '1%',
    topics: [
      {
        question: 'JavaScript 與 Java 有什麼關係？',
        answers: [
          {
            value: '同公司的產品',
            correct: false,
          },
          {
            value: '新版與舊版的關係',
            correct: false,
          },
          {
            value: '一點關係也沒有',
            correct: true,
          },
          {
            value: 'JavaScript 是 Java 的 Web 版本',
            correct: false,
          },
        ],
      },
      {
        question: '發明 React JS 的公司是？',
        answers: [
          {
            value: 'Google',
            correct: false,
          },
          {
            value: 'Facebook',
            correct: true,
          },
          {
            value: 'Apple',
            correct: false,
          },
          {
            value: 'Microsoft',
            correct: false,
          },
        ],
      },
    ],
  };

  next = (index, correct) => {
    // 1. corrects + 1 if the answer is correct
    if (correct) {
      this.setState({
        corrects: this.state.corrects + 1,
      });
    }

    // 2. Highlight Selected Answer, correct or not
    let newButtonClass = [...this.state.buttonClass];
    newButtonClass[index] = correct ? 'buttoncorrect' : 'buttonwrong';

    setTimeout(() => {
      this.setState({
        buttonClass: newButtonClass,
      });
    }, 150);

    // 3. Change Topic
    setTimeout(() => {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        buttonClass: ['', '', '', ''],
        statusBarWidth: `${
          ((this.state.currentIndex + 1) / this.state.topics.length) * 100
        }%`,
      });
    }, 1200);
  };

  startOver = () => {
    setTimeout(() => {
      this.setState({
        corrects: 0,
        currentIndex: 0,
        buttonClass: ['', '', '', ''],
        statusBarWidth: '1%',
      });
    }, 300);
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.textstyle}>
            <View style={{width: this.state.statusBarWidth}}></View>

            {this.state.currentIndex < this.state.topics.length ? (
              <View style={styles.textstyle}>
                <Text style={styles.textstyle}>
                  {this.state.topics[this.state.currentIndex].question}
                </Text>

                {this.state.topics[this.state.currentIndex].answers.map(
                  (answer, index) => {
                    return (
                      <TouchableOpacity
                        style={this.state.buttonClass[index]}
                        key={index}
                        onPress={() => this.next(index, answer.correct)}>
                        <Text style={styles.textstyle}>{answer.value}</Text>
                      </TouchableOpacity>
                    );
                  },
                )}
              </View>
            ) : (
              <View>
                <View></View>
                <View></View>
                <View>
                  <Text style={styles.textstyle}>Completed!</Text>
                  <Text style={styles.textstyle}>
                    Your Score is{' '}
                    {Math.round(
                      (this.state.corrects / this.state.topics.length) * 100,
                    ) || 0}
                  </Text>
                  <TouchableOpacity onPress={this.startOver}>
                    <Text style={styles.textstyle}>Start Over</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    flex: 1,
  },
  textstyle: {
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  butt: {
    backgroundColor: '#eee',
    margin: 10,
    padding: 8,
    borderRadius: 8,
  },

  buttonwrong: {
    backgroundColor: '#FF7056',
  },

  buttoncorrect: {
    backgroundColor: '#4FFF87',
  },
});

export default App;
