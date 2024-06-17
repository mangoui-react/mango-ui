## Modal

### 기본

```javascript
<Modal.Root>
  <Modal.Trigger asChild>
    <button type="button">Open Modal</button>
  </Modal.Trigger>
  <Modal.Portal>
    <Modal.Backdrop />
    <Modal.Content>
      <Modal.Close asChild>
        <Modal.CloseButton />
      </Modal.Close>
      <div>Modal Content</div>
      <div>
        <Modal.Close asChild>
          <button type="button">닫기</button>
        </Modal.Close>
      </div>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

### Backdrop

```javascript
<Modal.Root>
  <Modal.Trigger asChild>
    <button type="button">Open Modal</button>
  </Modal.Trigger>
  <Modal.Portal>
    <Modal.Backdrop backdrop />
    <Modal.Content>
      <Modal.Close asChild>
        <Modal.CloseButton />
      </Modal.Close>
      <div>Modal Content</div>
      <div>
        <Modal.Close asChild>
          <button type="button">닫기</button>
        </Modal.Close>
      </div>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

### DestroyOnClose

```javascript
<Modal.Root>
  <Modal.Trigger asChild>
    <button type="button">Open Modal</button>
  </Modal.Trigger>
  <Modal.Portal>
    <Modal.Backdrop />
    <Modal.Content destroyOnClose={false}>
      <Modal.Close asChild>
        <Modal.CloseButton />
      </Modal.Close>
      <div>Modal Content</div>
      <div>
        <Modal.Close asChild>
          <button type="button">닫기</button>
        </Modal.Close>
      </div>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

### ForceMount

```javascript
<Modal.Root>
  <Modal.Trigger asChild>
    <button type="button">Open Modal</button>
  </Modal.Trigger>
  <Modal.Portal>
    <Modal.Backdrop />
    <Modal.Content forceMount>
      <Modal.Close asChild>
        <Modal.CloseButton />
      </Modal.Close>
      <div>Modal Content</div>
      <div>
        <Modal.Close asChild>
          <button type="button">닫기</button>
        </Modal.Close>
      </div>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```
