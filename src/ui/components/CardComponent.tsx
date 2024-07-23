import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  FAB,
  Portal,
  IconButton,
  Text,
} from 'react-native-paper';
import {IArticle} from 'src/interfaces/interfaces';
import {useTheme} from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

interface Navigation {
  navigate(destination: string): void;
}

interface ICardComponent extends IArticle {
  onClick?: () => any;
}

export const CardComponentTitle: FC<Partial<ICardComponent>> = ({
  title,
  subTitle,
  onClick,
}) => {
  return (
    <Card onPress={onClick} style={styles.card}>
      <Card.Title
        titleStyle={styles.titleStyle}
        title={title}
        subtitle={subTitle}
        left={props => <Avatar.Icon {...props} icon="folder" />}
        right={props => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
    </Card>
  );
};

export const CardComponent = (props: ICardComponent) => {
  const {title, subTitle, url, content, onClick} = props;

  console.log('CardComponent url===', url);
  const mockContent = '<Test>Hello</Text>';
  console.log('content data======', content.data);
  const theme = useTheme();
  return (
    <Card onPress={onClick} style={styles.card}>
      <Card.Cover source={{uri: url}} />
      <Card.Content>
        <Title style={styles.contentTitle}>{title ?? ''}</Title>
        <Title>{subTitle ?? ''}</Title>
        {content?.data?.map(ctnt => {
          return (
            <View key={JSON.stringify(ctnt)}>
              <Text style={styles.question}>{ctnt?.question ?? ''}</Text>
              <Text>{ctnt?.answer ?? ''}</Text>
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
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: '700',
  },
});
