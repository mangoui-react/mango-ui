## Popover

### 기본

```javascript
<Popover.Root>
  <Popover.Trigger asChild>
    <button type="button">Open Popover</button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content>
      <div>This is a Popover Content</div>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>
```

### CloseOnBlur

```javascript
<Popover.Root>
  <Popover.Trigger asChild>
    <button type="button">Open Popover</button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content closeOnBlur={false}>
      <div>This is a Popover Content</div>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>
```

### DestroyOnClose

```javascript
<Popover.Root>
  <Popover.Trigger asChild>
    <button type="button">Open Popover</button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content destroyOnClose={false}>
      <div>This is a Popover Content</div>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>
```

### ForceMount

```javascript
<Popover.Root>
  <Popover.Trigger asChild>
    <button type="button">Open Popover</button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content forceMount>
      <div>This is a Popover Content</div>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>
```

### Position

```javascript
<Popover.Root>
  <Popover.Trigger asChild>
    <button type="button">Open Popover</button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content
      triggerPosition={{ vertical: 'bottom', horizontal: 'right' }}
      contentPosition={{ vertical: 'top', horizontal: 'left' }}
    >
      <div>This is a Popover Content</div>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>
```
