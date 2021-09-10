import kit from '../assets/kit2.png';
import type150 from '../assets/mel-150.png';
import type350 from '../assets/mel-350.png';
import type480 from '../assets/mel-480.png';
import type780 from '../assets/mel-780.png';
import propolis from '../assets/propolis.png';
import { IMel, IProduct } from './interfaces';

export const hues = {
    laranjeira: '#dbc884',
    silvestre: '#ddb846',
    juriti: '#c78f16',
    uruca: '#993d0c',
    eucalipto: '#993d0c',
    jataí: '#2d090b',
};

export const products: IProduct[] = [
    {
        title: 'kit degustação',
        description: 'Nosso carro chefe! 5 potinhos com meles da estação. Ideal para presentear.',
        type: 'kit',
        price: 4000,
        img: kit,
        hasOptions: false,
    },
    {
        title: 'pote de 150g',
        description: 'O caçula. Bom pra comer direto do pote!',
        type: '150',
        price: 1800,
        img: type150,
        hasOptions: true,
    },
    {
        title: 'pote de 350g',
        description: 'Nosso peso médio. Sabor na medida certa',
        type: '350',
        price: 2800,
        img: type350,
        hasOptions: true,
    },
    {
        title: 'pote de 480g',
        description: 'Pote grande. Pode comer todo dia que ele em meno dois meses ele não acaba!',
        type: '480',
        price: 3500,
        img: type480,
        hasOptions: true,
    },
    {
        title: 'pote de 780g',
        description: 'Urso size! Leve para casa um balde de mel!',
        type: '780',
        price: 4800,
        img: type780,
        hasOptions: true,
    },
    {
        title: 'propolis',
        description: 'Própolis medicinal da serra do mar.',
        type: 'propolis',
        price: 2500,
        img: propolis,
        hasOptions: false,
    },
];

export const meles: IMel[] = [
    {
        name: 'laranjeira',
        isAvailable: true,
        description: 'claro, translúcido e prefumado',
        hue: hues.laranjeira,
    },
    {
        name: 'silvestre',
        isAvailable: true,
        description: 'claro e floral',
        hue: hues.silvestre,
    },
    {
        name: 'uruçã',
        isAvailable: true,
        description: 'escuro e encorpado',
        hue: hues.uruca,
    },
    {
        name: 'jataí',
        isAvailable: true,
        description: 'encorpado com sabor marcante',
        hue: hues.jataí,
    },
    {
        name: 'juriti',
        isAvailable: false,
        description: 'sabor delicado',
        hue: hues.juriti,
    },
    {
        name: 'eucalípto',
        isAvailable: true,
        description: 'fino e translúcido',
        hue: hues.eucalipto,
    },
];
