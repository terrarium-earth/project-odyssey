---
displayed_sidebar: hermes

title: <ol>
---

# `<ol>` : Ordered List

The `<ol>` element is used to display an ordered list, where each item is numbered.

## Attributes

[`color`](../attributes/color)
> The color of the number. Defaults to `white`.

## Examples

The following example will a list with 3 items with the first being red and the seconding being a blockquote.
All items will have a red number.

```html
<ol color="red">
    <li color="red">This is a red list item.</li>
    <li>
        <blockquote>
            This is a blockquote list item.
        </blockquote>
    </li>
    <li>This is a normal list item.</li>
</ol>
```

## Restrictions

The `<ol>` element can only contain `<li>` elements.

## Related Elements

- [`<li>`](./li)
- [`<ul>`](./ul)

## Version History

| Version | Changes          |
|---------|------------------|
| 1.0     | Initial release. |