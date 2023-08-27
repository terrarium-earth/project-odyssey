---
displayed_sidebar: cadmus
---

# Admin Commands

## List Command

```text
/cadmus admin list
```

Lists all teams and their IDs.

## Claim Command

```text
/cadmus admin claim <id> <pos> <chunkload>
```
Claims a chunk on behalf of another player or team.
- `id`: The identifier for the team. IDs with a `p` prefix are player claims, IDs with a `t` prefix are team claims, and IDs with an `a` prefix are admin claims.
Use `/cadmus admin list` to see a list of teams mapped to their IDs.
- `pos`: The chunk position to claim. This parameter is **optional**.
  If not specified, it will claim the player's current position.
- `chunkload`: Whether the claim is chunk loaded or not. This parameter is **optional**.
  If not specified, the chunk will not be loaded.

## Unclaim Command

```text
/cadmus admin unclaim <id> <pos>
```

Unclaims a chunk on behalf of another player or team.
- `id`: The identifier for the team. This parameter is **optional**.
If not specified, it will unclaim whatever team's claim is at the player's current position.
- `pos`: The chunk position to unclaim. This parameter is **optional**.
  If not specified, it will unclaim the player's current position.

## Clear Command

```text
/cadmus admin clear <id>
```

Removes all claims associated with the given team.
- `id` the identifier for the team. IDs with a `p` prefix are player claims, IDs with a `t` prefix are team claims, and IDs with an `a` prefix are admin claims.
Use `/cadmus admin list` to see a list of teams mapped to their IDs.

## Clear All Command

```text
/cadmus admin clearall
```

Completely removes all claims from the server. This will also remove all admin claims; however, it will not remove admin claim groups and teams themselves.

## Default Settings

```text
/cadmus admin defaultsettings <setting> <value>
```

Modifies the default settings for player claims. (see [Claim Settings](/cadmus/player-claims/settings.md) for more information).
- `setting`: The default setting to modify. Valid settings are:
  - `canBreak`
  - `canDamageEntities`
  - `canExplode`
  - `canInteractWithBlocks`
  - `canInteractWithEntities`
  - `canPlace`
- `value`: The value to set the default setting to. Can be true or false and is false by default, meaning that all claims will be protected by default.
