# CLAUDE.md

Lee y obedece las instrucciones y reglas maestras definidas en [AGENTS.md](./AGENTS.md).

## Comportamiento Específico para Claude Code
1. Si el proyecto está en blanco o `specs/000-vision/vision.md` tiene `[EN BLANCO]`, ejecuta la habilidad `bootstrap-startup` y entrevista al fundador.
2. Sigue las reglas de `.claude/rules/` en todo momento.
3. Para revisar código o verificar calidad antes de hacer commit, invoca al subagente `.claude/agents/code-reviewer.md`.
