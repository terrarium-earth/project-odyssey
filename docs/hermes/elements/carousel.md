---
displayed_sidebar: hermes

title: <carousel>
---

# `<carousel>` : Carousel

The `<carousel>` element creates a container for a carousel of elements which one set showing at a time.
The carousel can be controlled by the user using the left and right arrows on the sides of the carousel.

## Attributes

`index`
> The index of the element to show. Defaults to `0`.

`height`
> The height of the carousel. Defaults to the height of the current element being shown.

## Examples

The following will show a carousel with 3 items with the second being shown first.

```html
<carousel index="1">
    <carousel-item>
        <p>Line 1</p>
    </carousel-item>
    <carousel-item>
        <p>Line 2</p>
    </carousel-item>
    <carousel-item>
        <p>Line 3</p>
    </carousel-item>
</carousel>
```

## Restrictions

The `<carousel>` element can only contain `<carousel-item>` elements.

## Related Elements

- [`<carousel-item>`](../elements/carousel-item)

## Version History

| Version | Changes |
| ------- | ------- |
| 1.0     | Initial release. |