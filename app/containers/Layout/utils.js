import React from 'react';
import { Home, Info, Dashboard, PieChart, Inbox, LocalHospital, Help } from '@material-ui/icons';

export const MENU_ITEMS = [
  {
    text: 'COVIDStat',
    icon: className => <LocalHospital classes={{ root: className }} color={'primary'} />,
    link: '/',
  },
  {
    text: 'Informatii utile',
    icon: className => <Help classes={className && { root: className }} color={'primary'} />,
    link: '/info',
  },
];
export const PRIVATE_MENU_ITEMS = [
  {
    text: 'Panou de control',
    icon: className => <Dashboard classes={{ root: className }} color={'primary'} />,
    link: '/',
  },
  {
    text: 'Statistici',
    icon: className => <PieChart classes={className && { root: className }} color={'primary'} />,
    link: '/stats',
  },
  {
    text: 'Cereri de testare',
    icon: className => <Inbox classes={className && { root: className }} color={'primary'} />,
    link: '/tests',
  },
  { text: 'Credite', icon: className => <Info classes={{ root: className }} color={'primary'} />, link: '/credits' },
];
