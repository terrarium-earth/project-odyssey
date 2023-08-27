---
displayed_sidebar: argonauts
---

# Member Commands

## Members Command

```text
/guilds members
```

Opens a screen for managing guild members. This screen shows the following information:
- Their member status (accepted, or invited).
- Their role.
- Their permissions. Guild permissions include:
  - `Manage Members` allows the member to invite, remove, and edit fake players.
  - `Manage Member Role` allows the member to change the role of other members.
  - `Manage Member Permissions` allows the member to change the permissions of other members.
  - `Manage Settings` allows the member to change the guild's settings.
  - `Teleport Members` does not do anything at the moment as there is no `/tp` command in guilds.
  - `Temporary Guild Permissions` only available when Cadmus is installed. Allow guild members with parties to bypass claim protections. See [Cadmus Integration](/docs/argonauts/guilds/cadmus) for more information.
- An action button to remove the member from the guild.

## Invite Command

```text
/guilds invite <player>
```

Invites a player to the guild. The person being invited can then either join by using the `/guilds join` command, or accepting the invite message. Requires the `Manage Members` permission.
- `player`: The player to invite to the guild.

## Remove Command

```text
/guilds remove <player>
```

Kicks a player from the guild. Requires the `Manage Members` permission.
- `player`: The player to kick from the guild.

