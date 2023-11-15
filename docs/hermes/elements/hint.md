---
displayed_sidebar: hermes

title: <hint>
---

# `<hint>` : Hint

The `<hint>` element is used to display a hint. It would look like such in html:

:::tip Example Hint
This is an example hint.
:::

## Attributes

[`color`](../attributes/color)
> The color of the hint. Defaults to `white`.

`icon`
> The icon to display on the hint, this is an item id. Defaults to air.

`title`
> The title of the hint. Defaults to "".

## Examples

The following example will display a hint with the title "Example Hint" and the text "This is an example hint."
and an icon of a diamond sword.

```html
<hint title="Example Hint" icon="minecraft:diamond_sword">
    <p>This is an example hint.</p>
</hint>
```

## Restrictions

The `<hint>` element can only contain text elements.


## Version History

| Version | Changes          |
|---------|------------------|
| 1.0     | Initial release. |