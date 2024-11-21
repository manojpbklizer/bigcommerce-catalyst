'use client';

import { PropsWithChildren } from 'react';

import { CartProvider } from '~/components/header/cart-provider';
import { CompareDrawerProvider } from '~/components/ui/compare-drawer';

import { AccountStatusProvider } from './[locale]/(default)/account/(tabs)/_components/account-status-provider';
import StoreProvider from './StoreProvider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <CartProvider>
      <AccountStatusProvider>
        <CompareDrawerProvider>
        <StoreProvider>
            {children}
        </StoreProvider>
        </CompareDrawerProvider>
      </AccountStatusProvider>
    </CartProvider>
  );
}
