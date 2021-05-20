import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

(async () => {
  const debugExtension = new DebugExtension();
  await rc.installExtension(debugExtension);
  await rc.authorize({
    username: process.env.RINGCENTRAL_USERNAME!,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD!,
  });
  console.log(JSON.stringify(rc.token, null, 2));
})();
