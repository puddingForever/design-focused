# CSS Coordinates & Positioning

This directory contains examples demonstrating key concepts in CSS positioning, coordinates, and transformations.

## Components

### 1. Cartesian.jsx

Demonstrates the Cartesian coordinate system in CSS positioning.

**Key Concepts:**

- CSS positioning (top, right, bottom, left)
- Absolute positioning within a relative container
- Coordinate system (x, y) in CSS

**Example:**

```css
.map {
  width: 400px;
  height: 400px;
  position: relative;
}

.spot {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

### 2. RotatingCard.jsx

Demonstrates transform-origin and pivot points.

**Key Concepts:**

- Transform-origin property
- CSS animations with keyframes
- Different pivot points for rotation

**Example:**

```css
.card {
  width: 200px;
  height: 300px;
}

.card.animate-first {
  animation: rotate 1s infinite;
  transform-origin: center center;
}

.card.animate-second {
  animation: rotate-second 1s infinite;
  transform-origin: top left;
}

.card.animate-third {
  animation: rotate-third 1s infinite;
  transform-origin: bottom right;
}
```

## Important CSS Properties

### Positioning

- `position: relative` - Creates a positioning context for absolute elements
- `position: absolute` - Positions element relative to nearest positioned ancestor
- `top`, `right`, `bottom`, `left` - Define position from respective edges

### Transform Origin

- `transform-origin: center center` - Default, rotates from center
- `transform-origin: top left` - Rotates from top-left corner
- `transform-origin: bottom right` - Rotates from bottom-right corner
- Can use percentages: `transform-origin: 0% 0%` (top-left)
- Can use pixels: `transform-origin: 10px 10px`

### Animations

- `@keyframes` - Define animation sequence
- `animation` - Apply animation to element
- `transform: rotate(deg)` - Rotate element

## Tips & Best Practices

1. Always set `position: relative` on parent container when using absolute positioning
2. Transform-origin affects how transformations (rotate, scale) behave
3. Negative values in positioning can move elements outside their container
