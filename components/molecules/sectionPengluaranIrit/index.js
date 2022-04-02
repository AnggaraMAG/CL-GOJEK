import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import GoPay from '../../../assets/icon/gopaylogo.png';
import {StyleSheet} from 'react-native';
import irit1 from '../../../assets/icon/irit1.jpg';
import irit2 from '../../../assets/icon/irit2.jpg';
import irit3 from '../../../assets/icon/irit3.jpg';

const dataDummy = [
  {
    no: 0,
    img: irit1,
  },
  {
    no: 1,
    img: irit2,
  },
  {
    no: 2,
    img: irit3,
  },
];
const Section = () => {
  return (
    <View>
      <View style={styles.gopay}>
        <Image
          source={GoPay}
          style={{width: 150, height: 20, marginLeft: -30}}
        />
      </View>
      <Text style={styles.ramadhan}>Bikin Pengeluaran jadi irit</Text>
      <Text>Buruan dapetin sebelum kehabisan!</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
          </View>
        ))}
      </ScrollView>
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
    width: 360,
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
