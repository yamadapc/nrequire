nrequire
========
[![NPM](https://img.shields.io/npm/dm/nrequire.svg)](http://npmjs.com/nrequire)
[![Build Status](https://travis-ci.org/yamadapc/nrequire.svg)](https://travis-ci.org/yamadapc/nrequire)
- - -
Automatic `require`. Installs dependencies from git and NPM without NPM.

![demo](/demo.gif)

## Usage
```javascript
var nrequire = require('nrequire');
// Runs `npm install written-number` and returns the installed module:
nrequire('written-number');
// You can also install from git
nrequire('ssh+git@github.com:yamadapc/written-number');
```

## Installing
```bash
npm install nrequire
```

## License
This code is licensed under the MIT license for Pedro Tacla Yamada. For more
information please refer to the [LICENSE](/LICENSE) file.

## Donations
Would you like to buy me a beer? Send bitcoin to 3JjxJydvoJjTrhLL86LGMc8cNB16pTAF3y
