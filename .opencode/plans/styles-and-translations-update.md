# Architecture Comparison Page - Style & Translation Updates

## Task 1: Restyle "The Experiment" question box

**Current state (lines 72-78):**
```astro
<div class="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-6 mb-8">
  <p class="text-blue-900 dark:text-blue-200 font-semibold text-lg">
    {t.architectureComparison.experiment.question}
  </p>
</div>
```

**Issue:** The blue info-box style feels too "documentation-like" and doesn't match the experimental/lab feel of the page.

**Proposed alternatives:**

### Option A: Gradient banner with icon
```astro
<div class="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 mb-8">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
      <svg class="w-6 h-6 text-white" ...>💡 icon</svg>
    </div>
    <p class="text-white font-semibold text-lg leading-relaxed">
      {t.architectureComparison.experiment.question}
    </p>
  </div>
</div>
```

### Option B: Minimal quote-style
```astro
<blockquote class="border-l-4 border-blue-500 pl-6 py-4 mb-8">
  <p class="text-xl font-medium text-gray-900 dark:text-gray-100 italic">
    {t.architectureComparison.experiment.question}
  </p>
</blockquote>
```

### Option C: Dark card with glow effect
```astro
<div class="relative rounded-xl border border-gray-700 bg-gray-900 dark:bg-gray-800 p-8 mb-8">
  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
  <p class="relative text-xl font-semibold text-gray-100 dark:text-gray-50 text-center">
    {t.architectureComparison.experiment.question}
  </p>
</div>
```

---

## Task 2: Restyle CTA Section ("Ready to dive deeper?")

**Current state (lines 549-578):**
```astro
<section class="text-center">
  <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
    {t.architectureComparison.cta.title}
  </h2>
  <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
    {t.architectureComparison.cta.description}
  </p>

  <div class="flex flex-wrap justify-center gap-4">
    {["a01", "a02", "a03", "a04"].map((archId) => (
      <a class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
        {arch.name}
      </a>
    ))}
  </div>

  <a class="mt-6 inline-block px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
    View Complete Rankings
  </a>
</section>
```

**Issue:** All buttons are blue (same color), doesn't differentiate architectures. The section feels flat.

**Proposed alternatives:**

### Option A: Architecture-colored buttons
```astro
<section class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 md:p-12">
  <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
    {t.architectureComparison.cta.title}
  </h2>
  <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
    {t.architectureComparison.cta.description}
  </p>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <a href="..." class="group px-6 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all">
      A01 — Monolithic
    </a>
    <a href="..." class="group px-6 py-4 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 hover:shadow-lg hover:-translate-y-1 transition-all">
      A02 — Repository
    </a>
    <a href="..." class="group px-6 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-1 transition-all">
      A03 — Strategy
    </a>
    <a href="..." class="group px-6 py-4 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 hover:shadow-lg hover:-translate-y-1 transition-all">
      A04 — Decorator
    </a>
  </div>

  <a href="..." class="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
    <svg>🏆 icon</svg>
    View Complete Rankings
  </a>
</section>
```

### Option B: Card grid with previews
```astro
<section>
  <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
    {t.architectureComparison.cta.title}
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {["a01", "a02", "a03", "a04"].map((archId) => {
      const arch = t.architectureComparison.architectures[archId];
      const colors = {
        a01: "from-blue-600 to-blue-700",
        a02: "from-purple-600 to-purple-700",
        a03: "from-emerald-600 to-emerald-700",
        a04: "from-amber-600 to-amber-700"
      };
      return (
        <a href="..." class={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colors[archId]} p-6 text-white hover:shadow-xl hover:-translate-y-2 transition-all`}>
          <h3 class="text-lg font-bold mb-2">{arch.name}</h3>
          <p class="text-sm text-white/80 mb-4">{arch.pattern}</p>
          <span class="inline-flex items-center gap-2 text-sm font-medium">
            View Details
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform">→</svg>
          </span>
        </a>
      );
    })}
  </div>

  <div class="text-center">
    <a href="..." class="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
      🏆 View Complete Rankings
    </a>
  </div>
