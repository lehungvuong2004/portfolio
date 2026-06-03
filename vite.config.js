import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Vite plugin: Iconify Offline Bundle
 *
 * Generates a virtual module at build/dev time that contains ONLY the specific
 * icon SVG data needed. This eliminates all runtime API calls to api.iconify.design
 * while keeping the bundle tiny (only the icons actually used).
 *
 * Icons are extracted from @iconify-json/* packages at build time.
 */
function iconifyOfflinePlugin(iconList) {
  const VIRTUAL_ID = 'virtual:iconify-offline';
  const RESOLVED_ID = '\0' + VIRTUAL_ID;

  return {
    name: 'vite-plugin-iconify-offline',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) return;

      // Group icons by prefix
      const byPrefix = {};
      for (const iconId of iconList) {
        const colonIdx = iconId.indexOf(':');
        const prefix = iconId.slice(0, colonIdx);
        const name = iconId.slice(colonIdx + 1);
        if (!byPrefix[prefix]) byPrefix[prefix] = [];
        byPrefix[prefix].push(name);
      }

      const collections = [];

      for (const [prefix, names] of Object.entries(byPrefix)) {
        try {
          const jsonPath = resolve(
            `node_modules/@iconify-json/${prefix}/icons.json`
          );
          const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));

          const subset = {
            prefix,
            width: data.width || 24,
            height: data.height || 24,
            icons: {},
          };

          for (const name of names) {
            const iconData = data.icons?.[name];
            if (iconData) {
              subset.icons[name] = { body: iconData.body };
            } else {
              console.warn(`[iconify-offline] Icon not found: ${prefix}:${name}`);
            }
          }

          if (Object.keys(subset.icons).length > 0) {
            collections.push(subset);
          }
        } catch {
          console.warn(`[iconify-offline] Package not found: @iconify-json/${prefix}`);
        }
      }

      // Generate minimal JS module
      const lines = [`import { addCollection } from '@iconify/react';`];
      for (const col of collections) {
        lines.push(`addCollection(${JSON.stringify(col)});`);
      }

      return lines.join('\n');
    },
  };
}

// ─── All icons used in the app ─────────────────────────────────────────────
const USED_ICONS = [
  // material-symbols
  'material-symbols:arrow-forward-rounded',
  'material-symbols:arrow-back-rounded',
  'material-symbols:keyboard-arrow-down-rounded',
  'material-symbols:menu',
  'material-symbols:close-rounded',
  'material-symbols:terminal-rounded',
  'material-symbols:database-outline',
  'material-symbols:construction-rounded',
  'material-symbols:fact-check-outline-rounded',
  'material-symbols:dynamic-form-outline-rounded',
  'material-symbols:check-small-rounded',
  'material-symbols:link-rounded',
  'material-symbols:code-rounded',
  'material-symbols:business-center',
  'material-symbols:visibility-rounded',
  'material-symbols:add-rounded',
  'material-symbols:list-alt-outline-rounded',
  'material-symbols:link',
  // mdi
  'mdi:clock-outline',
  'mdi:github',
  'mdi:linkedin',
  'mdi:react',
  'mdi:language-typescript',
  'mdi:tailwind',
  'mdi:bootstrap',
  'mdi:language-javascript',
  'mdi:lighthouse',
  'mdi:language-html5',
  'mdi:material-design',
  'mdi:git',
  // solar
  'solar:code-bold',
  'solar:download-bold',
  // twemoji
  'twemoji:flag-vietnam',
  'twemoji:flag-us-outlying-islands',
  // ri
  'ri:twitter-x-fill',
  // ix
  'ix:light-dark',
  // entypo
  'entypo:light-up',
  // simple-icons
  'simple-icons:bem',
  // tabler
  'tabler:brand-redux',
  // lucide
  'lucide:lightbulb',
  'lucide:shield-check',
  'lucide:users',
  // ic
  'ic:outline-email',
  'ic:outline-phone',
  'ic:baseline-facebook',
  // boxicons
  'boxicons:location',
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    iconifyOfflinePlugin(USED_ICONS),
  ],
  base: '/',
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/gsap')) return 'gsap';
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router-dom/')
          ) return 'react-vendor';
          if (
            id.includes('node_modules/i18next') ||
            id.includes('node_modules/react-i18next')
          ) return 'i18n';
          // @iconify/react renderer + the tiny virtual icon data
          if (
            id.includes('node_modules/@iconify') ||
            id.includes('virtual:iconify-offline')
          ) return 'icons';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: [
      'gsap',
      'gsap/ScrollTrigger',
      'gsap/CustomEase',
      '@iconify/react',
    ],
  },
});
