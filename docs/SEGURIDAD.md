# Políticas de Seguridad y Privacidad

> Registro de auditoría y controles de seguridad implementados en el sistema.

---

## 1. Clasificación de Datos
- **Datos Públicos:** Información de catálogo, nombres de servicios, precios públicos.
- **Datos Sensibles:** Correos electrónicos, nombres reales, teléfonos.
- **Datos Críticos / Altamente Confidenciales:** Contraseñas (hasheadas), tokens de pago, llaves de API.

---

## 2. Controles de Acceso
- Todo acceso a endpoints privados requiere cabecera `Authorization: Bearer <token>`.
- Política de Privacidad de Filas (Row-Level Security / RLS): Cada usuario solo puede ver y editar sus propios registros.

---

## 3. Plan de Respuesta ante Incidentes
- Procedimiento para invalidar tokens y rotar credenciales comprometidas en variables de entorno.
