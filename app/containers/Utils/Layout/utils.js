import React from 'react';
import { Home, Info, Dashboard, PieChart, Inbox } from '@material-ui/icons';

export const MENU_ITEMS = [
  { text: 'Home', icon: <Home color={'secondary'} />, link: '/' },
  { text: 'Credits', icon: <Info color={'secondary'} />, link: '/credits' },
];
export const PRIVATE_MENU_ITEMS = [
  { text: 'Dashboard', icon: <Dashboard color={'secondary'} />, link: '/dashboard' },
  { text: 'Statistics', icon: <PieChart color={'secondary'} />, link: '/stats' },
  { text: 'Test Requests', icon: <Inbox color={'secondary'} />, link: '/tests' },
];
