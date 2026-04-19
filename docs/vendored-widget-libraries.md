# Vendored widget libraries

Interactive widgets posted via `send_dashboard_widget` run in a sandboxed iframe
with `allow-scripts allow-same-origin`. The CSP allows inline scripts and
same-origin script loading (`script-src 'unsafe-inline' 'self'`).

The following libraries are vendored as static assets and available to any widget
and to generated HTML artifacts from the `visual-artifact-generator` skill:

## Babylon.js 7.x

**Size:** 7.7 MB (minified UMD)  
**Path:** `/static/js/vendor/babylon/babylon.js`  
**Global:** `BABYLON`  
**License:** Apache-2.0

3D engine with PBR materials, GlowLayer, MeshBuilder, ArcRotateCamera,
SceneLoader (STL, glTF), physics, particles, and post-processing.

```html
<canvas id="renderCanvas"></canvas>
<script src="/static/js/vendor/babylon/babylon.js"></script>
<script>
  var canvas = document.getElementById('renderCanvas');
  var engine = new BABYLON.Engine(canvas, true);
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.ArcRotateCamera('cam', -Math.PI/4, Math.PI/3, 10,
    BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
  engine.runRenderLoop(function () { scene.render(); });
  window.addEventListener('resize', function () { engine.resize(); });
</script>
```

## ECharts 5.6

**Size:** 1010 KB (minified UMD)  
**Path:** `/static/js/vendor/echarts/echarts.min.js`  
**Global:** `echarts`  
**License:** Apache-2.0

Rich charting library: bar, line, pie, scatter, radar, heatmap, treemap,
sunburst, sankey, graph, geographic maps, candlestick, boxplot, and more.
Dark theme built in.

![ECharts treemap widget — source code visualization](echarts-treemap-widget.png)

```html
<div id="chart" style="width:100%;height:400px"></div>
<script src="/static/js/vendor/echarts/echarts.min.js"></script>
<script>
  var chart = echarts.init(document.getElementById('chart'), 'dark');
  chart.setOption({
    xAxis: { data: ['A', 'B', 'C'] },
    yAxis: {},
    series: [{ type: 'bar', data: [10, 20, 30] }]
  });
  window.addEventListener('resize', function () { chart.resize(); });
</script>
```

## D3 7.9

**Size:** 274 KB (minified UMD)  
**Path:** `/static/js/vendor/d3/d3.min.js`  
**Global:** `d3`  
**License:** ISC

Low-level data visualization toolkit: selections, scales, axes, shapes,
transitions, force-directed layouts, geographic projections, hierarchical
layouts (treemap, pack, partition, cluster), Voronoi, contours, and more.

```html
<svg id="viz" width="600" height="400"></svg>
<script src="/static/js/vendor/d3/d3.min.js"></script>
<script>
  var svg = d3.select('#viz');
  // Full D3 API available
</script>
```

## Widget bridge

All interactive widgets get `window.piclawWidget` automatically:

```js
piclawWidget.submit({ text: "message" })   // Send text back into the chat
piclawWidget.close({ reason: "done" })      // Programmatic dismiss (pane already has its own close button)
piclawWidget.requestRefresh({ key: "val" }) // Ask host for data

// Listen for host responses:
window.addEventListener('piclaw:widget-message', function (e) {
  var payload = e.detail && e.detail.payload;
});
```
