## Tabs

### 기본

```javascript
<Tabs.Root>
  <Tabs.List>
    <Tabs.Tab>Tab1</Tabs.Tab>
    <Tabs.Tab>Tab2</Tabs.Tab>
    <Tabs.Tab>
      <UserIcon />
      Tab3
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Content>
    <p>TabContent1</p>
  </Tabs.Content>
  <Tabs.Content>
    <p>TabContent2</p>
  </Tabs.Content>
  <Tabs.Content>
    <p>TabContent3</p>
  </Tabs.Content>
</Tabs.Root>
```

### Orientation

```javascript
<Tabs.Root orientation="vertical">
  <Tabs.List>
    <Tabs.Tab>Tab1</Tabs.Tab>
    <Tabs.Tab>Tab2</Tabs.Tab>
    <Tabs.Tab>
      <UserIcon />
      Tab3
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Content>
    <p>TabContent1</p>
  </Tabs.Content>
  <Tabs.Content>
    <p>TabContent2</p>
  </Tabs.Content>
  <Tabs.Content>
    <p>TabContent3</p>
  </Tabs.Content>
</Tabs.Root>
```

### RenderMode

- selecting: 선택한 tab만 랜더링 (default)
- selected: 선택되었던 tab 랜더링
- force: 모두 랜더링

```javascript
<Tabs.Root renderMode="selecting">
  <Tabs.List>
    <Tabs.Tab>Tab1</Tabs.Tab>
    <Tabs.Tab>Tab2</Tabs.Tab>
    <Tabs.Tab>
      <UserIcon />
      Tab3
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Content>
    <p>TabContent1</p>
  </Tabs.Content>
  <Tabs.Content>
    <p>TabContent2</p>
  </Tabs.Content>
  <Tabs.Content>
    <p>TabContent3</p>
  </Tabs.Content>
</Tabs.Root>
```
