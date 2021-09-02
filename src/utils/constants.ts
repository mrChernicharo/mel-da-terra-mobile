import kit from '../assets/kit.png';
import pote150 from '../assets/mel-150.png';
import pote350 from '../assets/mel-350.png';
import pote480 from '../assets/mel-480.png';
import pote780 from '../assets/mel-780.png';
import propolis from '../assets/propolis.png';

export type IPote = 'kit' | '150' | '350' | '480' | '780' | 'propolis';

export interface IProduct {
	name: string;
	pote: IPote;
	price: number;
	img: string;
}
export interface IMel {
	name: string;
	available: boolean;
	description: string;
	hue: string;
}

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
		name: 'kit degustação',
		pote: 'kit',
		price: 4000,
		img: kit,
	},
	{
		name: 'pote de 150g',
		pote: '150',
		price: 1800,
		img: pote150,
	},
	{
		name: 'pote de 350g',
		pote: '350',
		price: 2800,
		img: pote350,
	},
	{
		name: 'pote de 480g',
		pote: '480',
		price: 3500,
		img: pote480,
	},
	{
		name: 'pote de 780g',
		pote: '780',
		price: 4800,
		img: pote780,
	},
	{
		name: 'propolis',
		pote: 'propolis',
		price: 4800,
		img: propolis,
	},
];

export const meles = [
	{
		name: 'laranjeira',
		available: true,
		description: 'claro e perfumado',
		hue: hues.laranjeira,
	},
	{
		name: 'silvestre',
		available: true,
		description: 'claro e floral',
		hue: hues.laranjeira,
	},
	{
		name: 'juriti',
		available: false,
		description: 'sabor delicado',
		hue: hues.laranjeira,
	},
	{
		name: 'uruçã',
		available: true,
		description: 'escuro e encorpado',
		hue: hues.laranjeira,
	},
	{
		name: 'eucalípto',
		available: true,
		description: 'fino e translúcido',
		hue: hues.laranjeira,
	},
	{
		name: 'jataí',
		available: true,
		description: 'encorpado e de sabor marcante',
		hue: hues.laranjeira,
	},
];
