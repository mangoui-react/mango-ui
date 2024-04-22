## Radio

### 기본

```javascript
<Radio.Group>
  <Radio.Root value="1">
    <Radio.Indicator>
      <Radio.Icon />
    </Radio.Indicator>
    <Radio.Label>라디오1</Radio.Label>
  </Radio.Root>

  <Radio.Root value="2">
    <Radio.Indicator>
      <Radio.Icon />
    </Radio.Indicator>
    <Radio.Label>라디오2</Radio.Label>
  </Radio.Root>

  <Radio.Root value="3">
    <Radio.Indicator>
      <Radio.Icon />
    </Radio.Indicator>
    <Radio.Label>라디오3</Radio.Label>
  </Radio.Root>
</Radio.Group>
```

### Custom Checked(함수)

```javascript
<Radio.Group>
  <Radio.Root value="1">
    <Radio.Indicator>
      {(checked: boolean) => {
        if (checked) return <CheckedUserIcon />;
        return <UncheckedUserIcon />;
      }}
    </Radio.Indicator>
    <Radio.Label>라디오1</Radio.Label>
  </Radio.Root>

  <Radio.Root value="2">
    <Radio.Indicator>
      {(checked: boolean) => {
        if (checked) return <CheckedUserIcon />;
        return <UncheckedUserIcon />;
      }}
    </Radio.Indicator>
    <Radio.Label>라디오2</Radio.Label>
  </Radio.Root>

  <Radio.Root value="3">
    <Radio.Indicator>
      {(checked: boolean) => {
        if (checked) return <CheckedUserIcon />;
        return <UncheckedUserIcon />;
      }}
    </Radio.Indicator>
    <Radio.Label>라디오3</Radio.Label>
  </Radio.Root>
</Radio.Group>
```

### Custom Checked(props)

```javascript
<Radio.Group>
  <Radio.Root value="1">
    <Radio.Indicator>
      <Radio.Icon checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
    </Radio.Indicator>
    <Radio.Label>라디오1</Radio.Label>
  </Radio.Root>

  <Radio.Root value="2">
    <Radio.Indicator>
      <Radio.Icon checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
    </Radio.Indicator>
    <Radio.Label>라디오2</Radio.Label>
  </Radio.Root>

  <Radio.Root value="3">
    <Radio.Indicator>
      <Radio.Icon checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
    </Radio.Indicator>
    <Radio.Label>라디오3</Radio.Label>
  </Radio.Root>
</Radio.Group>
```
