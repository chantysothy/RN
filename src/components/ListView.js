'use strict';

import React, { Component, StyleSheet, Text, Image, View, ListView, TouchableHighlight, RecyclerViewBackedScrollView } from 'react-native';
import GiftedListView from 'react-native-gifted-listview';
import { ControlledRefreshableListView } from 'react-native-refreshable-listview';

import StyleBase from './StyleBase';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MyListView extends Component {

    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this._loadRow = this._loadRow.bind(this);
    }

    componentWillMount() {
      this._loadRow();
    }

    _loadRow() {
      const { listNews } = this.props;
      listNews();
    }



    _onPress(rowData) {
      console.log(rowData+' pressed');

    }

    _renderRow(rowData: object, sectionID: number, rowID: number) {
      console.log(rowData);
      const { actions, assets } = this.props;
      var imgSource = THUMB_URLS[5];
      return (
        <TouchableHighlight
          style={styles.row}
          underlayColor='#c8c7cc'
          onPress={actions.routes.detail()}
        >
          <View style={styles.rowView}>
              <Image style={styles.thumb} source={imgSource} />
              <View style={styles.text}>
                <Text style={styles.title}>{rowData.title}</Text>
                <View style={styles.desc}>
                  <Text>{rowData.desc}</Text>
                </View>
              </View>
          </View>
        </TouchableHighlight>
      );
    }

  render() {
    const { actions, assets, news} = this.props;
    console.log(news.newsList);
    // const dataSource = ds.cloneWithRows(news.newsList.rows);
    const data = news.newsList && news.newsList.rows instanceof Array ? news.newsList.rows : [];
    const dataSource = ds.cloneWithRows(data);
    return (
        <View style={styles.container,styles.containerBase}>
          <ControlledRefreshableListView
            dataSource={dataSource}
            renderRow={this._renderRow}
            isRefreshing={news.isFetching}
            onRefresh={this._loadRow}
            refreshDescription="Refreshing articles"
          />
        </View>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NewsActions from '../reducers/news/newsActions';

function mapStateToProps(state) {

  console.log(state);
  return {
    // news: state.news,
    news: state.news
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(NewsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyListView);

// export default MyListView

var styles = StyleSheet.create({
    container: {
    },
    row: {
      padding: 10,
      height: 64,
      borderTopColor: '#CCCCCC',
      borderTopWidth: 0.5,

    },
    rowView: {
        flexDirection: 'row',
    },
    thumb: {
        width: 90,
        height: 64,
        resizeMode : 'contain',
        padding: 10,
    },
    text: {
        flex: 1,
        flexDirection: 'column',
    },
    ...StyleBase
});

var THUMB_URLS = [
  require('../../Thumbnails/like.png'),
  require('../../Thumbnails/dislike.png'),
  require('../../Thumbnails/call.png'),
  require('../../Thumbnails/fist.png'),
  require('../../Thumbnails/bandaged.png'),
  require('../../Thumbnails/flowers.png'),
  require('../../Thumbnails/heart.png'),
  require('../../Thumbnails/liking.png'),
  require('../../Thumbnails/party.png'),
  require('../../Thumbnails/poke.png'),
  require('../../Thumbnails/superlike.png'),
  require('../../Thumbnails/victory.png'),
  ];
