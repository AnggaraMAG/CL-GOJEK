import {View, Text, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import GoPay from '../../../assets/icon/gopaylogo.png';
import Pay from '../../../assets/icon/up.png';
import TopUp from '../../../assets/icon/happiness.png';
import Explore from '../../../assets/icon/explorer.png';
const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gopay}>
        <Image
          source={GoPay}
          style={{width: '100%', height: 20, marginLeft: -33}}
        />
        <Text>Bayar pake GoPay lebih praktis!</Text>
      </View>
      <View style={styles.pay}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderColor: '#E8E8E8',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 2,
            }}>
            <Image
              source={Pay}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </View>
          <Text
            style={{
              color: '#E8E8E8',
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            Bayar
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderColor: '#E8E8E8',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 2,
            }}>
            <Image source={TopUp} style={{width: 35, height: 35}} />
          </View>
          <Text
            style={{
              color: '#E8E8E8',
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            Isi Saldo
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderColor: '#E8E8E8',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 2,
            }}>
            <Image source={Explore} style={{width: 35, height: 35}} />
          </View>
          <Text
            style={{
              color: '#E8E8E8',
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            Explor
          </Text>
        </View>
      </View>
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
    padding: 10,
    justifyContent: 'center',
  },
  pay: {
    flex: 1.5,
    flexDirection: 'row',
  },
});

export default Payment;
