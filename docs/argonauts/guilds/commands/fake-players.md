---
displayed_sidebar: argonauts
---

# Fake Player Commands

Fake players are entities in the game that simulate player actions without actual players controlling them.
With Cadmus installed, adding a fake player to this list will bypass claim protections for that fake player.
This allows them to perform their tasks without being blocked by claim protections.

## Add

```text
/guild fakeplayers add <uuid>
```

Adds a fake player to the list of fake players. Requires the `Manage Members` permission.
- `uuid`: The UUID of the fake player to add.

## Remove

```text
/guild fakeplayers remove <uuid>
```

Removes a fake player from the list of fake players. Requires the `Manage Members` permission.
- `uuid`: The UUID of the fake player to remove.
