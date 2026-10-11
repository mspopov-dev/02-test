# Regex Validators with Unit Tests

Input validation functions based on regular expressions, covered by unit tests with Jest. Assignment from the Tel-Ran Full Stack Developer program (topic: unit testing).

## Tech stack

- JavaScript (ES modules)
- Jest 30

## Validators

All functions are in `service/validate.js` and return `true` or `false`.

| Function | Accepts | Valid example |
|---|---|---|
| `validateCard` | 8 to 16 digits | `1234567887654321` |
| `validateDate1` | date `DD.MM.YYYY` | `25.12.2018` |
| `validateDate2` | date `YYYY-MM-DD` | `2018-12-25` |
| `validatePhoneNumber` | phone `+XX(XX)XXXX-XXXX` | `+99(01)1234-5678` |
| `validatePositiveNumber` | integer from 1 to 255 | `255` |
| `validateEcmascriptText` | `ECMAScript1` to `ECMAScript16`, case-insensitive | `ECMAScript16` |
| `validateDomainZone` | domain ending in `com`, `org` or `il` | `example.com` |

The date validators check the format and value ranges (day 01–31, month 01–12). They do not check real calendar dates, so `2018-02-29` is accepted.

## Tests

`tests/validate.test.js` contains 10 tests for the first five validators: valid input and invalid input for each.

## Getting started

```bash
git clone https://github.com/mspopov-dev/02-test.git
cd 02-test
npm install
npm test
```

Jest runs with `--experimental-vm-modules` because the project uses ES modules.

## Author

Mikhail Popov — [GitHub](https://github.com/mspopov-dev) · [LinkedIn](https://www.linkedin.com/in/mspopov-dev)
