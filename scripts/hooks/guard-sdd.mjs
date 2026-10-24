#!/usr/bin/env node
// Hook PreToolUse (matcher "Edit|Write|MultiEdit"): Bloquea creación o edición de código fuente si specs/000-vision/vision.md sigue [EN BLANCO].
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { leerEntrada, registrar, responder, rutaRelativa, REPO_ROOT } from './lib.mjs';

const entrada = await leerEntrada();
const toolInput = entrada.tool_input ?? {};
const targetFile = toolInput.file_path ?? toolInput.path ?? toolInput.TargetFile ?? '';
const rutaRel = rutaRelativa(targetFile);

// Carpetas consideradas código fuente
const CARPETAS_CODIGO = [
  'src/', 'app/', 'backend/', 'frontend/', 'pages/',
  'components/', 'api/', 'lib/', 'server/'
];

const esCodigoFuente = CARPETAS_CODIGO.some(
  (dir) => rutaRel.startsWith(dir) || rutaRel.includes('/' + dir)
);

if (esCodigoFuente) {
  const visionPath = join(REPO_ROOT, 'specs', '000-vision', 'vision.md');
  let estaEnBlanco = true;

  if (existsSync(visionPath)) {
    try {
      const contenido = readFileSync(visionPath, 'utf8');
      estaEnBlanco = contenido.includes('[EN BLANCO]');
    } catch {
      estaEnBlanco = true;
    }
  }

  if (estaEnBlanco) {
    const motivo = 'BLOQUEO DEL ARNÉS SDD: No puedes escribir código fuente mientras specs/000-vision/vision.md esté [EN BLANCO]. Ejecuta primero la habilidad bootstrap-startup y entrevista al fundador.';
    
    registrar('bloqueos-sdd.jsonl', {
      timestamp: new Date().toISOString(),
      archivo_intentado: rutaRel,
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
      2 // Exit code 2 indica bloqueo determinista
    );
  }
}

// Permitido: no es código fuente o vision.md ya fue completado
responder({});
