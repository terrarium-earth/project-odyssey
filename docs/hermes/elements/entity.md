---
displayed_sidebar: hermes

title: <entity>
---

# `<entity>` : Entity

The `<entity>` element is used to display an entity.
This element will always be 50 in height and follow the users mouse.

## Attributes

`type`
> The type of entity to display.
> The entity must be a living entity.

`tag`
> The nbt tag of the entity to display.

## Examples

The following example will display a cow.

```html
<entity type="minecraft:cow"/>
```

## Version History

| Version | Changes                      |
|---------|------------------------------|
| 1.3     | Allowed for `tag` attribute. |
| 1.0     | Initial release.             |