import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

class Bookman extends Component {
  constructor(props) {
    super(props)

    const rowHasChanged = (rowA, rowB) => rowA !== rowB
    const dataSource = new ListView.DataSource({ rowHasChanged })

    this.state = {
      dataSource: dataSource.cloneWithRows([])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Bookman
        </Text>
        <Text>
          Here's your goddamn list.
        </Text>
        <Text>
          Don't like it?{'\n'}
          👐hatever
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center'
  }
})

module.exports = Bookman