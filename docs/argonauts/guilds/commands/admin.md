---
displayed_sidebar: argonauts
---

# Admin Commands

Argonauts has a few admin commands for managing guilds.

## Guilds Command
```text
/guilds
```
Displays all guilds, which includes the display name, guild UUID, owner, and member.

## Disband Command

```text
/guild admin disband <guild>
```

Forcefully deletes a guild.
- `guild`: The UUID of the guild to disband. Use `/guilds` to see a list of guilds mapped to their IDs.

## Disband All Command

```text
/guild admin disbandall
```

Completely removes **all** guilds. Use with caution.

## Join Command

```text
/guild admin join <guild>
```
Forcefully joins a guild, without needing to be invited.
- `guild`: The UUID of the guild to join. Use `/guilds` to see a list of guilds mapped to their IDs.
