## Toast

### 기본

```javascript
const [open, setOpen] = React.useState(false);

<button
  type="button"
  onClick={() => {
    setOpen(true);
  }}
>
  Open
</button>

<Toast.Root open={open} onOpenChange={setOpen}>
  <Toast.Content >
    Notification
  </Toast.Content>
  <Toast.Viewport />
</Toast.Root>
```

### Placement

```javascript
const [open, setOpen] = React.useState(false);

<button
  type="button"
  onClick={() => {
    setOpen(true);
  }}
>
  Open
</button>

<Toast.Root open={open} onOpenChange={setOpen}>
  <Toast.Content >
    Notification
  </Toast.Content>
  <Toast.Viewport placement="bottom-right" />
</Toast.Root>
```

### Duration

```javascript
const [open, setOpen] = React.useState(false);

<button
  type="button"
  onClick={() => {
    setOpen(true);
  }}
>
  Open
</button>

<Toast.Root duration={1000} open={open} onOpenChange={setOpen}>
  <Toast.Content >
    Notification
  </Toast.Content>
  <Toast.Viewport />
</Toast.Root>
```

### Close

```javascript
const [open, setOpen] = React.useState(false);

<button
  type="button"
  onClick={() => {
    setOpen(true);
  }}
>
  Open
</button>

<Toast.Root open={open} onOpenChange={setOpen}>
  <Toast.Content >
    Notification
    <Toast.Close asChild>
      <button type="button">Undo</button>
    </Toast.Close>
  </Toast.Content>
  <Toast.Viewport />
</Toast.Root>
```