</section>
```

---

## Task 3: Complete Spanish Translations for Architecture Pages

### Scope
~143 missing Spanish translations across 4 architecture detail pages.

### Files to modify:
1. `src/translations/es/architectureComparison.ts` - Add `architectureDetail` with per-architecture keys
2. `src/pages/projects/architecture-comparison/a01.astro` - Replace hardcoded English with translation keys
3. `src/pages/projects/architecture-comparison/a02.astro` - Same
4. `src/pages/projects/architecture-comparison/a03.astro` - Same
5. `src/pages/projects/architecture-comparison/a04.astro` - Same

### Translation structure to add:

```typescript
architectureDetail: {
  // Shared keys
  backToComparison: "← Volver a la Comparación",
  exploreCode: "Explora el Código",
  
  // Per-architecture content
  a01: {
    title: "A01 — Monolithic Eloquent",
    subtitle: "Uso directo del ORM con lógica de negocio en modelos y controladores",
    patternValue: "Active Record / Monolítico",
    philosophyValue: "Abraza el ORM como abstracción principal. Iteración rápida, mínimo boilerplate.",
    description: "A01 utiliza los modelos Laravel Eloquent directamente en la capa del controlador...",
    strengths: {
      header: "Fortalezas:",
      items: [
        "Mínimo boilerplate — empieza rápido",
        "Un solo archivo por entidad",
        "Fácil de entender para principiantes",
        "Sin patrones adicionales que aprender"
      ]
    },
    weaknesses: {
      header: "Debilidades:",
      items: [
        "Controlador se convierte en 'método Dios'",
        "Lógica de negocio acoplada al framework",
        "Difícil de testear sin base de datos",
        "Cambios afectan múltiples responsabilidades",
        "No escala con complejidad creciente"
      ]
    },
    warning: {
      label: "Advertencia",
      message: "El controlador creció 122% (83 → 184 líneas). Un solo método maneja 13 responsabilidades."
    },
    metrics: {
      totalFiles: { label: "Total de Archivos", value: "6", note: "Sin crecimiento entre fases" },
      totalLines: { label: "Total de Líneas de Código", value: "466", note: "+114% crecimiento P01→P04" },
      controllerSize: { label: "Tamaño del Controlador (Fase 04)", value: "184 líneas", note: "+101 líneas desde Fase 01" },
      testability: { label: "Puntuación de Testeabilidad", value: "Baja", note: "Requiere mocking de base de datos" }
    },
    conclusion: {
      bold: "La simplicidad tiene un coste exponencial.",
      paragraphs: [
        "A01 es el más rápido para empezar pero se vuelve inmanejable. El controlador crece linealmente con cada nueva regla de negocio.",
        "En la Fase 04, el único método del controlador maneja 13 responsabilidades diferentes. El descuento de early booking se parsea desde la cadena discount_reason — un hack frágil."
      ]
    },
    whenToUse: {
      title: "✓ Cuándo usar A01",
      items: [
        "Prototipos rápidos o MVPs",
        "Dominios estables que no cambiarán",
        "Equipos pequeños con poca experiencia en patrones"
      ]
    }
  },
  a02: { /* same structure */ },
  a03: { /* same structure */ },
  a04: { /* same structure */ }
}
```

### Implementation approach:
1. Add full translation structure to `es/architectureComparison.ts`
2. Update each `.astro` page to use `t.architectureComparison.architectureDetail.a01.title` etc.
3. Ensure all hardcoded English text is replaced with translation keys

---

## Questions for User

1. **For the experiment question box:** Which style option do you prefer? (A: gradient banner, B: quote-style, C: dark card with glow)

2. **For the CTA section:** Which style option do you prefer? (A: architecture-colored buttons in a card, B: card grid with previews)

3. **For translations:** Should I translate all ~143 strings, or do you have specific preferences for any of the content? (I'll translate everything to Spanish following the tone of existing translations)
