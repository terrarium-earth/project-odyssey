---
displayed_sidebar: cadmus
---

# Teams

In addition to individual player claims, you can also claim as a team. 
Cadmus supports two team systems, vanilla teams (yes it's a thing) and Argonauts guilds.

If Argonauts is not installed, it will use the vanilla team system. 
However, if Argonauts is installed, it will use the Argonauts guild system by default.

Once a world has been created with one of the team systems, it's not recommended to switch to the other.
If for whatever reason you need to switch, you can do so by modifying the NBT of `saves/<world>/data/cadmus_data.dat` 
and changing the value `team_provider` to either `default` or `argonauts`. You'll need an NBT editor to do this.