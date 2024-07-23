import * as React from 'react';

import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {CardComponent} from 'ui/components/CardComponent';

export const ArticlesScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const {title, subTitle, content, url, id} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView>
        <View style={styles.container__view}>
          <CardComponent
            id={id}
            url={url}
            title={title}
            content={content}
            subTitle={subTitle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__view: {
    padding: 20,
  },
});
