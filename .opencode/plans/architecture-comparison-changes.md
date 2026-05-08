# Architecture Comparison Page - Implementation Plan

## Changes Overview

### 1. Replace 3 charts with 1 "Fragility vs Simplicity" scatter plot

**File:** `src/pages/projects/architecture-comparison/index.astro`

#### Remove (lines 14-157):
- `linesOfCodeData`
- `controllerSizeData`
- `accumulatedGrowthData`
- `lineChartOptions`
- `barChartOptions`

#### Add new scatter plot data:
```typescript
const fragilityVsSimplicityData = {
  datasets: [
    {
      label: "A01 — Monolithic",
      data: [
        { x: 6, y: 6, phase: "P01" },
        { x: 6, y: 7.5, phase: "P02" },
        { x: 6, y: 9, phase: "P03" },
        { x: 6, y: 10, phase: "P04" }
      ],
      borderColor: "#3b82f6",
      backgroundColor: "#3b82f680"
    },
    {
      label: "A02 — Repository",
      data: [
        { x: 10, y: 4, phase: "P01" },
        { x: 10, y: 5, phase: "P02" },
        { x: 10, y: 6, phase: "P03" },
        { x: 10, y: 7, phase: "P04" }
      ],
      borderColor: "#a855f7",
      backgroundColor: "#a855f780"
    },
    {
      label: "A03 — Strategy",
      data: [
        { x: 14, y: 3, phase: "P01" },
        { x: 14, y: 4, phase: "P02" },
        { x: 14, y: 5, phase: "P03" },
        { x: 14, y: 5.5, phase: "P04" }
      ],
      borderColor: "#10b981",
      backgroundColor: "#10b98180"
    },
    {
      label: "A04 — Decorator",
      data: [
        { x: 22, y: 5, phase: "P01" },
        { x: 22, y: 4, phase: "P02" },
        { x: 22, y: 3, phase: "P03" },
        { x: 22, y: 2, phase: "P04" }
      ],
      borderColor: "#f59e0b",
      backgroundColor: "#f59e0b80"
    }
  ]
};

const scatterChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          const point = context.raw;
          return `${context.dataset.label}: Files=${point.x}, Fragility=${point.y}/10 (${point.phase})`;
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Simplicity (files count) — fewer is simpler"
      },
      grid: {
        drawBorder: false
      }
    },
    y: {
      title: {
        display: true,
        text: "Fragility (1-10) — higher is more fragile"
      },
      beginAtZero: true,
      max: 11,
      grid: {
        drawBorder: false
      }
    }
  }
};
```

#### Update chart section (lines 393-427):
Replace:
```astro
<section class="mb-16">
  <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
     Visual Evolution
  </h2>

  <div class="space-y-12">
    <ResponsiveChart
      id="linesOfCodeChart"
      type="line"
      data={linesOfCodeData}
      options={lineChartOptions}
      title={t.architectureComparison.charts.lineOfCode.title}
      caption={t.architectureComparison.charts.lineOfCode.caption}
    />

    <ResponsiveChart
      id="controllerSizeChart"
      type="line"
      data={controllerSizeData}
      options={lineChartOptions}
      title={t.architectureComparison.charts.controllerSize.title}
      caption={t.architectureComparison.charts.controllerSize.caption}
    />

    <ResponsiveChart
      id="accumulatedGrowthChart"
      type="bar"
      data={accumulatedGrowthData}
      options={barChartOptions}
      title={t.architectureComparison.charts.accumulatedGrowth.title}
      caption={t.architectureComparison.charts.accumulatedGrowth.caption}
    />
  </div>
</section>
```

