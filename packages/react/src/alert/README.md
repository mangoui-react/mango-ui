## Alert

### 기본

```javascript
<Alert.Root>
  <Alert.StatusIcon />
  <Alert.Content>This is an info alert</Alert.Content>
</Alert.Root>
```

### 타이틀

```javascript
<Alert.Root>
  <Alert.StatusIcon />
  <Alert.Content>
    <div>information</div>
    <div>This is an info alert</div>
  </Alert.Content>
</Alert.Root>
```

### 아이콘

```javascript
<Alert.Root>
  <CheckIcon />
  <Alert.Content>This is an custom icon alert</Alert.Content>
</Alert.Root>

<Alert.Root>
  <Alert.StatusIcon
    info={<CheckIcon />}
    success={<SuccessIcon />}
    warning={<WarningIcon />}
    error={<ErrorIcon />}
  />
  <Alert.Content>
    This is an custom icon alert by AlertStatusIcon
  </Alert.Content>
</Alert.Root>
```
