'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  NavigationExperimental,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = ReactNative;
const {
  Container: NavigationContainer,
  Reducer: NavigationReducer,
} = NavigationExperimental;
const {
  JumpToAction,
} = NavigationReducer.TabsReducer;

var TabBar = React.createClass({
  render: function() {
    return (
      <View style={styles.tabBar}>
        {this.props.tabs.map(this._renderTab)}
      </View>
    );
  },
  _renderTab: function(tab, index) {
    var textStyle = [styles.tabButtonText];
    if (this.props.index === index) {
      textStyle.push(styles.selectedTabButtonText);
    }
    return (
      <TouchableOpacity
        style={styles.tabButton}
        key={tab.key}
        onPress={() => {
          this.props.onNavigate(JumpToAction(index));
        }}>
        <Text style={textStyle}>
          {tab.key}
        </Text>
      </TouchableOpacity>
    );
  },
});

TabBar = NavigationContainer.create(TabBar);

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
  },
  tabButtonText: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  selectedTabButtonText: {
    color: 'blue',
  },
});

module.exports = TabBar;
