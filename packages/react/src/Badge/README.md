## Badge

### 기본

```javascript
<Badge.Root>
  <Badge.Content>{2}</Badge.Content>
  <UserIcon />
</Badge.Root>
```

### Max

```javascript
<Badge.Root max={99}>
  <Badge.Content>{100}</Badge.Content>
  <UserIcon />
</Badge.Root>
```

### Size

```javascript
<Badge.Root>
  <Badge.Content
    style={{
      minWidth: 20,
      height: 20,
      fontSize: 'calc(20px - 3px)',
      borderRadius: 'calc(20px / 2)',
      lineHeight: '20px',
    }}
  >
    large
  </Badge.Content>
  <UserIcon />
</Badge.Root>
```

### Color

```javascript
<Badge.Root>
  <Badge.Content style={{ backgroundColor: '#ffff00', color: 'black' }}>#ffff00</Badge.Content>
  <UserIcon />
</Badge.Root>
```

### Placement

```javascript
<Badge.Root placement="top-left">
  <Badge.Content>top-left</Badge.Content>
  <UserIcon />
</Badge.Root>
```

### BadgeOnly

```javascript
<Badge.Root>
  <Badge.Content />
</Badge.Root>
```
