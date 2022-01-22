<h1>Translate Bot</h1>

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Run](#run)
* [Commands](#commands)

## General info
<h4>This is just a simple discord bot, which uses the Google Translate API to translate.</h4>

## Technologies
Project is created with:
* discord.js: 13.6.0
* @vitalets/google-translate-api: 7.0.0
* configstore: 6.0.0
* got: 12.0.1
* iso-639-1: 2.1.11
* nodemon: 2.0.15

## Setup
```
$ cd ../translate-bot
$ npm i discord.js
$ npm i @vitalets/google-translate-api
$ npm i configstore
$ npm i got
$ npm i iso-639-1
$ npm i nodemon
```
Then edit the `config.js` file which is in the `./src` directory.

* token: discord bot token => https://discord.com/developers/docs/game-sdk/applications
* prefix: bot prefix
* lang: `translate` command will translate to this language (**ONLY LANGUAGE CODE** e.g. `en,fr,es,pl`)

## Run
```
$ npm run dev
```

## Commands
<h3>For instance I'll use ? as a prefix.</h3>

`?t/translate`
</br>_Translates to the language set in the config file_
</br>**Usage:** ?t/translate <text>
</br>**Example:** ?t hello world

`?ta/translateAdvanced`
</br>_Translates to all languages you wanted (unlimited amount)_
</br>**Usage:** ?ta <languages> <text>
</br>**Example:** ?ta es,fr/spanish,french hello world (**NO SPACES BETWEEN COMMAS**)

`?langs`
</br>_Sends a link to supported languages list_
</br>**Usage:** ?langs

`?help`
</br>_Sends a full list of commands_
</br>**Usage:** ?help

`?about`
</br>_Sends information about the author_
</br>**Usage:** ?about


<h2>Thank you all for using this bot :)</h2>
If you like it please leave a star and fork it.
</br>If you run across any issue please create a new issue.
