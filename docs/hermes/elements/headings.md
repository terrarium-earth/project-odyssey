---
displayed_sidebar: hermes

title: <h1>
---

# `<h1>-<h2>` : Headings

The `<h1>` to `<h2>` elements are used to display headings.
With the `<h1>` element being 3x the size of normal text and the `<h2>` element being 2x the size of normal text.

## Attributes

These elements only inherits the attributes from [`TextAttributes`](../global_attributes/text_attributes).

## Examples

The following example will display a heading with the text "Hello World!".

```html
<h1>Hello World!</h1>
```

The following example will display a heading with the text "Hello World!" and the color red.

```html
<h1 color="red">Hello World!</h1>
```

The following example will display a smaller heading with the text "Hello World!".

```html
<h2>Hello World!</h2>
```

## Version History

| Version | Changes                                                                            |
|---------|------------------------------------------------------------------------------------|
| 1.2.1   | Now inherits styles from [`TextAttributes`](../global_attributes/text_attributes). |
| 1.0     | Initial release.                                                                   |