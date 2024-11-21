 'use client';

import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '~/lib/redux/features/cart/cartSlice';

function page() {
  const dispatch = useDispatch();
  const store = useSelector((state: string) => state);


  console.log('🚀 ~ store:', store);
  return <div></div>;
}

export default page;
