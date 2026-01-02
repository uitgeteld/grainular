const addGrain = require('./grain');
const saturate = require('./saturate');
const adjustBrightness = require('./brightness');
const toBlackWhite = require('./blackwhite');

module.exports = {
  addGrain,
  saturate,
  adjustBrightness,
  toBlackWhite
};

if (typeof window !== 'undefined') {
  window.Grainular = module.exports;
}
