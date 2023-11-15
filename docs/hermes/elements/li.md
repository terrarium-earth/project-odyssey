---
displayed_sidebar: hermes

title: <li>
---

# `<li>` : List Item

The `<li>` element is used in conjunction with the `<ul>` and `<ol>` elements to display a list item.
The `<li>` element can contain either elements or text, but not both.

## Attributes

[`color`](../attributes/color)
> The color of the list item if content is text. Defaults to `white`.

## Examples

The following example will a list with 3 items with the first being red and the seconding being a blockquote

```html
<ul>
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

The `<li>` element can only contain text or elements, but not both.

## Related Elements

- [`<ul>`](./ul)
- [`<ol>`](./ol)

## Version History

| Version | Changes          |
|---------|------------------|
| 1.0     | Initial release. |