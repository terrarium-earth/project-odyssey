---
sidebar_position: 2
displayed_sidebar: cadmus
---

# Admin flag commands

```text
/claim admin flag set [id] [flag] [value]
```
Sets a flag for an admin claim
- `id` the identifier for the admin claim. This is going to be the claim that the flag is set for.
- `flag` the name of the flag to be set.
- `value` the value to set the flag to.

```text
/claim admin flag remove [id] [flag]
```
Removes a flag from an admin claim
- `id` the identifier for the admin claim. This is going to be the claim that the flag is removed from.
- `flag` the name of the flag to be removed.

```text
/claim admin flag list [id]
```
Lists all flags for an admin claim
- `id` the identifier for the admin claim. This is going to be the claim that the flags are listed for.

## List of Flags

- `allow-entry`
  - Determines if entry is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `allow-exit`
  - Determines if exit is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `block-break`
  - Determines if block breaking is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `block-explosions`
  - Determines if block explosions are allowed.
  - Accepts `true` or `false`. Default is `true`.

- `block-interactions`
  - Determines if block interactions are allowed.
  - Accepts `true` or `false`. Default is `true`.

- `block-place`
  - Determines if block placing is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `creature-damage`
  - Determines if creature damage is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `creature-spawning`
  - Determines if creature spawning is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `entity-damage`
  - Determines if entity damage is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `entity-interactions`
  - Determines if entity interactions are allowed.
  - Accepts `true` or `false`. Default is `true`.

- `fire-spread`
  - Determines if fire spread is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `keep-inventory`
  - Determines if inventory is kept after death.
  - Accepts `true` or `false`. Default is `false`.

- `monster-spawning`
  - Determines if monster spawning is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `ice-form`
  - Determines if ice formation is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `ice-melt`
  - Determines if ice melting is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `item-pickup`
  - Determines if item pickup is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `leaf-decay`
  - Determines if leaf decay is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `lightning`
  - Determines if lightning strikes are allowed.
  - Accepts `true` or `false`. Default is `true`.

- `mob-griefing`
  - Determines if mob griefing is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `mob-spawning`
  - Determines if mob spawning is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `monster-damage`
  - Determines if monster damage is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `pvp`
  - Determines if player versus player combat is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `snow-fall`
  - Determines if snowfall is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `snow-melt`
  - Determines if snow melting is allowed.
  - Accepts `true` or`false`. Default is `true`.

- `use`
  - Determines if usage of items is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `use-chests`
  - Determines if usage of chests is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `use-doors`
  - Determines if usage of doors is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `use-redstone`
  - Determines if usage of redstone is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `use-vehicles`
  - Determines if usage of vehicles is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `feed-rate`
  - Determines the rate of feeding.
  - Accepts any decimal point number. Default is `0.0`.

- `heal-rate`
  - Determines the rate of healing.
  - Accepts any decimal point number. Default is `0.0`.

- `display-name`
  - Determines the display name of the claim.
  - Accepts any [text component](https://minecraft.tools/en/json_text.php). Default is `empty`.

- `entry-deny-message`
  - Determines the message displayed when entry is denied.
  - Accepts any [text component](https://minecraft.tools/en/json_text.php). Default is `empty`.

- `exit-deny-message`
  - Determines the message displayed when exit is denied.
  - Accepts any [text component](https://minecraft.tools/en/json_text.php). Default is `empty`.

- `farewell`
  - Determines the farewell message when leaving the claim.
  - Accepts any [text component](https://minecraft.tools/en/json_text.php). Default is `empty`.

- `greeting`
  - Determines the greeting message when entering the claim.
  - Accepts any [text component](https://minecraft.tools/en/json_text.php). Default is `empty`.
