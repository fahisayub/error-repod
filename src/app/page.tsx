'use client'
import React from 'react';
import ChooseSign from '@/components/AddSignNSeal/ChooseSign';
import { Text } from '@chakra-ui/react';

const Page = () => {
  return (
    <div style={{
      background: 'white',
      width: '100%', minHeight: '100vh', color: 'black',
      display: 'flex', justifyContent: 'center', flexDirection: 'column'
    }}>
      <Text>Add Signature</Text>
      <ChooseSign type={'sign'} />
      <Text>Add Seal</Text>
      <ChooseSign type={'seal'} />
    </div>
  );
};

export default Page;