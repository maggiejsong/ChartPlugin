# Chart Plugin— Figma Plugin

A simple Figma plugin that plots points on the canvas from user-inputted `x,y` coordinates.  
Built with **TypeScript** and the **Figma Plugin API**.

---

## Features
- Input `x,y` coordinates (one point per line)
- Plots circular points on the Figma canvas
- **Automatically scales to fit any frame size**
- Auto-zooms the viewport to the plotted area
- Default point color: `#0ECCA7`
- Configurable point size in `code.ts`

---

## Example input
100,100
200,150
300,220
150,300

---

## Getting started

### Prerequisites
- [Node.js & npm](https://nodejs.org/) installed (required to run `npx tsc`)

### 1. Clone the repo
```bash
git clone https://github.com/maggiejsong/ChartPlugin.git
cd scatter-plot-plugin
```
### 2. Install TypeScript (dev dependency)
```bash
npm install --save-dev typescript
```

### 3. Compile TypeScript to JS
```bash
npx tsc
```
