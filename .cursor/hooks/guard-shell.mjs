#!/usr/bin/env node
// Hook PreToolUse (matcher "Bash|run_command"): Bloquea comandos destructivos o de riesgo para el fundador.
import { leerEntrada, registrar, responder } from './lib.mjs';

const REGLAS = [
  {
    id: 'rm-recursivo-raiz-o-punto',
    patron: /\brm\s+(?:-[a-z]*r[a-z]*f[a-z]*|-[a-z]*f[a-z]*r[a-z]*)\s+(?:\/|\.|\.\/|\*|\.\.\/)\b/i,
    motivo: 'borrado recursivo destructivo en raíz o directorio actual (rm -rf)',
  },
  {
    id: 'remove-item-recurse-force',
    patron: /\bRemove-Item\b.*-Recurse\b.*-Force\b|\bRemove-Item\b.*-Force\b.*-Recurse\b|\brmdir\s+\/s\b|\brd\s+\/s\b|\bdel\s+\/[sfq]/i,
    motivo: 'borrado recursivo forzado de archivos en Windows',
  },
  {
    id: 'git-push-force',
    patron: /\bgit\s+push\b[^|;&]*(?:\s--force(?:-with-lease)?\b|\s-f\b|\s\+\S)/i,
    motivo: 'git push forzado que puede destruir ramas remotas',
  },
  {
    id: 'git-reset-hard',
    patron: /\bgit\s+reset\s+--hard\b/i,
    motivo: 'git reset --hard que descarta permanentemente cambios locales no guardados',
  },
  {
    id: 'leer-secretos-env',
    patron: /\b(?:cat|type|Get-Content|gc|head|tail|more|less)\s+.*\.env(?:\.local|\.production)?\b/i,
    motivo: 'lectura directa en terminal de archivos de secretos (.env)',
  },
  {
    id: 'drop-database-table',
    patron: /\bDROP\s+(?:TABLE|DATABASE|SCHEMA)\b/i,
    motivo: 'destrucción de base de datos o tablas (DROP TABLE/DATABASE)',
  },
  {
    id: 'truncate-table',
    patron: /\bTRUNCATE\s+TABLE\b/i,
    motivo: 'vaciado forzado de tabla (TRUNCATE TABLE)',
  },
  {
    id: 'pipe-a-shell',
    patron: /\b(?:curl|wget|iwr|Invoke-WebRequest|irm|Invoke-RestMethod)\b[^|]*\|\s*(?:sudo\s+)?(?:sh|bash|zsh|iex|Invoke-Expression|powershell|pwsh|python3?|node)\b/i,
    motivo: 'descargar y ejecutar código remoto directamente en la shell (curl | sh)',
  },
];

const entrada = await leerEntrada();
const toolInput = entrada.tool_input ?? {};
const comando = String(toolInput.command ?? toolInput.CommandLine ?? '');

const regla = REGLAS.find((r) => r.patron.test(comando));

if (regla) {
  const motivo = `COMANDO BLOQUEADO POR POLÍTICA DE SEGURIDAD: ${regla.motivo} (regla "${regla.id}"). Propón una alternativa segura o consulta al fundador.`;

  registrar('shell-denegados.jsonl', {
    timestamp: new Date().toISOString(),
    regla: regla.id,
    comando,
    motivo,
  });

  responder(
    {
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: motivo,
      },
    },
    2
  );
} else {
  responder({});
}
