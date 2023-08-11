---
sidebar_position: 3
---

# Claim commands

## Claim Command

```text
/claim [pos] [chunkload]
```
Claims a chunk of land
- `pos` the position that the chunk will be claimed from. This parameter is **optional**.
  If not specified, the action will be performed at the location the player
  executed the command.
- `chunkload` a boolean value that determines if the chunk is loaded. This parameter is **optional**.
  If not specified, the chunk will not be loaded.

## Claim Info Command

```text
/claim info [pos]
```
Provides information about a claim at the specified position. This information includes:
- If the chunk is unclaimed, a message indicating that the chunk is unclaimed.
- If the chunk is claimed, the name of the team or player who claimed the chunk, the type of claim (team, player, or admin), and whether the chunk is just claimed or also chunk-loaded.
- The location of the chunk (its x and z coordinates).
- `pos` the position of the chunk to get information from. This parameter is **optional**.
  If not specified, the action will be performed at the location the player
  executed the command.

## Unclaim Command

```text
/unclaim [pos]
```
Unclaims a chunk of land
- `pos` the position that the chunk will be unclaimed from. This parameter is **optional**.
  If not specified, the action will be performed at the location the player
  executed the command.
