---
displayed_sidebar: hermes

title: <component>
---

# `<component>` : Component

The `<component>` element is used to create a raw Minecraft component.
Unlike other elements the text inside the component is parsed as a raw JSON component and the 
output is rendered.

## Examples

The following will show a component with the text `This is a link` and when clicked will open the url `https://example.com`.

```html
<component>{"text":"This is a link","clickEvent":{"action":"open_url","value":"https://example.com"}}</component>
```

## Version History

| Version | Changes |
| ------- | ------- |
| 1.0     | Initial release. |