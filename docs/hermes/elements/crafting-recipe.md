---
displayed_sidebar: hermes

title: <crafting-recipe>
---

# `<crafting-recipe>` : Crafting Recipe

The `<crafting-recipe>` element is used to display a recipe.
It can display any recipe of any type if they provide the correct data.

## Attributes

`id`
> The id of the recipe to display.

`grid-width`
> The width of the recipe grid. Defaults to 3.
> For example, a value of 3 will display a 3x3 grid.
> A value of 1 will display a 1x1 grid, which can be used for a furnace recipe.

## Examples

The following example will display a crafting recipe for a diamond sword.

```html
<crafting-recipe id="minecraft:diamond_sword"/>
```

The following example will display a furnace recipe for a iron ingot.

```html
<crafting-recipe id="minecraft: iron_ingot_from_smelting_iron_ore" grid-width="1"/>
```

## Version History

| Version | Changes |
| ------- | ------- |
| 1.0     | Initial release. |