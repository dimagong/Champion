import * as React from 'react';

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  FAB,
  Portal,
} from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

interface Navigation {
  navigate(destination: string): void;
}

type CardComponentType = {
  title?: string;
  subtitle?: string;
  source?: string;
  contentTitle?: string;
  content?: string;
  onClick?: () => any;
  id?: string;
};

export const CardComponent: React.FC<CardComponentType> = props => {
  const {
    title,
    subtitle,
    source = 'ui/images/reward.jpg',
    contentTitle,
    content,
    onClick,
  } = props;
  return (
    <Card onPress={onClick}>
      {title || subtitle ? (
        <Card.Title
          title={title ?? 'title'}
          subtitle={subtitle ?? 'subtitle'}
          left={LeftContent}
        />
      ) : null}

      <Card.Cover
        //source={{uri: 'https://picsum.photos/700'}}
        source={require(source)}
      />
      <Card.Content>
        <Title>{contentTitle ?? 'contentTitle'}</Title>
        <Paragraph>{content ?? 'content'}</Paragraph>
      </Card.Content>
    </Card>
  );
};
