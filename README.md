# sg-haze
[![Build Status](https://travis-ci.com/ZacBytes/sg-haze.svg?branch=master)](https://travis-ci.com/ZacBytes/sg-haze)

Parser for NEA haze api

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install sg-haze.

```bash
npm install sg-haze
```

## Usage

```node_js
const sghaze = require('sg-haze');

sghaze.getPSI(function(err, PSIData){
   console.log(PSIData) //logs entire PSIData object

   console.log(PSIData.NationalPSI) //logs National PSI (log the PSIData object to see what the object contains)
});

sghaze.getPM25(function(err, PM25Data){
   console.log(PM25Data) //logs entire PM25Data object

   console.log(PM25Data.NorthPM25) //logs National PSI (log the PM25Data object to see what the object contains)
   console.log(PM25Data.NorthHealthStatus) //logs North PM25 health status/level
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to test before making pull requests.

## License
[MIT](https://choosealicense.com/licenses/mit/)
