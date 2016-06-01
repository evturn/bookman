import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'
import Book from './Book'

const API = {
  route: 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=',
  key: 'd0f5a00abdc4458b88a7a7a234c50345' // STOP LOOKING AT MY KEY
}

class Bookman extends Component {
  constructor(props) {
    super(props)

    const rowHasChanged = (rowA, rowB) => rowA !== rowB
    const dataSource = new ListView.DataSource({ rowHasChanged })

    this.state = {
      dataSource: dataSource.cloneWithRows([])
    }
  }

  componentDidMount() {
    this.refreshData()
  }

  refreshData() {
    fetch(`${API.route + API.key}`)
      .then(x => x.json())
      .then(x => x.results.books)
      .then(x => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(x)
        })
      })
  }

  renderRow(data) {
    return (
      <Book
        coverUrl={data.book_image}
        title={data.title}
        author={data.author}
      />
    )
  }

  renderHeader() {
    return (
      <View style={styles.divider}>
        <Text style={styles.header}>
          NYT Calls It 'Riveting'
        </Text>
      </View>
    )
  }

  renderFooter() {
    return(
      <View style={styles.divider}>
        <Text>That's it.</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        style={{ marginTop: 25 }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter}
      />
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
  divider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'helveticaneue-thin',
    alignSelf: 'center'
  }
})

module.exports = Bookman