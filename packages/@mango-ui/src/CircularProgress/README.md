## CircularProgress

### 기본

```javascript
<CircularProgress.Root value={30}>
  <CircularProgress.Indicator />
  <CircularProgress.Label>30%</CircularProgress.Label>
</CircularProgress.Root>
```

### Indeterminate

```javascript
<CircularProgress.Root indeterminate>
  <CircularProgress.Indicator />
</CircularProgress.Root>
```

### Custom

```javascript
<CircularProgress.Root value={50} style={{ fontSize: 100, width: 100, height: 100 }}>
  <CircularProgress.Indicator barStyle={{ stroke: '#1976d2' }} />
  <CircularProgress.Label>50%</CircularProgress.Label>
</CircularProgress.Root>
```
