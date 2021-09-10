export const AppColors = (colorScheme: string) => ({
    primary: '#eecd3e',
    accent: '#8521ff',
    bg: colorScheme === 'dark' ? '#232323' : '#fff',
    bg2: colorScheme === 'dark' ? '#232323' : '#eee',
    text: colorScheme === 'dark' ? '#fff' : '#000',
    bgText: colorScheme === 'dark' ? '#555' : '#aaa',
    green: '#01fe56',
    // trans: 'rgba(255,255,255,0.5)',
    trans: 'rgba(0,0,0,0.3)',
});
