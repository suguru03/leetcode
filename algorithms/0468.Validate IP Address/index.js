'use strict';

module.exports = { validIPAddress };

/**
 * @param {string} ip
 * @return {string}
 */
function validIPAddress(ip) {
  if (isV4(ip)) {
    return 'IPv4';
  }
  if (isV6(ip)) {
    return 'IPv6';
  }
  return 'Neither';
}

function isV4(ip) {
  const addresses = ip.split('.');
  if (addresses.length !== 4) {
    return false;
  }
  const limit = Math.pow(2, 8);
  return addresses.every(text => {
    const address = Number(text);
    return address >= 0 && address < limit && /^\d+$/.test(text) && text.length === (Math.log10(address) | 0) + 1;
  });
}

function isV6(ip) {
  const addresses = ip.split(':');
  if (addresses.length !== 8) {
    return false;
  }
  const limit = Math.pow(2, 16);
  return addresses.every((text, i) => {
    const address = parseInt(text, 16);
    return address >= 0 && address < limit && /^[\da-f]+$/i.test(text) && (i === 0 || text.length <= 4);
  });
}
