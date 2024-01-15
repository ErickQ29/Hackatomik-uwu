import { defineConfig } from 'astro/config';

// https://astro.build/config

export default {
    plugins: [
      [
        'astro-plugin-postcss',
        {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      ],
    ],
  };
  