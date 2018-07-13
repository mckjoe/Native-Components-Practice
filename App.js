
import React from 'react';
import { StyleSheet, Text, View, Switch, Image, TextInput, Button, ScrollView, TouchableOpacity, Picker, Slider, FlatList, SectionList } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: true
    };
  }

  renderItem({ item }) {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          section={[
            {
              key: 'aerfefeeevefggvwa',
              name: 'Joe',
              age: 30
            },
           {
             key: 'jhvbuyvhef',
             name: 'Fred',
             age: 67
           }
         ]}
          renderItem= {this.renderItem}
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'yellow',
    marginTop: 300,
    marginBottom: 300
  }
});
