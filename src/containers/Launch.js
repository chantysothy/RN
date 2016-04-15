import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';
import Button from 'react-native-button';
import ViewPager from 'react-native-viewpager';

var deviceWidth = Dimensions.get('window').width;

var IMGS = [
  'http://172.19.10.117:9000/bg.jpg',
  'http://172.19.10.117:9000/bg_blue.jpg',
];

class Launch extends React.Component {

    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
          dataSource: dataSource.cloneWithPages(IMGS),
        };
    }
    render(){
        const { actions } = this.props;
        return (
            <View style={styles.container}>
                <ViewPager
                  ref={(viewpager) => {this.viewpager = viewpager}}
                  style={this.props.style}
                  dataSource={this.state.dataSource}
                  renderPage={this._renderPage}
                  isLoop={false}
                  autoPlay={false}/>

                <TouchableHighlight style={styles.button} onPress={() => {
                    this.viewpager.goToPage(2);
                  }}>
                  <Text onPress={actions.routes.tabBar.tab1()}>进入主页</Text>
                </TouchableHighlight>
              </View>
        );
    }

    _renderPage(data: Object,pageID: number | string,) {
       return (
         <Image
           source={{uri: data}}
           style={styles.page} />
       );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  page: {
    width: deviceWidth,
  },
  button: {
    padding: 10,
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
  },
});

module.exports = Launch;
