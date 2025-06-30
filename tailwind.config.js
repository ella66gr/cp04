// tailwind.config.js (CP04)

import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class', // Enable class-based dark mode
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
    ],
    plugins: [
        // Note: In Tailwind v4, these are handled differently
        // We'll include them for compatibility but they may not be needed
        require('flowbite/plugin'),
      	require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f2fef5',
                    100: '#e6fce9',
                    200: '#c3f7cd',
                    300: '#99efae',
                    400: '#66e18a',
                    500: '#3dc66a',
                    600: '#2ea653',
                    700: '#238346',
                    800: '#1c653a',
                    900: '#144d2f'
                },
                secondary: {
                    50: '#fffdf5',
                    100: '#fff8e6',
                    200: '#feefc3',
                    300: '#fde494',
                    400: '#fdd666',
                    500: '#fbbf24',
                    600: '#d99b12',
                    700: '#b47a0a',
                    800: '#8f5f09',
                    900: '#734a07'
                }
            },
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
                display: ['Inter', 'system-ui', 'sans-serif']
            }
        }
    }
};

export default config;