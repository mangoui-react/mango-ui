## Drawer

### 기본

```javascript
<Drawer.Root>
  <Drawer.Trigger asChild>
    <button type="button">Open</button>
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Backdrop backdrop />
    <Drawer.Content>
      <Drawer.Header>Title</Drawer.Header>
      <Drawer.Close asChild>
        <Drawer.CloseButton />
      </Drawer.Close>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```

### Placement

```javascript
<Drawer.Root placement="left">
  <Drawer.Trigger asChild>
    <button type="button">Open</button>
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Backdrop backdrop />
    <Drawer.Content>
      <Drawer.Header>Title</Drawer.Header>
      <Drawer.Close asChild>
        <Drawer.CloseButton />
      </Drawer.Close>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```

### Custom

```javascript
<Drawer.Root>
  <Drawer.Trigger asChild>
    <button type="button">Open</button>
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Backdrop backdrop />
    <Drawer.Content style={{ width: '60%' }}>
      <Drawer.Header>Title</Drawer.Header>
      <Drawer.Close asChild>
        <Drawer.CloseButton />
      </Drawer.Close>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```

### destroyOnClose

```javascript
<Drawer.Root>
  <Drawer.Trigger asChild>
    <button type="button">Open</button>
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Backdrop backdrop />
    <Drawer.Content destroyOnClose={false}>
      <Drawer.Header>Title</Drawer.Header>
      <Drawer.Close asChild>
        <Drawer.CloseButton />
      </Drawer.Close>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```
