import React from 'react';
import ClientRootLayout from './clientRootLayout';
import './globals.css';

export const metadata = {
  title: 'Digit - Personal Finance Tracker',
  description: 'Personal Finance Tracker',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
