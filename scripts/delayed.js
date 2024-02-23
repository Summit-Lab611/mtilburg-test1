// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

// AGS
//await loadScript('https://assets.adobedtm.com/6a74768abd57/ae0061acbe82/launch-3ee9ff2398b5-development.min.js', 'head', { async: true });

// Summit
await loadScript('https://assets.adobedtm.com/78af697641c3/8c86e24f92f7/launch-159c1d47c2de.min.js', { async: true });

/*
// Load Launch properties (adobedtm)
if (window.location.host.startsWith('localhost')) {
  await loadScript('https://assets.adobedtm.com/6a74768abd57/ebbe34171c73/launch-d6a3331d6f80-development.min.js', 'head', { async: true });
} else if (window.location.host.endsWith('.page')) {
  await loadScript('https://assets.adobedtm.com/6a74768abd57/ebbe34171c73/launch-c00a655544fd-staging.min.js', 'head', { async: true });
} else {
  await loadScript('https://assets.adobedtm.com/6a74768abd57/ebbe34171c73/launch-9476d77cdb4e.min.js', 'head', { async: true });
}*/