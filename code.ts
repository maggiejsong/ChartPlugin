// This file runs in the Figma editor (backend logic)
figma.showUI(__html__);

// Helper function to convert hex code to Figma color format
function hexToFigmaColor(hex: string) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return { r, g, b };
}

figma.ui.onmessage = msg => {
  if (msg.type === 'plot-points') {
    const allCircles: SceneNode[] = [];

    for (const point of msg.points) {
      const circle = figma.createEllipse();
      circle.resize(20, 20); // Bigger points for visibility
      circle.x = point.x;
      circle.y = point.y;
      circle.fills = [
        { type: 'SOLID', color: hexToFigmaColor('#0ECCA7') } // Custom color
      ];
      figma.currentPage.appendChild(circle);
      allCircles.push(circle);
    }

    // Automatically center the viewport on the plotted points
    figma.viewport.scrollAndZoomIntoView(allCircles);

    figma.closePlugin();
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
