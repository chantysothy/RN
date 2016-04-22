import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from 'react-native-router-redux';

// 组件
import Login from './Login';
import Launch from './Launch';
import TabView from '../components/TabView';
import TabIcon from '../components/TabIcon';
import Error from '../components/Error';
import SignIn from '../components/SignIn';
import Detail from '../components/Detail';
import Master from '../components/Master';
import NewsListView from '../components/NewsListView';
import NewsDetail from '../components/NewsDetail';

// define your routes
const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#FFFFFF',
  navTint: '#224655',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
};

const assets = {
  'calendar': require('../../assets/thin-0021_calendar_month_day_planner.png'),
  'home': require('../../assets/thin-0046_home_house.png'),
  'logo': require('../../assets/qwikly.png'),
  'profile': require('../../assets/thin-0091_file_profile_user_personal.png'),
  'video': require('../../assets/thin-0592_tv_televison_movie_news.png'),
};

class App extends Component{
    render() {
        return (
    <Router {...this.props} assets={assets} initial="login">
        <Schema name="default" {...defaultSchema} />

        <Route name="launch" component={Launch} type="reset" hideNavBar={true} />
        <Route name="detail" component={Detail} />
        <Route name="newsDetail" component={NewsDetail} />
        <Route name="login" component={Login} />
        <TabRoute name="tabBar" >
          <Route name="tab1" component={Master('#111')} title="Home" tabItem={{icon: assets['home'], title: 'Home'}} />
          <Route name="tab2" component={Counter} title="Calendar" tabItem={{icon: assets['calendar'], title: 'Calendar'}} />
          <Route name="tab3" component={NewsListView} title="News" tabItem={{icon: assets['video'], title: 'News'}} />
          <Route name="tab4" component={Master('#444')} title="Profile" tabItem={{icon: assets['profile'], title: 'Profile'}} />
        </TabRoute>
      </Router>
        );
    }
}

// connect your state and actions (using react-redux)
const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
