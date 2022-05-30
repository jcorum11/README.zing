const licenseSelector = readmeData => {
  let license = {}
  switch (readmeData) {
    case `MIT License`:
      license = {
        'name': 'MIT',
        'link': `[MIT License](https://choosealicense.com/licenses/mit/)`,
        'description': 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
      }
      return license
    case `GNU AGPLv3`:
      license = {
        'name': 'GNU_AGPLv3',
        'link': `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`,
        'description': 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.'
      }
      return license
    case `GNU GPLv3`:
      license = {
        'name': 'GNU_GPLv3',
        'link': `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`,
        'description': 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.'
      }
      return license
    case `GNU LGPLv3`:
      license = {
        'name': 'GNU_LGPLv3',
        'link': `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`,
        'description': 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.'
      }
      return license
    case `Mozilla Public License 2.0`:
      license = {
        'name': 'Mozilla',
        'link': `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`,
        'description': 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'
      }
      return license
    case `Apache License 2.0`:
      license = {
        'name': 'Apache',
        'link': `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`,
        'description': 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
      }
      return license
    case `Boost Software License 1.0`:
      license = {
        'name': 'Boost_Software',
        'link': `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`,
        'description': 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
      }
      return license
    case `The Unlicense`:
      license = {
        'name': 'Unlicense',
        'link': `[The Unlicense](https://choosealicense.com/licenses/unlicense/)`,
        'description': 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
      }
      return license
  }
}

module.exports = licenseSelector