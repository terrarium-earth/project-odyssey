---
displayed_sidebar: prometheus
---

# Heading Command

## Usage
---

Headings provide away to let other players no information about you without having to say it yourself.
Such information as if you're afk or if you're busy, or if you're broadcasting/recording.
All headings excluding None will display above your head for all players to see.

---

### None 

```text
/heading none
```

:::note
Sets your heading to none.
This will reset your heading to the default.
:::

---

### AFK

```text
/heading afk
```

:::note
Sets your heading to afk.
Provides a small dot in the corner of your head in tab.
:::

:::info Permission
`headings.afk` - Default: `true`
:::

---

### DND

```text
/heading dnd
```
:::note
Sets your heading to do not disturb.
Provides a small dot in the corner of your head in tab.
:::

:::info Permission
`headings.dnd` - Default: `true`
:::

---

### Music 

```text
/heading music
```

:::note
Sets your heading to music.
This is a special heading that will display the song you are listening to if you use the [Craftify Mod](https://www.modrinth.com/mod/craftify).
:::

:::info Permission
`headings.music` - Default: `false`
:::

---

### Recording

```text
/heading recording
```

:::note
Sets your heading to recording.
This heading will be used to let other players know that you are recording, it will broadcast a message to the server when you set this heading.
This will also change your name to red in the tab list and provide you with a red square around your head in the tab list.
:::

:::info Permission
`headings.recording` - Default: `false`
:::

---

### Streaming

```text
/heading streaming
```

:::note
Sets your heading to streaming.
This heading will be used to let other players know that you are streaming, it will broadcast a message to the server when you set this heading.
This will also change your name to purple in the tab list and provide you with a purple square around your head in the tab list.
:::

:::info Permission
`headings.streaming` - Default: `false`
:::