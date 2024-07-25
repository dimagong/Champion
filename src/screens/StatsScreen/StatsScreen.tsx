import React, {useEffect} from 'react';
import type {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TableComponent from 'ui/components/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/store/store';
import {ActionCreatorWithPayload, AsyncThunkAction} from '@reduxjs/toolkit';
import {fetchStatistics} from '../../store/thunks/fetchStatistics';
import {ITeamsStatistics, ITeamStatistics} from 'src/interfaces';

type IProps = {
    children: JSX.Element;
    title: string;
};

const Section = ({children, title}: IProps): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>

            {children}
        </View>
    );
};

const Stack = createNativeStackNavigator();

export const StatsScreen = ({navigation}: {navigation: any}) => {
    const statistics = useSelector(
        (state: RootState) => state.statistics.value,
    );

    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch<ActionCreatorWithPayload<any> | any>();
    useEffect(() => {
        dispatch(fetchStatistics());
    }, []);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const teamsStatistics: ITeamsStatistics = statistics?.map(stat => {
        return {
            team: stat?.team?.name,
            matches: stat?.awayStats?.matches.played,
            draw: stat?.awayStats?.matches.draw,
            lost: stat?.awayStats?.matches.lost,
            won: stat?.awayStats?.matches.won,
            points: stat?.awayStats?.points,
            id: stat?.team?._id,
        } as ITeamStatistics;
    });
    console.log('statistics=====teamsStatistics', teamsStatistics);

    return (
        <SafeAreaView style={backgroundStyle}>
            {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                {/* <Header /> */}
                <View
                    style={{
                        backgroundColor: isDarkMode
                            ? Colors.black
                            : Colors.white,
                    }}>
                    <Section title="Match statistics">
                        <>
                            <TableComponent teamsStatistics={teamsStatistics} />{' '}
                        </>
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
