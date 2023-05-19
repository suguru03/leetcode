'use strict';

module.exports = { numUniqueEmails };

/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const set = new Set();
  for (const email of emails) {
    const [name, domain] = email.split('@');
    set.add(`${name.replace(/\./g, '').replace(/\+.+/, '')}@${domain}`);
  }
  return set.size;
}
