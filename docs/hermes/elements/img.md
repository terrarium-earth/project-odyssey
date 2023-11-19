---
displayed_sidebar: hermes

title: <img>
---

# `<img>` : Image

The `<img>` element is used to display an image.

## Attributes

`src`
> The source of the image, in resource location format. Example: `minecraft:textures/item/diamond_sword.png`.

`width`
> The width of the image. Defaults to 0.

`height`
> The height of the image. Defaults to 0.

`u`
> The u coordinate of the image. Defaults to 0.

`v`
> The v coordinate of the image. Defaults to 0.

`textureWidth`
> The width of the texture. Defaults to src width.

`textureHeight`
> The height of the texture. Defaults to src height.

## Examples

The following example will display a diamond sword.

```html
<img src="minecraft:textures/item/diamond_sword.png" width="32" height="32"/>
```

## Version History

| Version | Changes                                               |
|---------|-------------------------------------------------------|
| 1.3     | Changed to use src width and height if not specified. |
| 1.0     | Initial release.                                      |