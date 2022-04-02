import {View, ScrollView} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    // marginBottom: 100,
    // paddingBottom: 100,
  },
});

export default Layout;
