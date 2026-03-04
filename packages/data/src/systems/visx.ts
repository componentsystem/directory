import type { ComponentSystem } from "../schema";

const visx: ComponentSystem = {
  slug: "visx",
  name: "Visx",
  url: "https://airbnb.io/visx/",
  github: "https://github.com/airbnb/visx/",
  description:
    "A collection of low-level visualization primitives for React by Airbnb, combining the power of D3 with the benefits of React's component model.",
  frameworks: ["react"],
  styling: [],
  category: ["data-viz"],
  maturity: "stable",
  components: ["Arc", "Area", "AreaClosed", "AreaStack", "Axis", "Bar", "BarGroup", "BarStack", "BoxPlot", "Chord", "Circle", "Clip", "Curve", "Drag", "Glyph", "Gradient", "Grid", "Group", "HeatMap", "Hierarchy", "Legend", "Line", "LinePath", "Marker", "Network", "Pack", "Partition", "Pattern", "Pie", "Point", "Polygon", "Radar", "Sankey", "Scale", "Shape", "Sparkline", "Stack", "Text", "Threshold", "Tree", "Treemap", "Voronoi", "WordCloud", "Zoom"],
  tags: ["d3", "visualization", "charts", "low-level"],
  featured: false,
  sponsored: false,
  company: "Airbnb",
};

export default visx;
