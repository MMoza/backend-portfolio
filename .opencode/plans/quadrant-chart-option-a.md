# Quadrant Chart Implementation Plan (Option A)

## Visual Concept

A single scatter plot with **4 points** (one per architecture) divided into 4 quadrants:

```
                    Fragility (higher = more fragile)
                    ↑
     ┌──────────────┼──────────────
     │              │              │
  10 │    A01       │              │  ← "Simple but Fragile"
     │   (6, 10)    │              │
     │              │              │
   5 │──────────────┼──────────────│  ← Midpoint
     │              │              │
     │              │    A03       │
   2 │              │   (14, 5.5)  │  ← "Complex but Robust"
     │              │    A04       │
     │              │   (22, 2)    │
     ──────────────┼──────────────┘
         6         14             22
              Simplicity (files count)
```

**Quadrants:**
- **Top-Left**: Simple but Fragile (A01 lives here)
- **Bottom-Right**: Complex but Robust (A04 lives here)
- **Center**: Balanced trade-off (A02, A03)

---

## Data Structure

```typescript
const quadrantChartData = {
  datasets: [
    {
      label: "A01 — Monolithic",
      data: [{ x: 6, y: 10 }],
      borderColor: "#3b82f6",
      backgroundColor: "#3b82f6",
      pointRadius: 8,
      pointHoverRadius: 10
    },
    {
      label: "A02 — Repository",
      data: [{ x: 10, y: 7 }],
      borderColor: "#a855f7",
      backgroundColor: "#a855f7",
      pointRadius: 8,
      pointHoverRadius: 10
    },
    {
      label: "A03 — Strategy",
      data: [{ x: 14, y: 5.5 }],
      borderColor: "#10b981",
      backgroundColor: "#10b981",
      pointRadius: 8,
      pointHoverRadius: 10
    },
    {
      label: "A04 — Decorator",
      data: [{ x: 22, y: 2 }],
      borderColor: "#f59e0b",
      backgroundColor: "#f59e0b",
      pointRadius: 8,
      pointHoverRadius: 10
    }
  ]
};
```

**Note**: Using P04 (final phase) fragility scores as the "end state" of each architecture.

---

## Chart Configuration

```typescript
const quadrantChartOptions = {
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
          const arch = context.dataset.label;
          return `${arch}: ${point.x} files, fragility ${point.y}/10`;
        }
      }
    },
    annotation: {
      annotations: {
        // Vertical line at midpoint (x=14)
        midlineX: {
          type: "line",
          xMin: 14,
          xMax: 14,
          borderColor: "rgba(156, 163, 175, 0.5)",
          borderWidth: 2,
          borderDash: [5, 5]
        },
        // Horizontal line at midpoint (y=6)
        midlineY: {
          type: "line",
          yMin: 6,
          yMax: 6,
          borderColor: "rgba(156, 163, 175, 0.5)",
          borderWidth: 2,
          borderDash: [5, 5]
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Simplicity → (fewer files = simpler)",
        font: { size: 14, weight: "bold" }
      },
      min: 0,
      max: 28,
      grid: {
        drawBorder: false
      }
    },
    y: {
      title: {
        display: true,
        text: "Fragility → (higher = more fragile)",
        font: { size: 14, weight: "bold" }
      },
      min: 0,
      max: 12,
      grid: {
        drawBorder: false
      }
    }
  }
};
```

---

## Files to Modify

### 1. `src/pages/projects/architecture-comparison/index.astro`

**Key insight**: The `ResponsiveChart` component only supports `'line' | 'bar'` types and has hardcoded tooltip logic that won't work for scatter plots. 

**Approach**: Create the quadrant chart **inline** in the page instead of using `ResponsiveChart`:

**Replace** lines 337-361 (Charts Section) with:

