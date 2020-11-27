import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Item from 'components/Landings/Info/item';
import DoubleTextItem from 'components/Landings/Info/doubleTextItem';

//PICTURES
const FirstPicture = require('images/info/poza1.png');
const SecondPicture = require('images/info/poza2.jpg');
const ThirdPicture = require('images/info/poza3.png');
const FourthPicture = require('images/info/poza4.jpg');

//STYLING
import styles from 'containers/Landings/Info/styles';

const data = [
  {
    title: 'Ce este COVID-19 sau SARS-CoV-2?',
    text:
      '  COVID-19 este rezultatul infecției cu Coronavirusul Sindromului Respirator Acut Sever 2 (SARS-CoV-2) care a fost\n' +
      '          pentru prima dată izolat și identificat în Wuhan, China, în Decembrie 2019. Similar cu virusurile care determină\n' +
      '          Sindromul Respirator Acut Sever (SARS) – identificat în China în 2003 - și Sindromul Respirator din Orientul\n' +
      '          Mijlociu (MERS) – identificat în Arabia Saudită în 2012-, acest virus a reușit să treacă de la o specie la alta,\n' +
      '          acum el transmițându-se în cea mai mare proporție de la om la om.',
    image: FirstPicture,
  },
  {
    title: 'Cum se transmite virusul SARS-CoV-2?',
    text:
      'Prin picaturi respiratorii: această cale este considerată a fi principala cale de transmitere a acestei boli, similar cu alte infectii respiratorii (gripa)- în momentul în care o persoană infectată tușește, strănută, vorbește și picături intră în contact direct cu mucoasele altor persoane. \n' +
      '\n' +
      'Prin contact direct cu fluide: sânge, materii fecale, urină, salivă, spermă de la o persoană infectată \n' +
      '\n' +
      'Prin contact indirect: SARS-CoV-2 poate rezista în mediul unei persoane infectate (suprafete de orice tip, mânerul ușilor, telefon, etc.). Prin atingerea unor astfel de suprafețe contaminate și apoi prin atingerea propriei guri, a nasului sau a ochilor, o nouă persoană se poate infecta. ',
    image: SecondPicture,
  },
  {
    title: 'Simtome și perioada de incubație.',
    text:
      'Cele mai frecvente simtome ale infeției cu COVID-19 sunt febra, tusea și dificultățile respiratorii. Acestea pot apărea la 2-14 zile după expunere.',
    image: ThirdPicture,
  },
  {
    isDouble: true,
    title1: 'Prezentați simptome ale COVID-19? ',
    title2: 'Cum vă protejați?',
    text1: [
      'Contactați medicul dumneavoastră de familie!',
      'Rămâneți izolat la domiciliu și să sunați la 112 sau TELVERDE 0800 800 358.',
      'Unitățile avizate pentru tratarea cazurilor de coronavirus sunt spitalele de boli infecțioase din orașul în care vă aflați',
      'Pentru a preveni transmiterea infecţiei persoanelor din jur, trebuie să vă acoperiți nasul şi gura cu o mască de protecţie',
    ],
    text2: [
      'Spălați-vă mâinile cu apă și săpun și dezinfectați-le cu dezinfectant pe bază de alcool',
      'Evitați contactul cu persoane care sunt suspecte de infecții respiratorii acute',
      'Nu vă atingeți ochii, nasul si gura cu mâinile',
      'Acoperiți-vă gura și nasul daca stranutați sau tușiți',
      'Curățați toate suprafețele cu dezinfectanți pe bază de clor sau alcool',
      'Utilizați masca pentru protecția dumneavoastră',
    ],
    image: FourthPicture,
  },
];

const Info = props => {
  const { classes } = props;
  return (
    <>
      {data.map((item, index) =>
        item.isDouble ? (
          <DoubleTextItem
            title1={item.title1}
            text1={item.text1}
            title2={item.title2}
            text2={item.text2}
            image={FourthPicture}
          />
        ) : (
          <Item title={item.title} text={item.text} image={item.image} isReversed={index % 2 !== 0} />
        ),
      )}
    </>
  );
};

Info.propTypes = {};

export default withStyles(theme => styles(theme))(Info);
