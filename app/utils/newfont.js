import {Inter} from 'next/font/google';

const inter_init = Inter({ 
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-inter'
});

//export const danfo_serif = danfo_serif_init.variable
export const inter = inter_init.variable