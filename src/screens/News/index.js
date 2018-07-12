import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import HeaderView from '../../components/HeaderView';
import { List, Card, Text, Icon } from 'native-base';
import styles from './style';
import ButtonLike from '../../components/ButtonLike';
import { getNewsFeed } from '../../actions/feed';

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getNewsFeed());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.feeds != nextProps.feeds && nextProps.feeds != null) {
            this.setState({
                articles: nextProps.feeds.articles
            })
        }
    }

    renderArticles(row) {
        let time = new Date(row.publishedAt)
        return (
            <Card style={{ margin: 10 }}>
                <View style={{ margin: 10 }}>
                    <Text style={styles.authorText}>
                        {row.author}
                    </Text>
                    <Text style={styles.dateText}> {time.toDateString()}</Text>
                </View>
                <View style={{ margin: 10, marginTop: 0 }}>
                    <Text style={styles.authorTitle}>
                        {row.title}
                    </Text>
                    <Text style={styles.uriText}> {row.url}</Text>
                </View>
                <ImageBackground
                    source={{ uri: row.urlToImage }}
                    style={styles.img}
                    resizeMode='stretch'
                />
                <View style={{ margin: 10 }}>
                    <Text style={styles.descriptionText}>
                        {row.description}
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <View style={styles.buttonLikeView}>
                        <ButtonLike iconType='Foundation' iconName='like' text='Like' />
                    </View>
                    <View style={styles.buttonLikeView}>
                        <ButtonLike iconType='Ionicons' iconName='ios-share-alt' text='Share' />
                    </View>
                    <View style={[styles.buttonLikeView, { flex: 1.5 }]}>
                        <ButtonLike
                            iconType='MaterialCommunityIcons'
                            iconName='comment'
                            text='Comment'
                            iconSmall={true}
                        />
                    </View>
                </View>
            </Card>
        )
    }

    render() {
        const { openDrawer, goBack } = this.props.navigation;

        return (
            <View style={styles.content}>
                <HeaderView
                    onPressBack={() => { this.props.navigation.navigate('authNavigator') }}
                />
                <List
                    style={{ margin: 10 }}
                    dataArray={this.state.articles}
                    renderRow={(row) => this.renderArticles(row)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    feeds: state.feed.feed
})

export default connect(mapStateToProps)(News);