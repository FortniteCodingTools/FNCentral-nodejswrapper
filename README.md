
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# Fortnite Central NODEJS Wrapper
[![npm version](https://flat.badgen.net/npm/v/fncentral-nodejswrapper)](https://www.npmjs.com/package/fncentral-nodejswrapper)

NodeJS wrapper for Fortnite Central API to assist you with your requests

#### Information
This API is recent, there may be bugs. Support can be offered on their [Discord Server]("https://discord.gg/EzcFzanzPs").

```js
const FNCentral = require("fncentral-nodejswrapper");

```

## Example API Calls

```js
// Get the current AES keys
const aes = await FNCentral.getAes();

// Get the current mappings
const mappings = await FNCentral.getMappings()

```


[contributors-url]: https://github.com/FortniteCodingTools/FNCentral-nodejswrapper/graphs/contributors
[contributors-shield]: https://img.shields.io/github/contributors/FortniteCodingTools/FNCentral-nodejswrapper.svg?style=plastic

[forks-url]: https://github.com/FortniteCodingTools/FNCentral-nodejswrapper/network/members
[forks-shield]: https://img.shields.io/github/forks/FortniteCodingTools/FNCentral-nodejswrapper.svg?style=plastic

[stars-url]: https://github.com/FortniteCodingTools/FNCentral-nodejswrapper/stargazers
[stars-shield]: https://img.shields.io/github/stars/FortniteCodingTools/FNCentral-nodejswrapper.svg?style=plastic

[issues-url]: https://github.com/FortniteCodingTools/FNCentral-nodejswrapper/issues
[issues-shield]: https://img.shields.io/github/issues/FortniteCodingTools/FNCentral-nodejswrapper.svg?style=plastic

[license-url]: https://github.com/FortniteCodingTools/FNCentral-nodejswrapper/blob/master/LICENSE.txt
[license-shield]: https://img.shields.io/github/license/FortniteCodingTools/FNCentral-nodejswrapper.svg?style=plastic