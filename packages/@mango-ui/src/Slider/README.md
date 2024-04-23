## Slider

### 기본

```javascript
<Slider.Root>
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb />
</Slider.Root>
```

### ThumbLabel

```javascript
<Slider.Root>
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb>
    <Slider.ThumbLabel />
  </Slider.Thumb>
</Slider.Root>

<Slider.Root>
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb>
    <Slider.ThumbLabel auto />
  </Slider.Thumb>
</Slider.Root>
```

### Min/Max

```javascript
<Slider.Root min={10} max={120} step={10}>
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb />
</Slider.Root>
```

### Orientation

```javascript
<Slider.Root orientation="vertical">
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb />
</Slider.Root>
```

### Range

```javascript
<Slider.Root defaultValue={[10, 30]}>
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb />
  <Slider.Thumb />
</Slider.Root>
```
