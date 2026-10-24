#!/usr/bin/env node
// Hook PostToolUse (matcher "Edit|Write|MultiEdit"): Registro de auditoría silenciosa en .audit/edits.jsonl
import { leerEntrada, registrar, rutaRelativa } from './lib.mjs';

const entrada = await leerEntrada();
const toolInput = entrada.tool_input ?? {};
const targetFile = toolInput.file_path ?? toolInput.path ?? toolInput.TargetFile ?? '';

try {
  registrar('edits.jsonl', {
    timestamp: new Date().toISOString(),
    herramienta: entrada.tool_name ?? 'unknown',
    archivo: rutaRelativa(targetFile),
    usuario: process.env.USERNAME || process.env.USER || 'vibe-coder',
  });
} catch {
  // La auditoría silenciosa nunca interrumpe la ejecución
}

process.stdout.write('{}\n');
