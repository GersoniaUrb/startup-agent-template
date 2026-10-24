// Utilidades compartidas por los hooks de gobernanza del Arnés SDD (Node.js nativo multiplataforma)
import { appendFileSync, mkdirSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Raíz del repositorio: scripts/hooks/ -> ../.. o variable de entorno
const scriptDir = dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = resolve(process.env.PROJECT_DIR || process.env.CLAUDE_PROJECT_DIR || join(scriptDir, '..', '..'));
export const AUDIT_DIR = join(REPO_ROOT, '.audit');

/** Lee todo stdin y lo parsea como JSON. Devuelve {} si está vacío o falla. */
export async function leerEntrada() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  const texto = Buffer.concat(chunks).toString('utf8').trim();
  if (!texto) return {};
  try {
    return JSON.parse(texto);
  } catch {
    return {};
  }
}

/** Escribe la respuesta del hook en stdout como JSON. */
export function responder(objeto, exitCode = 0) {
  process.stdout.write(JSON.stringify(objeto) + '\n');
  if (exitCode !== 0) {
    process.exit(exitCode);
  }
}

/** Agrega una línea JSONL al archivo de auditoría en .audit/ */
export function registrar(archivo, evento) {
  try {
    mkdirSync(AUDIT_DIR, { recursive: true });
    appendFileSync(join(AUDIT_DIR, archivo), JSON.stringify(evento) + '\n', 'utf8');
  } catch (err) {
    // La auditoría nunca debe interrumpir el flujo
  }
}

/** Retorna la ruta relativa al repositorio con separador normalizado '/' */
export function rutaRelativa(ruta) {
  if (!ruta) return ruta;
  const rel = isAbsolute(ruta) ? relative(REPO_ROOT, ruta) : ruta;
  return rel.split('\\').join('/');
}
