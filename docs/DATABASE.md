# Diccionario de Base de Datos

> Registro centralizado de tablas, relaciones e índices del sistema.

---

## Tablas Principales

### 1. `usuarios`
| Columna | Tipo | Nulo | Descripción |
|:---|:---|:---|:---|
| `id` | UUID / BIGINT | NO | Identificador único primario |
| `email` | VARCHAR(255) | NO | Correo electrónico único |
| `password_hash` | VARCHAR(255) | NO | Hash seguro (Argon2 / BCrypt) |
| `creado_en` | TIMESTAMP | NO | Fecha de registro |

---

## Convenciones de Base de Datos
1. Nombres de tablas en minúsculas y plural (`usuarios`, `pedidos`, `productos`).
2. Claves foráneas con sufijo `_id` (`usuario_id`, `empresa_id`).
3. Todas las tablas deben contar con columnas de auditoría: `creado_en` y `actualizado_en`.
