'use strict';

module.exports = { numUniqueEmails };

/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const set = new Set();
  for (const email of emails) {
    const [, local, domain] = email.match(/(.*)@(.*)/);
    const user = local.replace(/\./g, '').replace(/\+.*/, '');
    const key = `${user}@${domain}`;
    set.add(key);
  }
  return set.size;
}
