// Repeatable bidirectional viewport config: replays smoothly on both downward and upward scroll.
// Initial states use readable opacity (>= 0.25) so elements NEVER get trapped invisible.
export const repeatViewport = {
  once: false,
  amount: 0.15 as const,
};

export const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];
