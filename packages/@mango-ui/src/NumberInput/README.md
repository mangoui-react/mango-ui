## NumberInput

### 기본

```javascript
<NumberInput.Root>
  <NumberInput.Field />
  <NumberInput.ButtonGroup>
    <NumberInput.Plus />
    <NumberInput.Minus />
  </NumberInput.ButtonGroup>
</NumberInput.Root>

<NumberInput.Root>
  <NumberInput.Field />
  <NumberInput.ButtonGroup>
    <NumberInput.Plus asChild>
      <button type="button">+</button>
    </NumberInput.Plus>
    <NumberInput.Minus asChild>
      <button type="button">-</button>
    </NumberInput.Minus>
  </NumberInput.ButtonGroup>
</NumberInput.Root>
```

### Disabled

```javascript
<NumberInput.Root disabled>
  <NumberInput.Field />
  <NumberInput.ButtonGroup>
    <NumberInput.Plus />
    <NumberInput.Minus />
  </NumberInput.ButtonGroup>
</NumberInput.Root>
```

### ReadOnly

```javascript
<NumberInput.Root readOnly>
  <NumberInput.Field />
  <NumberInput.ButtonGroup>
    <NumberInput.Plus />
    <NumberInput.Minus />
  </NumberInput.ButtonGroup>
</NumberInput.Root>
```

### Min/Max

```javascript
<NumberInput.Root min={0} max={100} step={5}>
  <NumberInput.Field />
  <NumberInput.ButtonGroup>
    <NumberInput.Plus />
    <NumberInput.Minus />
  </NumberInput.ButtonGroup>
</NumberInput.Root>
```

### Custom(Invalid)

```javascript
<NumberInput.Root style={{ border: '1px solid', borderColor: 'var(--es-error)' }}>
  <NumberInput.Field style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
  <NumberInput.ButtonGroup>
    <NumberInput.Plus />
    <NumberInput.Minus />
  </NumberInput.ButtonGroup>
</NumberInput.Root>
```
