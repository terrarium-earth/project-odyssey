---
sidebar_position: 1
displayed_sidebar: cadmus
---

# Admin claim commands

```text
/cadmus admin create [id]
```
Creates an admin claim team
- `id` the identifier for the admin claim. This is going to be the owner
  of the claims made with `/cadmus admin claim`

```text
/cadmus admin remove [id]
```
Deletes an admin claim team
- `id` the identifier for the admin claim. This is going to be the
  team that gets deleted.

```text
/cadmus admin claim [id] [position] [chunkload]
```
Claims a chunk of land as an admin claim
- `id` the identifier for the admin claim that the claimed land is going
  to be added to.
- `position` the position that the chunk will be claimed from.
- `chunkload` a boolean value that determines if the chunk is loaded.

```text
/cadmus admin unclaim [id] [position]
```
Unclaims a chunk of land from an admin claim
- `id` the identifier for the admin claim that the claimed land is
  going to be unclaimed from.
- `position` the position that the chunk will be unclaimed from.
