# Practical 7 — Data Visualization Dashboard

A React-based analytics dashboard built with multiple charting libraries, created as part of the WEB101 practical series.

## Overview

This project implements an interactive sales analytics dashboard featuring four distinct chart types using two different charting libraries — Recharts and react-chartjs-2.

## Features

- **Monthly Sales Performance** — Line chart tracking Sales, Profit, and Target over 12 months
- **Product Category Distribution** — Pie chart showing category breakdown by percentage
- **Customer Acquisition** — Stacked bar chart comparing new vs returning customers
- **Weekly Visitors** — Area chart visualizing weekly website traffic trends

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — Build tool and dev server
- [Recharts](https://recharts.org/) — Line and Pie charts
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) — Bar and Area charts
- [date-fns](https://date-fns.org/) — Date formatting

## Project Structure
src/
├── components/
│   ├── MonthlySalesChart.jsx       # Line chart (Recharts)
│   ├── ProductCategoryChart.jsx    # Pie chart (Recharts)
│   ├── CustomerAcquisitionChart.jsx # Bar chart (react-chartjs-2)
│   └── WeeklyVisitorsChart.jsx     # Area chart (react-chartjs-2)
├── data/
│   └── salesData.js                # Static datasets for all charts
├── App.jsx                         # Dashboard layout
└── App.css                         # Dashboard styles

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation
cd Data-Visualisation
npm install

### Run the development server

npm run dev

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Charts Breakdown

### 1. Monthly Sales Chart — Recharts LineChart
Displays three data series (Sales, Profit, Target) with a monotone curve. The Target line uses a dashed stroke to visually distinguish it as a reference value. Tooltip values are formatted with dollar signs and locale-aware number formatting.

### 2. Product Category Chart — Recharts PieChart
Each slice is colored from a predefined COLORS array that cycles automatically, so any number of categories is supported. Labels show both the category name and its percentage share.

### 3. Customer Acquisition Chart — react-chartjs-2 Bar
A stacked bar chart built with Chart.js. Dates from the dataset are parsed with `date-fns` and formatted as "MMM yyyy". All required Chart.js components (CategoryScale, LinearScale, BarElement) are registered before use.

### 4. Weekly Visitors Chart — react-chartjs-2 Line (Area)
Uses the `fill: true` option together with the `Filler` plugin to create an area effect. The y-axis does not begin at zero so the trend shape is more visible.

## Data

All charts consume static data from `src/data/salesData.js`, which exports four named arrays: `monthlySales`, `productSales`, `customerData`, and `weeklyVisitors`.