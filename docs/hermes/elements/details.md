---
displayed_sidebar: hermes

title: <details>
---

# `<details>` : Details

The `<details>` element is similar to the HTML `<details>` element.
The difference is that instead of a `<summary>` element, the `<details>` element uses a `summary` attribute.

## Attributes

`summary`
> The summary of the details element, also known as the title. Defaults to "Details".

`open`
> Whether or not the details element is open. Defaults to false.

## Examples

The following example will display a details element with the summary "Test" and the text "Hello World!" and will be opened by default.

```html
<details summary="Test" open="true">
    <p>Hello World!</p>
</details>
```

## Version History

| Version | Changes |
| ------- | ------- |
| 1.0     | Initial release. |