```astro
<!-- Charts Section -->
<section class="mb-16">
  <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
    {t.architectureComparison.charts.quadrant.title}
  </h2>

  <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg">
    {t.architectureComparison.charts.quadrant.caption}
  </p>

  <div class="relative w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
    <canvas id="quadrantChart" style="max-height: 500px;"></canvas>
  </div>

  {caption && <p class="mt-3 text-sm text-gray-600 dark:text-gray-400 italic">{t.architectureComparison.charts.quadrant.caption}</p>}
</section>

<script is:inline src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script is:inline src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>

<script>
  function initQuadrantChart() {
    if (!window.Chart) {
      setTimeout(initQuadrantChart, 100);
      return;
    }

    const canvas = document.getElementById('quadrantChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#9ca3af' : '#4b5563';
    const gridColor = isDark ? '#374151' : '#e5e7eb';

    const chartData = {
      datasets: [
        {
          label: 'A01 — Monolithic',
          data: [{ x: 6, y: 10 }],
          borderColor: '#3b82f6',
          backgroundColor: '#3b82f6',
          pointRadius: 10,
          pointHoverRadius: 12,
          pointBorderWidth: 3,
          pointBorderColor: isDark ? '#111827' : '#ffffff'
        },
        {
          label: 'A02 — Repository',
          data: [{ x: 10, y: 7 }],
          borderColor: '#a855f7',
          backgroundColor: '#a855f7',
          pointRadius: 10,
          pointHoverRadius: 12,
          pointBorderWidth: 3,
          pointBorderColor: isDark ? '#111827' : '#ffffff'
        },
        {
          label: 'A03 — Strategy',
          data: [{ x: 14, y: 5.5 }],
          borderColor: '#10b981',
          backgroundColor: '#10b981',
          pointRadius: 10,
          pointHoverRadius: 12,
          pointBorderWidth: 3,
          pointBorderColor: isDark ? '#111827' : '#ffffff'
        },
        {
          label: 'A04 — Decorator',
          data: [{ x: 22, y: 2 }],
          borderColor: '#f59e0b',
          backgroundColor: '#f59e0b',
          pointRadius: 10,
          pointHoverRadius: 12,
          pointBorderWidth: 3,
          pointBorderColor: isDark ? '#111827' : '#ffffff'
        }
      ]
    };

    new window.Chart(ctx, {
      type: 'scatter',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: textColor,
              usePointStyle: true,
              padding: 15,
              font: { size: 12, weight: '500' }
            }
          },
          tooltip: {
            backgroundColor: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.9)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: gridColor,
            borderWidth: 1,
            padding: 12,
            callbacks: {
              label: function(context) {
                const point = context.raw;
                return `${context.dataset.label}: ${point.x} files, fragility ${point.y}/10`;
              }
            }
          },
          annotation: {
            annotations: {
              midlineX: {
                type: 'line',
                xMin: 14,
                xMax: 14,
                borderColor: gridColor,
                borderWidth: 2,
                borderDash: [6, 6]
              },
              midlineY: {
                type: 'line',
                yMin: 6,
                yMax: 6,
                borderColor: gridColor,
                borderWidth: 2,
                borderDash: [6, 6]
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Simplicity → (fewer files = simpler)',
              color: textColor,
              font: { size: 14, weight: 'bold' }
            },
            min: 0,
            max: 28,
            ticks: {
              color: textColor,
              stepSize: 4
            },
            grid: {
              color: gridColor,
              drawBorder: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'Fragility → (higher = more fragile)',
              color: textColor,
              font: { size: 14, weight: 'bold' }
            },
            min: 0,
            max: 12,
            ticks: {
              color: textColor,
              stepSize: 2
            },
            grid: {
              color: gridColor,
              drawBorder: false
            }
          }
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuadrantChart);
  } else {
    initQuadrantChart();
  }
</script>
```

**Also remove** from the frontmatter (lines 13-101):
- `fragilityVsSimplicityData`
- `scatterChartOptions`

### 2. Translations

**File:** `src/translations/en/architectureComparison.ts`

Replace `charts` section:
```typescript
charts: {
  quadrant: {
    title: "Architecture Trade-off Map",
    caption: "Where does each architecture live in the simplicity vs fragility space? The ideal is bottom-left (simple AND robust), but reality forces trade-offs."
  }
},
```

**File:** `src/translations/es/architectureComparison.ts`

Replace `charts` section:
```typescript
charts: {
  quadrant: {
    title: "Mapa de Compromisos Arquitectónicos",
    caption: "¿Dónde se sitúa cada arquitectura en el espacio de simplicidad vs fragilidad? El ideal es abajo-izquierda (simple Y robusto), pero la realidad obliga a hacer compromisos."
  }
},
```

---

## Alternative: No Annotation Plugin

If `chartjs-plugin-annotation` is not available or adds complexity, we can:

1. **Skip the quadrant lines** - just show the 4 points with clear axis labels
2. **Add HTML overlay** with quadrant labels positioned absolutely over the chart
3. **Use a simpler visual** - just the scatter plot with good tooltips

---

## Questions

1. **Do you want the quadrant lines** (dashed lines dividing the chart into 4 zones)?
   - Requires `chartjs-plugin-annotation`
   - Adds visual clarity but needs plugin setup

2. **Should I check the ResponsiveChart component** first to see how it handles plugins?

3. **Data values**: Using P04 fragility scores (final state). Does this match your intent, or should I use averages across all phases?
