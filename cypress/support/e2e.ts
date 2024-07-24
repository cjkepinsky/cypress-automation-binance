
// TODO application generates console errors:
//   > ResizeObserver loop completed with undelivered notifications.

Cypress.on('uncaught:exception', (err, runnable) =>  false);
