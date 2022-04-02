import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import GoPay from '../../../assets/icon/gopaylogo.png';
import {StyleSheet} from 'react-native';
import promo1 from '../../../assets/icon/promo1.jpg';
import promo2 from '../../../assets/icon/promo2.jpg';
import promo3 from '../../../assets/icon/promo3.jpg';
import promo4 from '../../../assets/icon/promo4.jpg';

const dataDummy = [
  {
    no: 0,
    img: promo1,
    title: 'Gratis 25x transfer setiap bulan!',
    subtitle:
      'Nikmati bebas transfer antar sesama bank 25x setiap bulan khusus pengguna GoPay Jago',
  },
  {
    no: 1,
    img: promo2,
    title: 'Cashback Sampai 1 Miliar!',
    subtitle: 'Nikmati 1 Miliar hanya dalam mimpi bisa apa aja',
  },
  {
    no: 2,
    img: promo3,
    title: 'Bebas Jajang Pakai Gopay',
    subtitle: 'Jajan Apa saja sekarang gratis hanya di GoPay!',
  },
  {
    no: 3,
    img: promo4,
    title: 'Promo Hiburan Akhir Zaman!',
    subtitle: 'Nikmat Perjalanan Ke Alam Baka Hanya Lewat GoPay!',
  },
];
const SectionRamadhan = () => {
  return (
    <View>
      <View style={styles.gopay}>
        <Image
          source={GoPay}
          style={{width: 150, height: 20, marginLeft: -30}}
        />
      </View>
      <Text style={styles.ramadhan}>Ramadhan Tiba! Ramadhan Tiba!</Text>
      <Text>Promo Special GoPay Jago untuk Kamu</Text>
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
            <View style={styles.title}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 11}}>{item.subtitle}</Text>
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
export default SectionRamadhan;
