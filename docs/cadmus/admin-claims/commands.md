---
displayed_sidebar: cadmus
---

# Admin Claim Commands

## Create Command

```text
/cadmus adminclaims create <id>
```
Creates an admin claim group
- `id` the identifier for the admin claim. this is referenced when
  adding and removing chunks from the admin claim. This also must be
  unique from other admin claims.

## Remove Command

```text
/cadmus adminclaims remove <id>
```
Deletes an admin claim group and its flags
- `id` the identifier for the admin claim.

## Claim Command

```text
/cadmus adminclaims claim <id> <pos> <chunkload>
```
Claims a chunk of land as an admin claim
- `id` the identifier for the admin claim.
- `pos` the chunk position to claim. This parameter is **optional**.
  If not specified, it will claim the player's current position.
- `chunkload` whether the claim is chunk loaded or not. This parameter is **optional**.
  If not specified, the chunk will not be loaded.

## Unclaim Command

```text
/cadmus adminclaims unclaim <id> <pos>
```
Unclaims a chunk of land as an admin claim
- `id` the identifier for the admin claim.
- `pos` the chunk position to unclaim. This parameter is **optional**.
  If not specified, it will unclaim the player's current position.
