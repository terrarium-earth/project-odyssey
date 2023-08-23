---
displayed_sidebar: cadmus
---

# Prometheus

Cadmus has built-in support for Prometheus.

## Changes

### Permissions

Cadmus adds six new permissions to Prometheus:
- `cadmus.block_breaking`
- `cadmus.block_placing`
- `cadmus.block_explosions`
- `cadmus.block_interactions`
- `cadmus.entity_interactions`
- `cadmus.entity_damage`

These permissions can be accessed by running `/roles`, opening a role, navigating to the permissions tab, and adding any of the above permissions.
This replaces the game rules that Cadmus provides. As such the game rules will no longer affect the game.
The benefit of using permissions is that players with different roles can have different permissions.

If players want to change their claim settings, they must have the corresponding permission.

### Options

Cadmus also adds two options to the roles screen: `Max Claims` and `Max Chunk Loaded`, replacing the two game rules.
These two values will control the max amount of claims and chunk loaded chunks per player, respectively.
This allows players to have different claim limits based on their role. This is particularly useful for servers with rank systems, 
allowing players with higher ranks to have more claims.

A new game rule is also available: `doCombinedClaimLimit`.
If this is disabled, the max claim limit for a team will be whatever player has the highest max claim limit in the team.
If this is enabled, the max claim limit for a team will be the sum of all max claim limits of all players in the team.
