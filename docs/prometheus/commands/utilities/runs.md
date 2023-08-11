---
displayed_sidebar: prometheus
---

# Runs Command

## Usage
---

### Modifying/Creating a run

```text
/runs
```

Opens the runs menu to edit or create a run.
They are a version of vanilla mc functions that can be run by players with variables.

#### Variables

- `${user}` - The players username who ran the command.
- `${[x]}` - The xth argument passed to the command. Where x is a number starting at 0.
- `${[x]-[y]}` - The xth argument passed to the command, starting at 0, with a default value of y if the argument is not passed.
- `${[x]-*}` - All arguments passed to the command starting at the xth argument, starting at 0.

#### Comments

Comments can be added to the run by adding a line starting with `#`.

### Running a run

```text
/runs run <run> [args]
```

Runs the specified run.

## Permissions
---

- `command.run.<run_id>` - Allows the player to run the specified run.

:::note

If the player has the op permission they will be able to run any run.

:::


