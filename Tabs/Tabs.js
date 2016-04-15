'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  NavigationExperimental,
  ScrollView,
  StyleSheet,
  View,
  Text,
} = ReactNative;
const {
  Container: NavigationContainer,
  RootContainer: NavigationRootContainer,
  Reducer: NavigationReducer,
} = NavigationExperimental;

const TabBar = require('./TabBar');

class TabPage extends React.Component {
  render() {
    const currentTabRoute = this.props.tabs[this.props.index];
    return (
      <ScrollView style={styles.tabPage}>
          <Text>
            {currentTabRoute.key}
          </Text>
      </ScrollView>
    );
  }
}
TabPage = NavigationContainer.create(TabPage);

const ExampleTabsReducer = NavigationReducer.TabsReducer({
  tabReducers: [
    (lastRoute) => lastRoute || {key: 'one'},
    (lastRoute) => lastRoute || {key: 'two'},
    (lastRoute) => lastRoute || {key: 'three'},
  ],
});

class NavigationTabs extends React.Component {
  render() {
    return (
      <NavigationRootContainer
        reducer={ExampleTabsReducer}
        persistenceKey="NAV_EXAMPLE_STATE_TABS"
        ref={navRootContainer => { this.navRootContainer = navRootContainer; }}
        renderNavigation={(navigationState) => {
          if (!navigationState) { return null; }
          return (
            <View style={styles.topView}>
              <TabPage
                tabs={navigationState.children}
                index={navigationState.index}
                onExampleExit={this.props.onExampleExit}
              />
              <TabBar
                tabs={navigationState.children}
                index={navigationState.index}
              />
            </View>
          );
        }}
      />
    );
  }
  handleBackAction() {
    return (
      this.navRootContainer &&
      this.navRootContainer.handleNavigation(NavigationRootContainer.getBackAction())
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    paddingTop: 44,
  },
  tabPage: {
    backgroundColor: '#E9E9EF',
  },
});

module.exports = NavigationTabs;
