# PartnerStack Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/partnerstack)](https://www.npmjs.com/package/@fern-api/partnerstack)

The PartnerStack Node.js library provides access to the PartnerStack API from JavaScript/TypeScript.

## Documentation

API documentation is available at <https://docs.partnerstack.com/reference>.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern?file=app.ts&view=editor)

```typescript
import { PartnerStackApi, PartnerStackApiClient } from '@fern-api/partnerstack';

const credentials = { username: 'my-username', password: 'my-password' };
const client = new PartnerStackApiClient({
  credentials: () => credentials,
});

const response = await client.deals.create(
  PartnerStackApi.CreateDealRequestBody.partnerKey({
    partnerKey: 'my-partner-key',
    accountName: 'Account0123',
    amount: 150000,
    closeDate: '2023-02-25',
    contactFirstName: 'Danny',
    contactLastName: 'Fern'
  })
);

console.log('Received response from PartnerStack!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-partnerstack/partnerstack-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
