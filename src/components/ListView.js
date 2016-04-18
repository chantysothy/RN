'use strict';

import React, { Component, StyleSheet, Text, Image, View, ListView, TouchableHighlight } from 'react-native';
import GiftedListView from 'react-native-gifted-listview';

import StyleBase from './StyleBase';

class MyListView extends Component {

    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
        this._renderRowView = this._renderRowView.bind(this);
        this._onFetch = this._onFetch.bind(this);
    }


    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch(page = 1, callback, options) {
      setTimeout(() => {
        var rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
        if (page === 5) {
          callback(rows, {
            allLoaded: true, // the end of the list is reached
          });
        } else {
          callback(rows);
        }
      }, 1000); // simulating network fetching
    }

    _onPress(rowData) {
      console.log(rowData+' pressed');

    }

    _renderRowView(rowData) {

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
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </TouchableHighlight>
      );
    }

  render() {
    const { actions, assets } = this.props;

    return (
        <View style={styles.container,styles.containerBase}>
            <GiftedListView
              rowView={this._renderRowView}
              onFetch={this._onFetch}
              firstLoader={true} // display a loader for the first fetching
              pagination={true} // enable infinite scrolling using touch to load more
              refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
              withSections={false} // enable sections
              customStyles={{
                paginationView: {
                  backgroundColor: '#eee',
                },
              }}

              refreshableTintColor="blue"
            />
          </View>
    );
  }
}

export default MyListView

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
        textAlign: 'left'
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
