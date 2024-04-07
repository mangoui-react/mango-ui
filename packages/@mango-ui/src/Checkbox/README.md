## Checkbox

### 기본

```javascript
<Checkbox.Root>
  <Checkbox.Indicator>
    <Checkbox.Icon />
  </Checkbox.Indicator>
  <Checkbox.Label>체크박스</Checkbox.Label>
</Checkbox.Root>
```

### Custom

```javascript
<Checkbox.Root>
  <Checkbox.Indicator>
    {(checked: boolean) => {
      if (checked) return <CheckedUserIcon />;
      return <UncheckedUserIcon />;
    }}
  </Checkbox.Indicator>
  <Checkbox.Label>체크박스</Checkbox.Label>
</Checkbox.Root>

<Checkbox.Root>
  <Checkbox.Indicator>
    <Checkbox.Icon
      checkedIcon={<CheckedUserIcon />}
      uncheckedIcon={<UncheckedUserIcon />}
    />
  </Checkbox.Indicator>
  <Checkbox.Label>체크박스</Checkbox.Label>
</Checkbox.Root>
```

### CheckboxGroup

```javascript
<Checkbox.Group>
  <Checkbox.Root value={0}>
    <Checkbox.Indicator>
      <Checkbox.Icon />
    </Checkbox.Indicator>
    <Checkbox.Label>체크박스1</Checkbox.Label>
  </Checkbox.Root>
  <Checkbox.Root value={1}>
    <Checkbox.Indicator>
      <Checkbox.Icon />
    </Checkbox.Indicator>
    <Checkbox.Label>체크박스2</Checkbox.Label>
  </Checkbox.Root>
  <Checkbox.Root value={2}>
    <Checkbox.Indicator>
      <Checkbox.Icon />
    </Checkbox.Indicator>
    <Checkbox.Label>체크박스3</Checkbox.Label>
  </Checkbox.Root>
</Checkbox.Group>
```
