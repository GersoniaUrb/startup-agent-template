# Regla de Arquitectura: Código Limpio, Contratos y Separación de Capas

Todo componente del sistema debe seguir una arquitectura modular, predecible y fácil de mantener.

---

## 1. Separación de Responsabilidades
El código debe dividirse claramente en tres capas independientes:
1. **Capa de Entrada / Controlador (Routes / Controllers):**
   - Recibe la petición HTTP, valida el esquema de entrada, invoca el servicio y devuelve la respuesta HTTP adecuada.
   - **No contiene lógica de negocio pesada ni sentencias directas a la base de datos.**
2. **Capa de Dominio / Servicio (Services / Use Cases):**
   - Contiene las reglas del negocio, cálculos, políticas de cobro y validaciones complejas.
   - No depende de objetos HTTP (`Request`, `Response`).
3. **Capa de Persistencia / Acceso a Datos (Repositories / Models):**
   - Se encarga exclusivamente de interactuar con la base de datos o APIs externas.

---

## 2. Contratos y DTOs (Data Transfer Objects)
- **PROHIBIDO:** Devolver entidades crudas de la base de datos directamente al cliente frontend.
- **OBLIGATORIO:** Mapear siempre a esquemas de respuesta explícitos (DTOs / Typescript interfaces / Records). Esto previene fugas de datos y desacopla la base de datos de la interfaz pública.

---

## 3. Códigos de Estado HTTP Estándar y Respuestas de Error
Toda API debe utilizar códigos HTTP semánticos:
- `200 OK`: Petición exitosa con datos.
- `201 Created`: Recurso creado exitosamente (debe incluir cabecera `Location` o el recurso creado).
- `400 Bad Request`: Formato de solicitud inválido o error en la validación de campos.
- `401 Unauthorized`: Usuario no autenticado o token expirado.
- `403 Forbidden`: Usuario autenticado pero sin permisos para acceder al recurso.
- `404 Not Found`: El recurso solicitado no existe.
- `422 Unprocessable Entity`: La solicitud es válida sintácticamente, pero viola una regla de negocio.
- `500 Internal Server Error`: Error no controlado del servidor (sin exponer stack traces internos).

### Formato Unificado de Error:
```json
{
  "status": 422,
  "codigo": "SALDO_INSUFICIENTE",
  "mensaje": "El usuario no cuenta con fondos suficientes para completar la compra",
  "detalles": []
}
```
