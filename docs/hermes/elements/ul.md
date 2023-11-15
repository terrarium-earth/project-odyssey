---
displayed_sidebar: hermes

title: <ul>
---

# `<ul>` : Unordered List

The `<ul>` element is used to display an unordered list.

## Attributes

[`color`](../attributes/color)
> The color of the dot. Defaults to `white`.

## Examples

The following example will a list with 3 items with the first being red and the seconding being a blockquote.
All items will have a red dot.

```html
<ul color="red">
    <li color="red">This is a red list item.</li>
    <li>
        <blockquote>
            This is a blockquote list item.
        </blockquote>
    </li>
    <li>This is a normal list item.</li>
</ul>
```

## Restrictions

The `<ul>` element can only contain `<li>` elements.

## Related Elements

- [`<li>`](./li)
- [`<ol>`](./ol)

## Version History

| Version | Changes          |
|---------|------------------|
| 1.0     | Initial release. |