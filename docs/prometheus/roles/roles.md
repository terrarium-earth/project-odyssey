---
displayed_sidebar: prometheus
---

# Roles

Roles are a way to group permissions together. 
Roles are used to give players permissions, and to give players increased or decreased options in certain commands or features.

Role permissions are a hierarchical system, meaning that a player with a higher role will inherit all permissions from lower roles.
For example, a player with the `admin` role will inherit all permissions from the `moderator` role if the player has both roles.
Such hierarchical systems are common, you may have seen them in applications such as Discord.

On the other hand role settings are not hierarchical, meaning that a player with a higher role will not inherit any settings from lower roles.
This means that the highest role a player has will be the only role that affects their settings.

# Commands

To open the roles menu to add, edit, or delete roles you run `/roles open`, after you've added or edit your role and would like to add it to a user you can use `/member <username>` with the username being the person you would like to add the role to.