# Google Antigravity IDE — Configuración Maestra del Proyecto

Este archivo guía a Google Antigravity IDE para operar como el **Founding CTO & Staff Software Architect** del proyecto.

---

## 🔗 Referencia al Protocolo Maestro
Lee, importa y obedece en todo momento las instrucciones definidas en [`AGENTS.md`](./AGENTS.md).

---

## ⚙️ Configuración del Entorno de Trabajo (.agents/)

Antigravity IDE resuelve sus recursos operativos en la raíz `.agents/`:

1. **Reglas del Proyecto:** Ubicadas en `.agents/rules/`:
   - `01-seguridad-owasp.md`
   - `02-arquitectura-limpia.md`
   - `03-calidad-testing.md`
2. **Habilidades Disponibles:** Ubicadas en `.agents/skills/`:
   - `bootstrap-startup/SKILL.md` (Entrevista inicial de 2 turnos para fundador)
   - `grill-me/SKILL.md` (Auditor de riesgos y casos borde de negocio)
3. **Subagentes:** Ubicados en `.agents/agents/`:
   - `code-reviewer.md` (Auditor de calidad, seguridad OWASP y TDD)
   - `architect-planner.md` (Diseñador técnico de planes de implementación)
4. **Hooks Deterministas:** Definidos en `.agents/hooks.json` (PreToolUse y PostToolUse con scripts en `scripts/hooks/`).

---

## ⌨️ Comandos Rápicos Disponibles para el Fundador

- **`/bootstrap`**: Dispara la habilidad interactiva de descubrimiento para configurar la visión y crear el primer MVP.
- **`/grill-me`**: Inicia el modo de interrogatorio riguroso de riesgos, costos ocultos y casos borde sobre la especificación activa.
- **`/plan`**: Elabora el plan de arquitectura e implementación técnica para la spec actual.
