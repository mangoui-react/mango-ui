## Tooltip

### 기본

```javascript
<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <button type="button">Tooltip</button>
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content>tooltip message</Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>
```

### Arrow

```javascript
<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <button type="button">Tooltip</button>
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content>
      tooltip message
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>
```

### Position

```javascript
<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <button type="button">Tooltip</button>
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content side="bottom" align="end">
      tooltip message
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>
```
