
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
    'index.csr.html': {size: 835, hash: '7d29240924b98797f22533f0c687fa361ec6fbcdaa8ba6c3d3f0fb55676a4eb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: '9dae703ed088cdb47e1870b9111369f8712490fb7fbf14c70575c12d0028b4be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12707, hash: 'c17b86b58633f87ecff9985c8d236a55d362f2dc9d5d36e9622d9f1fdc74587e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WKMLE6QT.css': {size: 191, hash: 'uaj9XU8fm0k', text: () => import('./assets-chunks/styles-WKMLE6QT_css.mjs').then(m => m.default)}
  },
};
