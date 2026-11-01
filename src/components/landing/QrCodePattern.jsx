/* ------------------------------------------------------------------ */
/* QR code décoratif (motif déterministe dessiné en Tailwind pur)      */
/* Composant partagé : carte de santé, section téléchargement, etc.    */
/* ------------------------------------------------------------------ */

function buildQrMatrix(size = 21, seed = 20261009) {
  const matrix = Array.from({ length: size }, () => Array(size).fill(false));

  const drawFinder = (row, col) => {
    for (let r = 0; r < 7; r += 1) {
      for (let c = 0; c < 7; c += 1) {
        const isEdge = r === 0 || r === 6 || c === 0 || c === 6;
        const isCore = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        matrix[row + r][col + c] = isEdge || isCore;
      }
    }
  };

  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);

  // Motifs de synchronisation (ligne / colonne 6)
  for (let i = 8; i < size - 8; i += 1) {
    matrix[6][i] = i % 2 === 0;
    matrix[i][6] = i % 2 === 0;
  }

  // Motif d'alignement (bas droite)
  const align = size - 9;
  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < 5; c += 1) {
      const isEdge = r === 0 || r === 4 || c === 0 || c === 4;
      const isCore = r === 2 && c === 2;
      matrix[align + r][align + c] = isEdge || isCore;
    }
  }

  // Remplissage pseudo-aléatoire déterministe
  let state = seed;
  const next = () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };

  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      if (matrix[r][c]) continue;
      const inFinderZone = (r < 8 && c < 8) || (r < 8 && c >= size - 8) || (r >= size - 8 && c < 8);
      const inAlignZone = r >= align && r < align + 5 && c >= align && c < align + 5;
      if (inFinderZone || inAlignZone || r === 6 || c === 6) continue;
      matrix[r][c] = next() > 0.52;
    }
  }

  return matrix;
}

/* Cache module : évite de reconstruire le motif à chaque rendu (SSR + client) */
const matrixCache = new Map();

function getMatrix(size, seed) {
  const key = `${size}:${seed}`;
  if (!matrixCache.has(key)) {
    matrixCache.set(key, buildQrMatrix(size, seed));
  }
  return matrixCache.get(key);
}

export function QrCodePattern({
  size = 21,
  seed = 20261009,
  className = "",
  cellClassName = "bg-slate-900",
  ariaLabel = "QR code DrSan",
}) {
  const matrix = getMatrix(size, seed);

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`grid shrink-0 overflow-hidden ${className}`}
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${size}, minmax(0, 1fr))`,
      }}
    >
      {matrix.map((row, rowIndex) =>
        row.map((isOn, colIndex) => (
          <span key={`${rowIndex}-${colIndex}`} className={isOn ? cellClassName : undefined} />
        )),
      )}
    </div>
  );
}

export default QrCodePattern;
