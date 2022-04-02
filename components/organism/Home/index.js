import {View, Text} from 'react-native';
import React from 'react';
import {
  SectionSearchWithProfile,
  SectionPayment,
  SectionMenus,
  SectionRamadhan,
  SectionBelanjaHemat,
  SectionPengeluaranIrit,
  SectionGoClub,
} from '../../molecules';
import Layout from '../../organism/Layout';
import {Gap} from '../../atoms';

const Home = () => {
  return (
    <>
      <SectionSearchWithProfile />
      <Layout>
        <SectionPayment />
        <SectionMenus />
        <Gap height={20} />
        <SectionRamadhan />
        <Gap height={20} />
        <SectionBelanjaHemat />
        <Gap height={20} />
        <SectionPengeluaranIrit />
        <Gap height={20} />
        <SectionGoClub />
        <Gap height={100} />
      </Layout>
    </>
  );
};

export default Home;
