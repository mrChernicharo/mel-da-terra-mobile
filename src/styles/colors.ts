export const AppColors = (colorScheme: string) => ({
	primary: '#eecd3e',
	accent: '#de12ff',
	bg: colorScheme === 'dark' ? '#000' : '#fff',
	bg2: colorScheme === 'dark' ? '#232323' : '#eee',
	text: colorScheme === 'dark' ? '#fff' : '#000',
	bgText: colorScheme === 'dark' ? '#555' : '#aaa',
	green: '#01fe56',
});
