@AGENTS.md

# Instrucciones Específicas para Claude Code

1. **Protocolo Maestro:** Cumple estrictamente todas las directivas, roles y reglas de compuerta (Gatekeeping) especificadas en `@AGENTS.md`.
2. **Habilidades:** Consulta e invoca habilidades desde `.claude/skills/` (ej. `.claude/skills/bootstrap-startup/SKILL.md` y `.claude/skills/grill-me/SKILL.md`).
3. **Reglas del Sistema:** Lee y obedece las reglas modulares ubicadas en `.claude/rules/`:
   - `01-seguridad-owasp.md`
   - `02-arquitectura-limpia.md`
   - `03-calidad-testing.md`
4. **Subagente Auditor:** Antes de dar por finalizada una tarea en `tasks.md` o sugerir un commit, ejecuta la auditoría usando el subagente `.claude/agents/code-reviewer.md`.
5. **Gobernanza:** Respeta los hooks configurados en `.claude/settings.json` que previenen escritura prematura de código y comandos de shell peligrosos.
