
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 744, hash: '08f9f227ccdff540b3caf68672247f125726c0008a36fa949d14fff5a702cada', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '16c1dc23b87ed15f0b4985010cd4368797e202e17761da853ee2772cb04aa81d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9127, hash: '684cfe8973661bfb223a8042c71af58e6050bd12cf8f696b623b9bd591535deb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5RSNP7LJ.css': {size: 182, hash: '9rQXzpsX4H0', text: () => import('./assets-chunks/styles-5RSNP7LJ_css.mjs').then(m => m.default)}
  },
};
