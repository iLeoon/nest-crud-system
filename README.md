<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>




## Table of Content

  - [1. Description](#description)
  - [2. Libraries & Usages](#libraries-usages)
  - [3. Running the app](#running)
 


<a name="description"></a>
## Description
A [NestJS](https://nestjs.com/) CRUD system that contains authenication - authorization - logging with the implementation of middelwares - interceptors - filters  and more..

<a name="libraries-usages"></a>
## Libraries & Usages

| libraries | usage
| :---:   | :---: |
 [pg](https://www.npmjs.com/package/pg) | PostgresSQL Database for CRUD Operations|
| [Mongodb](https://www.npmjs.com/package/mongodb) | MongoDB for persisting user's data and sessions|
| [TypeORM](https://typeorm.io/) | The ORM used for the project|
| [passport](https://www.passportjs.org/) | For Authentication |
| [passport-local](https://www.passportjs.org/packages/passport-local/) | The passport's strategy |
|[express-sessions](https://www.npmjs.com/package/express-session)  | For handling the sessions |
|[connect-mongo](https://www.npmjs.com/package/connect-mongo) | A session's store library for MongoDB |
| [winston](https://www.npmjs.com/package/winston) | For Logging Exceptions - Requests - Responses |
| [bycrypt](https://www.npmjs.com/package/bcrypt) | For Hashing user's passwords |


<a name="running"></a>
## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

