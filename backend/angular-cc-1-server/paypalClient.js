const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

function environment() {
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "";
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || "";
  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
  // For live: return new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret);
}

function client() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

module.exports = { client };