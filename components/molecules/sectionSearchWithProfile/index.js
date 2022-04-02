import {View} from 'react-native';
import React from 'react';
import {SearchBar} from '../../atoms';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.searchBar}>
          <SearchBar />
        </View>
        <View style={styles.avatar}>
          <Avatar.Icon
            size={40}
            icon="account"
            color="#00880C"
            style={{backgroundColor: 'white'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00880C',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  searchBar: {
    width: '87%',
  },
  avatar: {
    alignItem: 'center',
    marginTop: 4,
    marginLeft: 10,
  },
});

export default index;
