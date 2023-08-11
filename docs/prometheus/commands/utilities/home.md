---
displayed_sidebar: prometheus
---

# Home Command

## Usage
---

### Client Side
```text
/homes
```

Provides a gui to manage your homes, adding, removing, and teleporting to them.

### Adding a home

```text
/sethome <name>
```

Sets a home at your current location with the specified name.

### Removing a home

```text
/delhome <name>
```

Removes the home with the specified name.

### Teleporting to a home

```text
/home <name>
```

Teleports you to the home with the specified name.

### Teleporting to a default home

```text
/home
```

Teleports you to a home if its named 'home' or 'bed' or if you have only one home it will teleport you to that home.
If you have multiple homes and none of them are named 'home' or 'bed' then it will return an error.

### List all homes

```text
/listhomes
```

Lists all homes you have set.

## Role Settings
---

:::info Default Options
- Max Homes: 5
:::