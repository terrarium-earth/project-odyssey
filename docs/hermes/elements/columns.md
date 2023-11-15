---
displayed_sidebar: hermes

title: <columns>
---

# `<columns>` : Columns

The `<columns>` element creates a row of columns.
This can be used to create a grid of elements, by default the columns will be evenly spaced.

## Attributes

`template`
> The template attribute is a space separated list of column widths.
> The widths are specified as a percentage with a `%` suffix.

## Examples

The following will show 2 columns, each with 3 lines of text.

```html
<columns>
    <column>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
    </column>
    <column>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
    </column>
</columns>
```

The following will show 3 columns, with widths of 40%, 20%, and 40% respectively.

```html
<columns template="40% 20 40%">
    <column>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
    </column>
    <column>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
    </column>
    <column>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
    </column>
</columns>
```

## Related Elements

[`<column>`](../elements/column)

## Version History

| Version | Changes |
| ------- | ------- |
| 1.0     | Initial release. |