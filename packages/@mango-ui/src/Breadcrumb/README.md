## Breadcrumb

### 기본

```javascript
<Breadcrumb.Root>
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>
    <Breadcrumb.Link href="/page">Page</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>Current</Breadcrumb.Item>
</Breadcrumb.Root>
```

### CustomSeparator

```javascript
<Breadcrumb.Root>
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>

  <Breadcrumb.Item>
    <Breadcrumb.Link href="/page">Page</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>

  <Breadcrumb.Item>Current</Breadcrumb.Item>
</Breadcrumb.Root>
```

### Icon

```javascript
<Breadcrumb.Root>
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/">
      <UserIcon />
      Home
    </Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>
    <Breadcrumb.Link href="/page">
      <UserIcon />
      Page
    </Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>
    <UserIcon />
    Current
  </Breadcrumb.Item>
</Breadcrumb.Root>
```

### Collapsed

```javascript
<Breadcrumb.Root maxItems={5} collapse={<Breadcrumb.Collapse />}>
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>
    <Breadcrumb.Link href="/page1">Page1</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>
    <Breadcrumb.Link href="/page2">Page2</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>
    <Breadcrumb.Link href="/page3">Page3</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>
    <Breadcrumb.Link href="/page4">Page4</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />

  <Breadcrumb.Item>Current</Breadcrumb.Item>
</Breadcrumb.Root>
```
