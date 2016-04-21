'use strict';

import React, { Component, StyleSheet, Text, View } from 'react-native';

class NewsDetail extends Component {
  render() {
    const { actions, detail, router } = this.props;
    var title = "国防部回应“在南海发射导弹”";
    if(router.data && router.data.title) {
      title = router.data.title;
    }
    return (
      <View style={styles.container}>
        <Text onPress={actions.pop} style={styles.title}>{title}</Text>
        <View>
          <Text style={styles.date}>04-21 15:14</Text>
        </View>
        <View>
          <Text>中新网4月21日电 据国防部新闻局官方微博消息，国防部新闻局今日回应“4月12日，中国在南海附近发射了洲际导弹”时表示，中国在境内按计划进行科研试验是正常的，这些试验不针对任何特定国家和目标。媒体报道的试验地点纯属猜测。
有媒体问：据报道，4月12日，中国在南海附近发射了洲际导弹。请中方确认并提供相关信息。
国防部新闻局表示，我们在境内按计划进行科研试验是正常的，这些试验不针对任何特定国家和目标。
国防部新闻局表示，媒体报道的试验地点纯属猜测。
          </Text>
        </View>
      </View>
    );
  }
}

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NewsActions from '../reducers/news/newsActions';

function mapStateToProps(state) {

  return {
    // news: state.news,
    router: state.router,
    detail: state.news.detail
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(NewsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#111111',
  },
  date: {
    fontSize: 12
  }
});
