---
displayed_sidebar: argonauts
---

# Settings Commands

## Settings Command

```text
/guild settings <setting> <value>
```

A game rule-esque command interface for managing guild settings. Unlike parties, guilds currently do not have a GUI for managing settings and must be done through commands.
You can check the current value by running the command without specifying a value.
The settings screen has the following options:
- `allowFakePlayers`: Allows [fake players](/docs/argonauts/guilds/commands/fake-players) to join the guild.
- `color`: Sets the color of the guild. If Cadmus is installed, any chunks claimed by the guild will be this color. 
Entering the guild's chunks will also display the guild's name in this color.
- `displayName`: Sets the display name of the guild.
- `hq`: Sets the guild's headquarters to your current location. Running the `/guild headquarters` or `/guild hq` command will teleport you to this location.
- `motd`: Sets the guild's message of the day. This message will be displayed every time a guild member joins the server.
As command messages cannot contain section symbols (`§`), typing two ampersands (`&&`) will convert to a section symbol, allowing you to have custom [chat formatting](https://minecraft.tools/en/json_text.php), such as color.
Additionally on the Fabric mod loader, Argonauts supports [Placeholder API](https://modrinth.com/mod/placeholder-api), allowing you to use placeholders within the message.

In order to change a setting, you must have the `Manage Settings` permission.

