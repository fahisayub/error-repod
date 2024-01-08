'use client'

import { uploadToStorage } from '@/components/AddSignNSeal/firebaseStorageHelpers';
import { Input } from '@chakra-ui/react';
import React from 'react';

const ChooseSign = ({ type }: any) => {


  let handleSign = async (e: React.ChangeEvent<HTMLInputElement>) => {
    uploadToStorage('bloburl','filename')

  }

  return (
    <Input type="file" accept={'.jpg,.png'} onChange={handleSign} />

  );

};

export default ChooseSign;