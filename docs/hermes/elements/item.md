---
displayed_sidebar: hermes

title: <item>
---

# `<item>` : Item

The `<item>` element is used to display an item.


## Attributes

`id`
> The id of the item to display, in resource location format. Example: `minecraft:diamond_sword`.

`tag`
> The nbt tag of the ItemStack to display.

`scale`
> The scale of the item. Defaults to 1.0.

## Examples

The following example will display a diamond sword with a scale of 2.0.

```html
<item id="minecraft:diamond_sword" scale="2.0"/>
```

## Version History

| Version | Changes                      |
|---------|------------------------------|
| 1.3     | Initial release.             |