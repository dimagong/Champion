import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {
    Avatar,
    Card,
    Title,
    IconButton,
    Text,
    MD3Theme,
} from 'react-native-paper';
import {IArticle} from 'src/interfaces/interfaces';
import {useTheme} from 'react-native-paper';

interface ICardComponent extends IArticle {
    onClickHandler?: () => void;
}

export const CardComponentTitle: FC<Partial<ICardComponent>> = ({
    title,
    subTitle,
    onClickHandler,
    url,
}) => {
    return (
        <Card onPress={onClickHandler} style={styles.card}>
            <Card.Title
                titleStyle={styles.titleStyle}
                title={title}
                subtitle={subTitle}
                // left={props => <Avatar.Icon {...props} icon="folder" />}

                left={props => (
                    <Avatar.Image {...props} size={40} source={{uri: url}} />
                )}
                right={props => (
                    <IconButton
                        {...props}
                        icon="dots-vertical"
                        onPress={() => {}}
                    />
                )}
            />
        </Card>
    );
};

export const CardComponent = (props: ICardComponent) => {
    const {title, subTitle, url, content, onClickHandler} = props;

    const theme: MD3Theme = useTheme();
    return (
        <Card onPress={onClickHandler} style={styles.card}>
            <Card.Cover source={{uri: url}} />
            <Card.Content>
                <Title style={styles.contentTitle}>{title ?? ''}</Title>
                <Title>{subTitle ?? ''}</Title>
                {content?.data?.map(el => {
                    return (
                        <View key={JSON.stringify(el)}>
                            <Text
                                style={{
                                    ...styles.question,
                                    fontSize: theme.fonts.bodyLarge.fontSize,
                                }}>
                                {el?.question ?? ''}
                            </Text>
                            <Text>{el?.answer ?? ''}</Text>
                        </View>
                    );
                })}
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 30,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '700',
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    contentSubTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    question: {
        paddingTop: 10,
        paddingBottom: 2,
        fontWeight: '700',
    },
});
