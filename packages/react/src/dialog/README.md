## Dialog

### 기본

```javascript
<Dialog.Root>
  <Dialog.Trigger asChild>
    <button type="button">Open Dialog</button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Content>
      <Dialog.Close asChild>
        <button type="button">X</button>
      </Dialog.Close>
      <div>Dialog Content</div>
      <div>
        <Dialog.Close asChild>
          <button type="button">닫기</button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### Backdrop

```javascript
<Dialog.Root>
  <Dialog.Trigger asChild>
    <button type="button">Open Dialog</button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop backdrop />
    <Dialog.Content>
      <Dialog.Close asChild>
        <button type="button">X</button>
      </Dialog.Close>
      <div>Dialog Content</div>
      <div>
        <Dialog.Close asChild>
          <button type="button">닫기</button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### DestroyOnClose

```javascript
<Dialog.Root>
  <Dialog.Trigger asChild>
    <button type="button">Open Dialog</button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Content destroyOnClose={false}>
      <Dialog.Close asChild>
        <button type="button">X</button>
      </Dialog.Close>
      <div>Dialog Content</div>
      <div>
        <Dialog.Close asChild>
          <button type="button">닫기</button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### ForceMount

```javascript
<Dialog.Root>
  <Dialog.Trigger asChild>
    <button type="button">Open Dialog</button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Content forceMount>
      <Dialog.Close asChild>
        <button type="button">X</button>
      </Dialog.Close>
      <div>Dialog Content</div>
      <div>
        <Dialog.Close asChild>
          <button type="button">닫기</button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```
