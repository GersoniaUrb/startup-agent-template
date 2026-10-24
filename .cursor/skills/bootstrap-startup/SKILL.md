---
name: bootstrap-startup
description: Guía interactiva paso a paso para entrevistar al fundador, descubrir su visión de negocio, definir el stack técnico, configurar las reglas y generar la primera especificación (Spec Kit) en un repositorio en blanco.
---

# Habilidad: Bootstrap Startup (Entrevista y Orquestación Inicial)

Esta habilidad se activa cuando el fundador llega al repositorio con una nueva idea de producto o startup. Guía a la IA para actuar como un **CTO y Director de Producto**, interrogando constructivamente al fundador para convertir su visión en una arquitectura sólida.

---

## 🎯 Protocolo de Ejecución

### Fase 1: La Entrevista de Descubrimiento (No programes nada aún)
Saluda al fundador cordialmente y plantea las 5 preguntas estratégicas en lenguaje natural, usando el tono de un socio tecnológico entusiasta pero riguroso:

1. **Problema y Cliente:** *"¿Qué dolor o problema resuelve tu producto y quién es tu cliente objetivo (personas individuales, pequeñas empresas, doctores, etc.)?"*
2. **El 'Momento Mágico' (Core Loop):** *"Cuando el usuario entra a la app, ¿cuál es la acción principal más importante que debe hacer para sentir que la app le solucionó la vida?"*
3. **Modelo de Ingresos:** *"¿Cómo vas a cobrar por este servicio (suscripción mensual/anual, comisión por venta, créditos prepagados, o 100% gratis al inicio)?"*
4. **Datos y Privacidad:** *"¿Qué datos confidenciales guardaremos (tarjetas de crédito, contraseñas, fotos privadas, historiales médicos)? ¿Habrá roles de usuario (ej. Admin vs Cliente)?"*
5. **Servicios de Terceros:** *"¿Qué herramientas del mundo real necesitas conectar desde el día 1 (pagos con Stripe/MercadoPago, WhatsApp, correos transaccionales, inicio de sesión con Google)?"*

---

### Fase 2: Síntesis de la Visión
Con las respuestas del fundador:
1. Llena el documento [`specs/000-vision/vision.md`](file:///specs/000-vision/vision.md).
2. Resume el MVP en una sola frase de impacto (*Elevator Pitch*).
3. Define las 3 características mínimas indispensables para la versión 1.0 (MVP) y descarta todo lo superfluo para futuras versiones.

---

### Fase 3: Selección del Stack Tecnológico Recomendado
Propón al fundador la combinación tecnológica más moderna, rápida y estándar, explicándole el porqué en términos sencillos:

- **Recomendado por defecto (Startups Web/SaaS):**
  - **Frontend + Backend:** Next.js (React) o Vite + Express / FastAPI.
  - **Base de Datos:** PostgreSQL (con Supabase o Prisma / Drizzle ORM).
  - **Estilos:** TailwindCSS (diseño responsivo y estético desde el primer segundo).
  - **Autenticación:** Supabase Auth, Clerk o NextAuth (login seguro con Google y contraseña).
  - **Pagos:** Stripe SDK / Webhooks.

Pregunta al fundador: *"¿Te parece bien este stack tecnológico o prefieres alguna tecnología en particular?"*

---

### Fase 4: Inicialización del Código Base
Una vez aprobado el stack:
1. Inicializa el proyecto en el directorio raíz o en subcarpetas limpias (`frontend/`, `backend/`).
2. Configura los archivos de variables de entorno `.env.example` con la lista de claves necesarias.
3. Configura el sistema de pruebas automáticas (Jest/Vitest, PyTest o JUnit).
4. Verifica que el servidor de desarrollo y las pruebas corran en verde desde el inicio.

---

### Fase 5: Creación del Primer Spec Kit (`specs/001-mvp/`)
1. Genera `specs/001-mvp/spec.md` con las historias de usuario de la primera funcionalidad.
2. Genera `specs/001-mvp/plan.md` con el diseño de tablas y endpoints.
3. Genera `specs/001-mvp/tasks.md` con la lista de tareas atómicas y testeables.
4. Muestra un resumen visual al fundador y solicita su confirmación para comenzar a construir.
