<h1>Translate Bot</h1>
<h3>This is just a simple discord bot, which uses the Google Translate API to translate.</h3>

If you have just cloned this project, edit the `config.js` file which is in the `./src` directory.
<h2>First step</h2>
<ul>
  <li> token: this is your discord bot token, you can find it here : https://discord.com/developers/docs/game-sdk/applications</li>
  <li> prefix: this is the bot prefix, I presonally like ?</li>
  <li> lang: to this language will be translated everything in translate command (only language code will work, e.g. en,fr,es,pl !)</li>
</ul>

<h2>Commands</h2>
<h3>For instance I'll use ? as a prefix.</h3>
<ul>
  <li>
    Usage: ?t/ ?translate <text>
    </br>Example: $translate hello everyone
    </br>Translates to the language set in the config file
  </li>
  <li>
    Usage: ?ta/ ?translateAdvanced <languages> <text>
    </br>Example: ?ta es,fr/spanish,french hello everyone | Important: You can't do spaces between language names
    </br>Translates to all languages you wanted (unlimited amount)
  </li>
  <li>
    Usage: ?langs
    </br>Sends a link to supported languages
  </li>
  <li>
    Usage: ?help
    </br>Sends a full list of commands
  </li>
  <li>
    Usage: ?about
    </br>Sends information about the author
  </li>
</ul>

<h2>Thank you all for using this bot :)</h2>
If you like it please leave a star and fork it.
</br>If you run across any issue please create a new issue.
