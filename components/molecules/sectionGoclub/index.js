import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import GoPay from '../../../assets/icon/gopaylogo.png';
import {StyleSheet} from 'react-native';
import goclub from '../../../assets/icon/goclub1.jpg';

const dataDummy = [
  {
    no: 0,
    img: goclub,
    title: 'Gratis 25x transfer setiap bulan!',
    subtitle:
      'Nikmati bebas transfer antar sesama bank 25x setiap bulan khusus pengguna GoPay Jago',
  },
];
const Section = () => {
  return (
    <View>
      {dataDummy.map((item, key) => (
        <View style={[styles.card, styles.shadowProp]} key={key}>
          <View style={{width: '100%', height: 200}}>
            <Image
              source={item.img}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            />
          </View>
          <View style={styles.title}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{fontSize: 11}}>{item.subtitle}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0081A0',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  gopay: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 10,
    justifyContent: 'center',
  },
  ramadhan: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    color: 'black',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  card: {
    borderRadius: 16,
    width: 390,
    borderColor: 7, // if you need
    borderWidth: 3,
    overflow: 'hidden',
    shadowColor: 105,
    shadowRadius: 5,
    shadowOpacity: 6,
    marginRight: 10,
  },
  title: {
    padding: 10,
  },
});
export default Section;
