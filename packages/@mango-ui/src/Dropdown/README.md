## Dropdown

### 기본

```javascript
<Dropdown.Root>
  <Dropdown.Trigger asChild>
    <button type="button">Dropdown</button>
  </Dropdown.Trigger>
  <Dropdown.Portal>
    <Dropdown.Content>
      <Dropdown.Item>DropdownItem - 1</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 2</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 3</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Portal>
</Dropdown.Root>
```

### DestroyOnClose

```javascript
<Dropdown.Root>
  <Dropdown.Trigger asChild>
    <button type="button">Dropdown</button>
  </Dropdown.Trigger>
  <Dropdown.Portal>
    <Dropdown.Content destroyOnClose={false}>
      <Dropdown.Item>DropdownItem - 1</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 2</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 3</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Portal>
</Dropdown.Root>
```

### ForceMount

```javascript
<Dropdown.Root>
  <Dropdown.Trigger asChild>
    <button type="button">Dropdown</button>
  </Dropdown.Trigger>
  <Dropdown.Portal>
    <Dropdown.Content forceMount>
      <Dropdown.Item>DropdownItem - 1</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 2</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 3</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Portal>
</Dropdown.Root>
```

### Position

```javascript
<Dropdown.Root>
  <Dropdown.Trigger asChild>
    <button type="button">Dropdown</button>
  </Dropdown.Trigger>
  <Dropdown.Portal>
    <Dropdown.Content
      triggerPosition={{ vertical: 'bottom', horizontal: 'right' }}
      contentPosition={{ vertical: 'top', horizontal: 'left' }}
    >
      <Dropdown.Item>DropdownItem - 1</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 2</Dropdown.Item>
      <Dropdown.Item>DropdownItem - 3</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Portal>
</Dropdown.Root>
```

### Custom

```javascript
<Dropdown.Root>
  <Dropdown.Trigger asChild>
    <button type="button">Dropdown</button>
  </Dropdown.Trigger>
  <Dropdown.Portal>
    <Dropdown.Content>
      <div>
        <div>제목1</div>
        <Dropdown.Item>DropdownItem - 1</Dropdown.Item>
        <Dropdown.Item disabled>DropdownItem - 2</Dropdown.Item>
        <Dropdown.Item>DropdownItem - 3</Dropdown.Item>
      </div>
      <div role="separator" />
      <div>
        <div>제목2</div>
        <Dropdown.Item>DropdownItem - 1</Dropdown.Item>
        <Dropdown.Item>DropdownItem - 2</Dropdown.Item>
        <Dropdown.Item>DropdownItem - 3</Dropdown.Item>
      </div>
    </Dropdown.Content>
  </Dropdown.Portal>
</Dropdown.Root>
```
