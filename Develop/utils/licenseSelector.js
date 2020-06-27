const licenseSelector = readmeData => {
    switch (readmeData.license) {
        case "MIT License":
            return "${[MIT License](https://choosealicense.com/licenses/mit/)}";
        case "GNU AGPLv3":
            return "${[GNU AGPLv3 License](https://choosealicense.com/licenses/agpl-3.0/}";
        case "GNU GPLv3":
            return "${[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)}";
        case "GNU LGPLv3":
            return "${[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)}";
        case "Mozilla Public License 2.0":
            return "${[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)}";
        case "Apache License 2.0":
            return "${[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)}";
        case "Boost Software License 1.0":
            return "${[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)}";
        case "The Unlicense":
            return "${[The Unlicense](https://choosealicense.com/licenses/unlicense/)}";
    }
};
//["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]

module.exports = licenseSelector;