const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      // Got this functioning whitelist from here:
      // https://github.com/Dan1ve/Sveltekit-Typescript-TailwindCSS-Jit/blob/main/tailwind.config.cjs
      // Without this, the CSS classes used in *.svelte components don't get picked up and
      // are not included in the computed TailwindCSS output. Meaning: no CSS!
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.warmGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
