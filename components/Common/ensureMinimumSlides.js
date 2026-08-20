// Pads `items` up to `minCount` by cloning existing entries (cycling
// through them in order) when there aren't enough - a generic presentation
// aid for anything that needs a minimum item count to look right with
// fewer real items (carousels, grids, ...), not specific to any one
// component or page's data. Cloned entries keep every field from their
// source (so they render/behave identically) but get a unique `id` so
// consumers that key off `id` don't collide. Returns `items` unchanged
// (same reference) when there's nothing to pad, and never mutates the
// input array.
export function ensureMinimumSlides(items, minCount) {
  if (!items || items.length === 0 || items.length >= minCount) return items;

  const padded = [...items];
  let sourceIndex = 0;
  let cloneNumber = 1;
  while (padded.length < minCount) {
    const source = items[sourceIndex % items.length];
    padded.push({ ...source, id: `${source.id ?? sourceIndex}-clone-${cloneNumber}` });
    sourceIndex += 1;
    cloneNumber += 1;
  }
  return padded;
}