With:
```astro
<section class="mb-16">
  <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
    📊 Fragility vs Simplicity Trade-off
  </h2>

  <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg">
    This chart shows the core tension in architecture design: simplicity (fewer files) vs fragility (risk of breaking changes). Each point represents a phase, with arrows showing how architectures evolve as complexity grows.
  </p>

  <div class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 mb-8 bg-gray-50 dark:bg-gray-900/50">
    <p class="text-sm text-gray-600 dark:text-gray-400">
      <span class="font-semibold">Key insight:</span> A01 starts as the simplest (6 files) but becomes the most fragile. A04 starts complex (22 files) but becomes the most robust. The question is: where do you want to pay the cost?
    </p>
  </div>

  <ResponsiveChart
    id="fragilityVsSimplicityChart"
    type="scatter"
    data={fragilityVsSimplicityData}
    options={scatterChartOptions}
    title={t.architectureComparison.charts.fragilityVsSimplicity.title}
    caption={t.architectureComparison.charts.fragilityVsSimplicity.caption}
  />
</section>
```

---

### 2. Horizontal scroll for architecture cards

**File:** `src/pages/projects/architecture-comparison/index.astro` (lines 227-274)

Replace:
```astro
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {["a01", "a02", "a03", "a04"].map((archId) => {
    // ... card content
  })}
</div>
```

With:
```astro
<div class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
  {["a01", "a02", "a03", "a04"].map((archId) => {
    const arch = t.architectureComparison.architectures[archId];
    const gradients = {
      a01: "from-blue-500/10 to-blue-400/5",
      a02: "from-purple-500/10 to-purple-400/5",
      a03: "from-emerald-500/10 to-emerald-400/5",
      a04: "from-amber-500/10 to-amber-400/5"
    };

    return (
      <a
        href={`${langPrefix}/projects/architecture-comparison/${archId}/`}
        class={`group arch-gradient flex-shrink-0 w-72 md:w-80 snap-start rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-gradient-to-br ${gradients[archId]} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
      >
        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {arch.name}
        </h3>

        <p class="text-sm text-gray-500 dark:text-gray-500 mb-3">
          {arch.pattern}
        </p>

        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span class="font-medium">Philosophy:</span> {arch.philosophy}
        </p>

        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span class="font-medium">Strength:</span> {arch.strength}
        </p>

        <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
          {arch.link}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    );
  })}
</div>
```

---

### 3. Update translations

**File:** `src/translations/en/architectureComparison.ts`

Replace the `charts` section (lines 111-124):
```typescript
charts: {
  fragilityVsSimplicity: {
    title: "Fragility vs Simplicity Trade-off",
    caption: "How architectures evolve: simplicity (fewer files) vs fragility (risk of breaking changes). Arrows show progression from Phase 01 to Phase 04.",
    xAxis: "Simplicity (files count)",
    yAxis: "Fragility (1-10 scale)"
  }
},
```

**File:** `src/translations/es/architectureComparison.ts`

Replace the `charts` section (lines 111-124):
```typescript
charts: {
  fragilityVsSimplicity: {
    title: "Compromiso Fragilidad vs Simplicidad",
    caption: "Cómo evolucionan las arquitecturas: simplicidad (menos archivos) vs fragilidad (riesgo de cambios). Las flechas muestran la progresión de Fase 01 a Fase 04.",
    xAxis: "Simplicidad (número de archivos)",
    yAxis: "Fragilidad (escala 1-10)"
  }
},
```

---

## Summary of Changes

| File | Change |
|------|--------|
| `index.astro` | Remove 3 old charts, add 1 scatter plot, update cards to horizontal scroll |
| `en/architectureComparison.ts` | Update charts translations |
| `es/architectureComparison.ts` | Update charts translations (Spanish) |

## Visual Result

**Cards:** 4 architecture cards in a single row with horizontal scroll on smaller screens, snap scrolling for better UX.

**Chart:** A scatter plot where:
- X-axis = number of files (simplicity)
- Y-axis = fragility score (1-10)
- Each architecture has 4 points (one per phase) connected by arrows
- Shows the trade-off: A01 moves up (more fragile), A04 moves down (less fragile)
