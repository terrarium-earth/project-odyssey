---
displayed_sidebar: argonauts
---

# Member Commands

## Members Command

```text
/party member list
```

Opens a screen for managing party members. This screen shows the following information:
- Their member status (accepted, or invited).
- Their role.
- Their permissions. Party permissions include:
  - `Manage Members`: Allows the member to invite, remove members, and add members to the ignore list.
  - `Manage Member Role`: Allows the member to change the role of other members.
  - `Manage Member Permissions`: Allows the member to change the permissions of other members.
  - `Manage Settings`: Allows the member to change the party's settings.
  - `Teleport Members`: Allows the member to use the `warp` and `tp` commands.
- Cadmus permissions. If Cadmus is installed and the party leader is also part of a guild that has `Temporary Guild Permissions` enabled, the following Cadmus-specific permissions are also displayed:
  - `Break Blocks`: Allows party members to break blocks in the guild's claims.
  - `Place Blocks`: Allows party members to place blocks in the guild's claims.
  - `Explode Blocks`: Allows party members to explode blocks in the guild's claims.
  - `Interact With Blocks`: Allows party members to interact with blocks in the guild's claims.
  - `Interact With Entities`: Aallows party members to interact with entities in the guild's claims.
  - `Damage Entities`: Allows party members to damage entities in the guild's claims.
See [Cadmus Integration](/docs/argonauts/guilds/cadmus) for more information.
- An action button to remove the member from the party.

## Member Command

```text
/party member
```

Opens a screen for managing personal party settings. Member permissions include:
- `Passive Teleport`: If disabled, prevents other party members from teleporting to you.

A leave party action is also present in this menu.

## Invite Command

```text
/party invite <player>
```

Invites the player to the party. The person being invited can then either join by using the `/party join` command, or accepting the invite message. Requires the `Manage Members` permission.
- `player`: The player to invite to the party.

## Remove Command

```text
/party remove <player>
```

Kicks the player from the party. Requires the `Manage Members` permission.
- `player`: The player to kick from the party.