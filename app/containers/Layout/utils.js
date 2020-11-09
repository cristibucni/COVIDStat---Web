import React from 'react';
import { Home, Info, Dashboard, PieChart, Inbox, LocalHospital } from '@material-ui/icons';

export const MENU_ITEMS = [
  { text: 'COVIDStat', icon: <LocalHospital color={'primary'} />, link: '/' },
  { text: 'Home', icon: <Home color={'primary'} />, link: '/' },
  { text: 'Credits', icon: <Info color={'primary'} />, link: '/credits' },
];
export const PRIVATE_MENU_ITEMS = [
  { text: 'Dashboard', icon: <Dashboard color={'primary'} />, link: '/dashboard' },
  { text: 'Statistics', icon: <PieChart color={'primary'} />, link: '/stats' },
  { text: 'Test Requests', icon: <Inbox color={'primary'} />, link: '/tests' },
];
