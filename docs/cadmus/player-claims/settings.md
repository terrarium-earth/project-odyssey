---
displayed_sidebar: cadmus
---

# Claim Settings

Claim settings allow players to enable or disable certain protections in their personal or team's claims. To access claim settings, use the `/claim settings` command.

By default, players do not have permission to change claim settings. If Prometheus is not installed, a specific claim setting is granted by enabling its corresponding game rule.
However, if Prometheus is installed, these permissions are granted by adding the specified permission to the player's role. 
For example, to allow player's to change the `blockInteractions` setting, an admin must open the roles screen (`/roles`) and add the `cadmus.block_interactions` permission to the player's role.
See [Prometheus](/cadmus/admin-tools/prometheus.md) for more information.

## Default Settings
All claim settings are set to `default` by default. This means that it will use whatever the server's default value is. Default server values can be changed with the `/cadmus admin defaultsettings` command.

## Settings

### Block Breaking

```text
/claim settings canBreak <value>
```

Allows anyone to break blocks within the claim. Note that block interactions must also be enabled.

### Damage Entities

```text
/claim settings canDamageEntities <value>
```

Allows anyone to damage entities within the claim.

### Explosions

```text
/claim settings canExplode <value>
```

Allows explosions to damage blocks and entities within the claim.

### Block Interactions

```text
/claim settings canInteractWithBlocks <value>
```

Allows anyone to interact with blocks within the claim.

### Entity Interactions

```text
/claim settings canInteractWithEntities <value>
```

Allows anyone to interact with entities within the claim.

### Block Placing

```text
/claim settings canPlace
```

Allows anyone to place blocks within the claim. Note that block interactions must also be enabled.