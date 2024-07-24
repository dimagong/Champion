import * as React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {
    changeResultMatch,
    //setNextMatch,
    //setStatistics,
} from './../../store/slices';

import {selectNextMatch} from '../../store/selectors/selectNextMatch';

import {receiveStatistics} from './../../data/api/services';
import {fetchStatistics} from '../../store/thunks/fetchStatistics';
import {fetchNextMatches} from '../../store/thunks/fetchNextMatches';
import {fetchArticles} from '../../store/thunks/fetchArticles';

import {
    StatusBar,
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    ScrollView,
} from 'react-native';

import {Avatar, Button as ButtonPaper} from 'react-native-paper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {CardComponent, CardComponentTitle} from 'ui/components/CardComponent';
import {HeaderComponent} from 'ui/components/HeaderComponent';

import type {RootState} from '../../store/store';
import {Carousel} from 'ui/components';

import {useTheme} from 'react-native-paper';
import {theme} from './../../../App';
import {selectFinishedMatches} from './../../store/selectors';
import {IArticle, IMatch} from 'src/interfaces';
import {ActionCreatorWithPayload, AsyncThunkAction} from '@reduxjs/toolkit';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

interface IArticlesProps extends IArticle {
    // item: any;
    //navigation: any;
}

const Articles = (article: IArticlesProps) => {
    const navigation = useNavigation<any>();
    const onClickArticles = () => navigation.navigate('Articles', {...article});
    return (
        <CardComponentTitle
            onClickHandler={onClickArticles}
            title={article.title}
            subTitle={article.subTitle}
            url={article.url}
        />
    );
};

//TODO pass data for display articles on the Atricles screen
// TODO remove any type

export const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const {deviceHeight, deviceWidth, colors} = useTheme<typeof theme>();
    //const navigation = useNavigation();
    const count = useSelector((state: RootState) => state?.resultMatch?.value);
    const state = useSelector((state: RootState) => state);
    const lastMatches: IMatch[] = useSelector(selectFinishedMatches);
    const articles: IArticle[] = useSelector(
        (state: RootState) => state?.articles?.value,
    );
    const dispatch = useDispatch<ActionCreatorWithPayload<any> | any>();

    React.useEffect(() => {
        dispatch(fetchStatistics());
        dispatch(fetchNextMatches());
        dispatch(fetchArticles());
        // const data = receiveStatistics();
        // data.then(data => dispatch(setStatistics([...data])));
    }, []);

    const redirectStatsPage = (screen = 'Stats', params = {}) =>
        navigation.navigate(screen, params);
    const nextMatch = useSelector(selectNextMatch);
    console.log('teams', nextMatch);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <ScrollView>
                <HeaderComponent nextMatch={nextMatch} />
                <View style={styles.container__carousel}>
                    <Carousel lastMatches={lastMatches} />
                </View>
                <View style={styles.container__view}>
                    {articles.map(item => (
                        <Articles
                            {...item}
                            key={item.id}
                            // navigation={navigation}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    container__carousel: {
        height: 'auto',
        paddingBottom: 25,
        paddingTop: 25,
    },
    container__view: {
        borderWidth: 1,
        borderColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 20,
    },
});
