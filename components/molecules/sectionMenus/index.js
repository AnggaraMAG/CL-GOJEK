import {View, Text, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Goride from '../../../assets/icon/go-ride.png';
import Gocar from '../../../assets/icon/go-car.png';
import GoFood from '../../../assets/icon/go-food.png';
import GoSend from '../../../assets/icon/go-box.png';
import GoMart from '../../../assets/icon/go-mart.png';
import GoPulsa from '../../../assets/icon/go-pulsa.png';
import Checkin from '../../../assets/icon/checkin.png';
import Lainnya from '../../../assets/icon/danlainnya.png';

const data = [
  {no: 0, name: 'GoRide', img: Goride, color: '#E2FAD1'},
  {no: 1, name: 'GoCar', img: Gocar, color: '#E2FAD1'},
  {no: 2, name: 'GoFood', img: GoFood, color: '#FFE1DE'},
  {no: 3, name: 'GoSend', img: GoSend, color: '#E2FAD1'},
];

const data2 = [
  {no: 4, name: 'GoMart', img: GoMart, color: '#FFE1DE'},
  {no: 5, name: 'GoPusa', img: GoPulsa, color: '#D3F4FB'},
  {no: 6, name: 'Check in', img: Checkin, color: '#D3F4FB'},
  {no: 6, name: 'Lainnya', img: Lainnya, color: '#EBEDEC'},
];

const Menus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperMenus}>
        {data.map((item, key) => (
          <View
            key={key}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: item.color,
              margin: 5,
              padding: 5,
              borderRadius: 18,
            }}>
            <Image source={item.img} style={{width: 42, height: 42}} />
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.wrapperMenus}>
        {data2.map((item, key) => (
          <View
            key={key}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: item.color,
              margin: 5,
              padding: 5,
              borderRadius: 18,
            }}>
            <View>
              <Image source={item.img} style={{width: 42, height: 42}} />
            </View>

            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  wrapperMenus: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default Menus;
