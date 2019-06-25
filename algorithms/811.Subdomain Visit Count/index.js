'use strict';

module.exports = { subdomainVisits };

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  const map = new Map();
  for (const cpdomain of cpdomains) {
    let [c, domain] = cpdomain.split(' ');
    const count = +c;
    while (domain) {
      const cur = map.get(domain) || 0;
      map.set(domain, cur + count);
      const index = domain.indexOf('.');
      if (index < 0) {
        break;
      }
      domain = domain.slice(index + 1);
    }
  }
  return Array.from(map).map(([domain, count]) => `${count} ${domain}`);
}
