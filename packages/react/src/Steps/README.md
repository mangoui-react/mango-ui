## Steps

### 기본

```javascript
<Steps.Root>
  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step01</div>
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step02</div>
      <div>This is a description</div>
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step03</div>
    </Steps.Content>
  </Steps.Step>
</Steps.Root>
```

### ChildrenByFunc

```javascript
<Steps.Root>
  <Steps.Step>
    <Steps.Indicator>
      {(status: StepStatusValue) => (status === 'finish' ? '완료' : status)}
    </Steps.Indicator>
    <Steps.Content>
      {(status: StepStatusValue) =>
        status === 'finish' ? (
          <div>Step01 - {status}</div>
        ) : (
          <>
            <div>Step01 - {status}</div>
            <div>This is a description</div>
          </>
        )
      }
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step02</div>
      <div>This is a description</div>
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step03</div>
    </Steps.Content>
  </Steps.Step>
</Steps.Root>
```

### CustomStatus

```javascript
<Steps.Root>
  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status finish={<UserIcon />} error={<UserIcon color="red" />} />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step01</div>
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status finish={<UserIcon />} error={<UserIcon color="red" />} />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step02</div>
      <div>This is a description</div>
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      {(status: StepStatusValue) =>
        status === 'wait' ? <UserIcon color="gray" /> : <UserIcon />
      }
    </Steps.Indicator>
    <Steps.Content>
      <div>Step03</div>
    </Steps.Content>
  </Steps.Step>
</Steps.Root>
```

### Orientation

```javascript
<Steps.Root orientation="vertical">
  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step01</div>
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step02</div>
      <div>This is a description</div>
    </Steps.Content>
    <Steps.Separator />
  </Steps.Step>

  <Steps.Step>
    <Steps.Indicator>
      <Steps.Status />
    </Steps.Indicator>
    <Steps.Content>
      <div>Step03</div>
    </Steps.Content>
  </Steps.Step>
</Steps.Root>
```
