export function magnetMove(e: React.PointerEvent<HTMLElement>) {
  const btn = e.currentTarget;
  const inner = btn.querySelector<HTMLElement>('.magnet-inner');
  const r = btn.getBoundingClientRect();
  const mx = e.clientX - r.left - r.width / 2;
  const my = e.clientY - r.top - r.height / 2;
  btn.style.transform = `translate(${(mx * 0.3).toFixed(1)}px, ${(my * 0.45).toFixed(1)}px)`;
  if (inner) inner.style.transform = `translate(${(mx * 0.16).toFixed(1)}px, ${(my * 0.24).toFixed(1)}px)`;
}

export function magnetLeave(e: React.PointerEvent<HTMLElement>) {
  const btn = e.currentTarget;
  const inner = btn.querySelector<HTMLElement>('.magnet-inner');
  btn.style.transform = '';
  if (inner) inner.style.transform = '';
}
