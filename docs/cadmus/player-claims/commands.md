---
displayed_sidebar: cadmus
---

# Claim Commands

## Claim Command

```text
/claim <pos> <chunkload>
```
Claims a chunk of land
- `pos`: The chunk position to claim. This parameter is **optional**.
  If not specified, it will claim the player's current position.
- `chunkload`: Whether the claim is chunk loaded or not. This parameter is **optional**.
  If not specified, the chunk will not be loaded.

## Claim Info Command

```text
/claim info <pos>
```
Provides information about a claim at the specified position. This information includes:
- If the chunk is unclaimed, a message indicating that the chunk is unclaimed.
- If the chunk is claimed, the name of the team or player who claimed the chunk, the type of claim (team, player, or admin), and whether the chunk is chunk loaded or not.
- The location of the chunk (its x and z coordinates).
- `pos`: The position of the chunk to get information from. This parameter is **optional**.
  If not specified, the action will be performed at the location the player
  executed the command.

## Unclaim Command

```text
/unclaim <pos>
```
Unclaims a chunk of land
- `pos`: The chunk position to unclaim. This parameter is **optional**.
  If not specified, it will unclaim the player's current position.
