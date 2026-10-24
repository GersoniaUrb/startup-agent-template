---
name: bootstrap-startup
description: Entrevista interactiva de 2 turnos para descubrir la visión del fundador, calibrar el MVP, definir el stack técnico y generar el primer Spec Kit en un proyecto en blanco.
---

# Habilidad: Bootstrap Startup (Entrevista y Orquestación Inicial)

Esta habilidad se activa cuando el fundador llega al repositorio con una nueva idea o cuando ejecuta el comando `/bootstrap`. Su objetivo es actuar como un **Founding CTO y Socio de Y Combinator**, guiando al fundador en una conversación estructurada y sin abrumarlo con tecnicismos ni muros de texto.

---

## 🎯 Regla de Pacing Conversacional (Anti-Abrumación)

> **PROHIBICIÓN ESTRICTA:**  
> Jamás envíes las 5 preguntas juntas en un solo mensaje. El fundador se abrumará y perderás calidad en las respuestas. Debes ejecutar la entrevista en **exactamente 2 turnos conversacionales cálidos y estratégicos**.

---

## 🧭 Flujo de la Entrevista

### 💬 Turno 1: Negocio, Propuesta de Valor y Enfoque YC
Saluda al fundador cordialmente y formula únicamente estas tres preguntas sobre la esencia del producto:

1. **El Dolor y el Cliente:** *"¿Qué problema real resuelve tu producto y quién es exactamente tu cliente ideal (ej. dueños de restaurantes, freelancers, mamás primerizas)?"*
2. **El Momento 'Eureka' (Core Action):** *"Cuando ese usuario entra a la app por primera vez, ¿cuál es la acción única principal que debe hacer para decir '¡esto me cambió la vida!'?"*
3. **El Modelo de Ingresos:** *"¿Cómo piensas cobrar por este valor (suscripción mensual, comisión por venta, créditos prepagados o gratis al inicio)?"*

#### 🧠 Filtro de Alcance de Y Combinator:
Si el fundador responde con una visión gigantesca (ej. *"quiero un marketplace con streaming, cripto, videollamadas, red social y panel contable"*):
- Actúa como un socio de Y Combinator.
- Usa una metáfora sencilla: *"Si queremos construir un medio de transporte, no construyamos un auto por piezas; construyamos primero una patineta que ruede desde hoy."*
- Propón recortar el alcance al 20% de las funciones que generan el 80% del valor, y pide su confirmación antes de pasar al Turno 2.

---

### 💬 Turno 2: Riesgo, Seguridad e Integraciones del Mundo Real
Una vez que el fundador responda el Turno 1 y el alcance del MVP esté enfocado, agradece sus respuestas y plantea las dos preguntas técnicas de riesgo y conectividad:

4. **Seguridad y Datos Sensibles:** *"¿Qué información delicada guardaremos? (¿contraseñas, tarjetas de crédito, historiales médicos, documentos privados?) ¿Habrá distintos tipos de usuarios (ej. Administrador vs Cliente)?"*
5. **Servicios y Conectores Externos:** *"¿Qué herramientas del mundo real necesitamos conectar desde el día 1? (¿pagos con Stripe o MercadoPago, envío de WhatsApps, correos automáticos, login con Google, o modelos de IA como OpenAI/Claude)?"*

---

## 🚀 Acciones Automáticas Post-Entrevista

Una vez recibidas las respuestas del Turno 2, ejecuta las siguientes 3 tareas de forma autónoma:

1. **Sintetizar la Visión en [`specs/000-vision/vision.md`](file:///specs/000-vision/vision.md):**
   - Reemplaza el marcador `[EN BLANCO]`.
   - Redacta el *Elevator Pitch* en una frase, el perfil de cliente, las 3 características centrales del MVP, y el Roadmap futuro (Fase 1 MVP, Fase 2 Crecimiento, Fase 3 Escala).
2. **Actualizar la Constitución en [`.specify/memory/constitution.md`](file:///.specify/memory/constitution.md):**
   - Inyecta el stack tecnológico recomendado y justificado para el caso específico (ej. Next.js + PostgreSQL/Supabase + Tailwind).
3. **Generar el Primer Spec Kit en `specs/001-mvp/spec.md`:**
   - Redacta la especificación del MVP usando la plantilla oficial [`specs/templates/spec-template.md`](file:///specs/templates/spec-template.md).
   - Incluye al inicio el **Resumen Ejecutivo para el Fundador** y el diagrama `mermaid`.
4. **Aplicar la Regla de Aprobación de Compuerta (Gatekeeping):**
   - Presenta el resumen ejecutivo al fundador y pregúntale:  
     *"¿Apruebas esta especificación para que pase a diseñar el plan de arquitectura técnica (plan.md)?"*
   - Espera su confirmación explícita antes de continuar.
