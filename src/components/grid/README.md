# CSS Grid Fundamentals

## Key Concepts Learned

### 1. Grid Container Setup

```css
.grid-container {
  display: grid; /* Activates grid layout */
  min-height: 100vh; /* Makes container full viewport height */
}
```

### 2. Grid Template Properties

```css
/* Creating a 3x3 grid */
grid-template-columns: repeat(3, minmax(100px, 1fr)); /* 3 columns */
grid-template-rows: repeat(3, minmax(100px, 1fr)); /* 3 rows */
```

- `repeat(3, ...)` - Creates 3 identical columns/rows
- `minmax(100px, 1fr)` - Sets minimum size of 100px, can grow to fill space
- `1fr` - One fraction of available space (equal distribution)

### 3. Spacing and Alignment

```css
gap: 10px; /* Adds space between grid items */
place-items: center; /* Centers items both horizontally and vertically */
```

- `gap` - Space between grid items (can be row-gap and column-gap separately)
- `place-items` - Shorthand for align-items and justify-items

### 4. Grid Items

```css
.grid-item {
  width: 100px;
  height: 100px;
  display: flex; /* For centering content inside items */
  justify-content: center;
  align-items: center;
}
```

### 5. Grid Auto Rows and Row Spans

- like pinterest , fill the gap

```css
/* Setting base row height for auto-generated rows */
grid-auto-rows: 10px; /* Each row is 10px tall */

/* Making an item span multiple rows */
.grid-item {
  grid-row: span 20; /* Takes up 20 rows (200px if each row is 10px) */
}
```

- `grid-auto-rows` - Defines the height of automatically created rows
- `grid-row: span X` - Makes an item span X number of rows
- Useful for creating masonry layouts with items of different heights

### 6. Grid Template Areas

```css
/* Define named grid areas */
grid-template-areas:
  'header header header'
  'sidebar main main'
  'footer footer footer';

/* Assign elements to grid areas */
header {
  grid-area: header;
}
```

- `grid-template-areas` - Defines named grid areas
- `grid-area` - Assigns an element to a named grid area
- Great for creating complex layouts with semantic names

## Important Things to Remember

1. **Grid vs Flexbox**

   - Grid: Two-dimensional layout (rows and columns)
   - Flexbox: One-dimensional layout (either rows OR columns)

2. **minmax() Function**

   - Syntax: `minmax(minimum, maximum)`
   - Example: `minmax(100px, 1fr)`
   - Ensures responsive layouts while maintaining minimum sizes

3. **Common Grid Properties**

   - `grid-template-columns` - Defines column structure
   - `grid-template-rows` - Defines row structure
   - `gap` - Space between grid items
   - `place-items` - Alignment of items within their cells
   - `grid-auto-rows` - Height of automatically created rows
   - `grid-row: span X` - Makes an item span X rows

4. **Responsive Design**

   - Use `minmax()` for flexible sizing
   - Use `fr` units for proportional spacing
   - Use media queries to change grid layouts at different breakpoints

5. **Masonry Layouts**
   - Use `grid-auto-rows` with a small base unit (e.g., 10px)
   - Use `grid-row: span X` to make items take up different amounts of space
   - Calculate spans based on item heights (height / base unit)

## Best Practices

1. **Container Setup**

   - Always start with `display: grid`
   - Set appropriate container dimensions
   - Use meaningful class names

2. **Item Sizing**

   - Set explicit dimensions when needed
   - Use relative units for flexibility
   - Consider content size requirements
   - Use `grid-row: span X` for variable height items

3. **Spacing**

   - Use `gap` for consistent spacing
   - Consider using different gaps for rows and columns
   - Add padding to prevent edge touching
