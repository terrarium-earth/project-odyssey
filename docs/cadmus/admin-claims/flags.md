---
displayed_sidebar: cadmus
---

# Admin Flag Commands

## Flag Set Command

```text
/cadmus adminclaims flag set <id> <flag> <value>
```
Sets a flag for an admin claim
- `id`: The identifier for the admin claim.
- `flag`: The name of the flag to be set.
- `value`: The value to set the flag to.

## Flag Remove Command

```text
/cadmus adminclaims flag remove <id> <flag>
```
Removes a flag from an admin claim
- `id`: The identifier for the admin claim.
- `flag`: The name of the flag to be removed.

## Flag List Command

```text
/cadmus adminclaims flag list <id>
```
Lists all flags for an admin claim group
- `id`: The identifier for the admin claim.

## List of Flags

- `allow-entry`
  - Determines if entry is allowed. Attempting to enter will teleport the player out of the claim.
  - Accepts `true` or `false`. Default is `true`.

- `allow-exit`
  - Determines if exit is allowed. Attempting to exit will teleport the player back into the claim.
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
  - Determines if item usage is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `use-chests`
  - Determines if chests can be opened.
  - Accepts `true` or `false`. Default is `true`.

- `use-doors`
  - Determines if doors can be opened.
  - Accepts `true` or `false`. Default is `true`.

- `use-redstone`
  - Determines if redstone activation is allowed.
  - Accepts `true` or `false`. Default is `true`.

- `use-vehicles`
  - Determines if vehicles can be mounted on.
  - Accepts `true` or `false`. Default is `true`.

- `feed-rate`
  - Feeds the player a certain amount every second.
  - Accepts any decimal point number. Default is `0.0`.

- `heal-rate`
  - heals a specified amount every second.
  - Accepts any decimal point number. Default is `0.0`.

- `display-name`
  - Determines the display name of the claim. All new admin claims will have this flag set to the claim's ID by default.
  - Accepts any [text component](https://minecraft.tools/en/json_text.php). Default is the claim's ID.

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
