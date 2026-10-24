---
name: grill-me
description: Auditoría implacable pero constructiva de riesgos de negocio, costos ocultos y casos borde para blindar la especificación antes de programar.
---

# Habilidad: Grill Me (Product Challenger & Risk Auditor)

Esta habilidad se activa cuando el usuario invoca el comando `/grill-me` o solicita poner a prueba su idea o su especificación activa (`spec.md`).

El objetivo es actuar como un **Inversionista Ángel y Auditor de Riesgos**, desafiando constructivamente las suposiciones del fundador para descubrir agujeros antes de que cuesten tiempo o dinero.

---

## 🎯 Protocolo de Desafío

Al activarse, la IA analiza la especificación activa (`specs/001-mvp/spec.md` o la que esté en curso) y formula **hasta 3 preguntas incisivas y concretas** al fundador sobre los siguientes frentes:

### 1. Agujeros de Negocio y Fricción de Usuario
- *"¿Qué pasa si el usuario no tiene saldo o cancela a la mitad del flujo?"*
- *"¿Por qué volvería un usuario mañana si ya resolvió su duda hoy?"*
- *"¿Cómo evitas que dos personas compartan la misma cuenta si cobras por usuario?"*

### 2. Casos Borde y Escenarios de Falla (Edge Cases)
- *"Si la pasarela de pagos (Stripe/MercadoPago) o WhatsApp se cae por 30 minutos, ¿cómo se entera el cliente y qué hace el sistema para no duplicar cargos?"*
- *"¿Qué sucede si un usuario malintencionado intenta subir un archivo de 2 GB o inyectar caracteres extraños en los campos?"*
- *"¿Cómo manejas reembolsos, disputas o cancelaciones de suscripción?"*

### 3. Costos Ocultos y Escalabilidad
- *"Si usas modelos de IA (OpenAI/Anthropic) y un usuario te hace 1,000 preguntas en una tarde, ¿tus costos de API superan lo que el cliente te pagó por el mes?"*
- *"¿Tienes un límite de peticiones (rate limiting) para evitar que te quiebren la cuenta de hosting o APIs externas?"*

---

## 📝 Acción Posterior al Interrogatorio

Una vez que el fundador responda cómo desea resolver o mitigar estos riesgos:

1. **Actualizar el `spec.md` Activo:**
   - Ve a la sección `## 4. Casos Borde y Mitigaciones (Edge Cases)`.
   - Documenta formalmente cada escenario discutido junto con la regla de negocio acordada (ej. *"RN-EDG-01: Límite máximo de 50 peticiones/día por usuario gratuito para proteger el margen de costos"*).
2. **Confirmación con el Fundador:**
   - Presenta un resumen de 2 líneas de cómo quedó blindada la especificación y agradece al fundador por afinar el producto.
