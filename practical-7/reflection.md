# Reflection — Practical 7: Data Visualization

## What I Built

In this practical I built a Sales Analytics Dashboard using React and two different charting libraries — Recharts and react-chartjs-2. The dashboard displays four charts: a line chart for monthly sales performance, a pie chart for product category distribution, a stacked bar chart for customer acquisition, and an area chart for weekly visitor trends.

## What I Learned

### Working with Multiple Charting Libraries

One of the most valuable things this practical taught me was that there is no single "best" charting library — different libraries suit different use cases. Recharts felt more natural in React because its API is entirely component-based. Writing `<LineChart>`, `<Line>`, and `<XAxis>` as JSX tags felt consistent with how the rest of a React app is written.

Chart.js with react-chartjs-2 took a different approach. Instead of JSX components for each chart element, configuration is passed as a JavaScript object through a `data` and `options` prop. This felt more imperative but gave very fine-grained control over tooltips, scales, and plugins.

### Component Registration in Chart.js

The biggest gotcha I encountered was with Chart.js — you must manually register every component you use (scales, elements, plugins) with `ChartJS.register()` before rendering any chart. Forgetting to register the `Filler` plugin, for example, means `fill: true` silently does nothing and the area chart looks like a plain line chart. This was not obvious from the documentation at first glance.

### Responsive Charts

Both libraries require a wrapper to make charts responsive. In Recharts this is `<ResponsiveContainer width="100%" height="100%">`, and in react-chartjs-2 it is handled by setting `responsive: true` and `maintainAspectRatio: false` in the options object, combined with a parent container that has a fixed height. Without the fixed height on the parent `div`, the chart either collapses to zero height or stretches infinitely.

### Data Transformation

The `customerData` array stores dates as ISO strings like `"2024-01-01"`. I learned to use `date-fns` — specifically `parseISO` and `format` — to convert these into readable labels like "Jan 2024" for the chart axes. This was a good reminder that raw data almost always needs to be transformed before it can be displayed.

### State and useEffect for Chart.js

Unlike Recharts which accepts data directly as a prop, react-chartjs-2 expects a specific `{ labels, datasets }` shape. I used `useState` to hold this formatted data object and `useEffect` to build it from the raw imported data on mount. This pattern will be useful whenever chart data comes from an API call in a real project.

## Challenges

The most confusing part was the `ResponsiveContainer` in Recharts. When the parent `div` had no explicit height, the container had nothing to measure and the chart would not render. Setting `height: 300px` on the `.chartContainer` class in CSS fixed this immediately. It was a simple fix but took time to diagnose.

Another challenge was keeping two different charting library APIs in mind at the same time. Switching between writing JSX components for Recharts and writing configuration objects for Chart.js required a mental context switch each time.

## What I Would Do Differently

If I were building this for a real project I would pick one library and use it consistently throughout, to reduce the cognitive overhead of maintaining two different mental models. I would also move the chart data and options into separate files or custom hooks to keep the component files shorter and easier to read.

## Conclusion

This practical gave me hands-on experience with the core workflow of data visualization in React: importing data, transforming it into the shape a library expects, and rendering it inside responsive containers. I now feel confident using both Recharts and react-chartjs-2, and I understand the tradeoffs between their different approaches to configuration.