# 🚀 AI-First Startup Canvas: El Arnés Universal para Vibe Coders

> **Plantilla de repositorio en blanco lista para orquestar la creación de una startup de nivel profesional utilizando agentes de Inteligencia Artificial (Antigravity, Claude Code, Cursor, Codex, GitHub Copilot).**

---

## 🎯 ¿Qué es este repositorio?

Este repositorio es un **lienzo en blanco pre-configurado** con los más altos estándares de la ingeniería de software moderna (Arnés de Agentes + Spec-Driven Development), diseñado para que un **Fundador / Vibe Coder sin conocimientos profundos de programación** pueda construir un producto digital exitoso, robusto y seguro desde cero.

Todo el ecosistema está configurado para que cualquier asistente de IA que abras (Antigravity, Claude, Cursor, ChatGPT, etc.) asuma de inmediato el rol de tu **Equipo de Ingeniería y CTO**, guiándote con preguntas estratégicas antes de escribir una sola línea de código.

---

## ⚡ ¿Cómo usarlo? (En 3 simples pasos)

### Paso 1: Clona o abre esta carpeta en tu editor de IA favorito
Abre este directorio en **Google Antigravity IDE**, **Claude Code**, **Cursor** o **VS Code**.

### Paso 2: Dale la orden de arranque a la IA
En el chat de tu IA, escribe únicamente este comando en lenguaje natural:

> **"Hola. Lee este repositorio y empieza la entrevista inicial para crear mi producto."**

*(O si usas Antigravity, puedes escribir `/bootstrap` o `/grill-me`)*.

### Paso 3: Responde las preguntas de negocio
La IA leerá automáticamente el archivo [`AGENTS.md`](./AGENTS.md) y la habilidad [`bootstrap-startup`](./.claude/skills/bootstrap-startup/SKILL.md), y te hará una serie de preguntas clave:
1. ¿Qué problema resuelve tu producto y quién es tu cliente objetivo?
2. ¿Cómo vas a monetizar (suscripción, cobro por uso, comisión, etc.)?
3. ¿Qué datos sensibles manejarás (pagos con tarjeta, contraseñas, documentos)?
4. ¿Qué servicios externos necesitas conectar (Stripe, WhatsApp, correos, etc.)?

A partir de tus respuestas, **la IA configurará automáticamente la arquitectura, las reglas de negocio, la base de datos y la primera especificación (Spec Kit) de tu MVP**.

---

## 🏛️ Estructura del Canvas

```
.
├── AGENTS.md                  # El manual maestro universal para cualquier LLM
├── CLAUDE.md                  # Configuración optimizada para Claude Code
├── .cursorrules               # Configuración optimizada para Cursor
├── .specify/                  # El motor de Spec-Driven Development (SDD)
│   └── memory/constitution.md # Principios innegociables de calidad y seguridad
├── specs/                     # Carpeta de especificaciones de producto
│   ├── 000-vision/            # Visión general y roadmap de la startup
│   └── templates/             # Plantillas profesionales de spec, plan y tasks
├── .claude/ (y .cursor/)
│   ├── rules/                 # Barandillas: Seguridad OWASP, Arquitectura limpia, TDD
│   ├── skills/                # Habilidades interactivas (ej. bootstrap-startup)
│   └── agents/                # Subagentes especializados (ej. code-reviewer)
└── docs/                      # Documentación viva de tu startup (Arquitectura, DB, etc.)
```

---

## 🛡️ Barandillas de Seguridad Pre-configuradas

No tienes que preocuparte por cometer errores de novato. El arnés ya incluye reglas estrictas que le impiden a la IA:
- ❌ Hardcodear contraseñas o llaves secretas en el código.
- ❌ Escribir consultas SQL vulnerables a inyección.
- ❌ Modificar bases de datos sin validación y migraciones.
- ❌ Declarar tareas como "terminadas" sin haber ejecutado y aprobado pruebas automáticas (TDD).
- ❌ Filtrar datos confidenciales de usuarios en respuestas de la API.

---

## 🤝 Filosofía para el Vibe Coder

1. **Tú eres el Director de Producto:** La IA propone planos técnicos; tú validas que resuelvan la necesidad real de tu usuario.
2. **Sin Especificación No Hay Código:** Primero se define el *qué* y el *cómo* en `specs/`, y solo cuando das tu aprobación se empieza a construir.
3. **Pruebas en Verde Siempre:** Cada pantalla o endpoint que se construya debe venir acompañado de pruebas automáticas verificadas.
