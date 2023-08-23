---
displayed_sidebar: cadmus
---

# Game Rules

:::note
Cadmus game rules will **not** be applied if Prometheus is installed. Use Prometheus's permission system instead.
:::

Cadmus features a set of game rules for managing claim protections and claim limits. 
This allows you to turn off certain protections across all chunks while still keeping other protections enabled.
By default, all protections are enabled and the default claim limit is 1089 and 64 for chunk loaded claims.

## Commands

### Max Claimed Chunks

```text
/gamerule maxClaimedChunks <value>
```

Sets the maximum number of chunks a player can claim.

### Max Chunk Loaded Chunks

```text
/gamerule maxChunkLoaded <value>
```

Sets the maximum number of chunk loaded claims a player can have.

### Claimed Block Breaking

```text
/gamerule doClaimedBlockBreaking <value>
```

Sets whether players can break blocks in claimed chunks.

### Claimed Block Placing

```text
/gamerule doClaimedBlockPlacing <value>
```

Sets whether players can place blocks in claimed chunks.

### Claimed Block Explosions

```text
/gamerule doClaimedBlockExplosions <value>
```

Sets whether explosions can destroy blocks and hurt entities in claimed chunks.

### Claimed Block Interactions

```text
/gamerule doClaimedBlockInteractions <value>
```

Sets whether players can interact with blocks in claimed chunks.

### Claimed Entity Interactions

```text
/gamerule doClaimedEntityInteractions <value>
```

Sets whether players can interact with entities in claimed chunks.

### Claimed Entity Damage

```text
/gamerule doClaimedDamageEntities <value>
```

Sets whether players can damage entities in claimed chunks.

### Claimed Mob Griefing

```text
/gamerule claimedMobGriefing <value>
```

Sets whether mobs can grief in claimed chunks.

### Claimed Item Pickup

```text
/gamerule canPickupClaimedItems <value>
```

Sets whether players can pick up items in claimed chunks.

### Combined Claim Limit

```text
/gamerule doCombinedClaimLimit <value>
```

A special game rule that is only available when Prometheus is installed.
With Prometheus, the max claim limit is an option in the player's role. 
If this is disabled, the max claim limit for a team will be whatever player has the highest max claim limit in the team.
If this is enabled, the max claim limit for a team will be the sum of all max claim limits of all players in the team.
This is disabled by default.