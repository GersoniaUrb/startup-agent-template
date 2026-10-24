# Regla de Seguridad: Estándar OWASP y Cero Confianza (Zero Trust)

Todo código generado en este proyecto debe adherirse a los siguientes estándares innegociables de seguridad:

---

## 1. Gestión de Secretos y Credenciales
- **PROHIBIDO:** Hardcodear credenciales, contraseñas, llaves de API (Stripe, OpenAI, Supabase, AWS) o secretos de cifrado en el código fuente.
- **OBLIGATORIO:** Todas las credenciales se cargan mediante variables de entorno a través de archivos `.env`.
- Todo secreto debe tener su entrada correspondiente en `.env.example` (sin el valor real, solo el nombre de la variable como guía).

## 2. Inyección SQL y Manejo de Base de Datos
- **PROHIBIDO:** Concatenar strings en sentencias SQL (`"SELECT * FROM users WHERE email = '" + email + "'"`).
- **OBLIGATORIO:** Utilizar siempre consultas parametrizadas o un ORM seguro (Prisma, Drizzle, Hibernate, SQLAlchemy) que maneje escaping y bind variables automáticamente.

## 3. Validación Exhaustiva de Entradas (Input Validation)
- Ningún dato proveniente del usuario o de una petición externa se considera confiable.
- Todos los payloads entrantes (`body`, `query`, `params`) deben validarse mediante esquemas estrictos (Zod, Pydantic, Jakarta Bean Validation).
- Las cadenas de texto deben sanitizarse contra ataques Cross-Site Scripting (XSS).

## 4. Autenticación y Manejo de Contraseñas
- Las contraseñas jamás se almacenan en texto plano ni con algoritmos obsoletos (MD5, SHA1). Se utiliza obligatoriamente **Argon2id** o **BCrypt** con factor de costo adecuado.
- Los tokens de sesión (JWT) o cookies deben configurarse con flags de seguridad: `HttpOnly`, `Secure`, `SameSite=Lax/Strict`.
- Las respuestas de la API jamás deben incluir hashes de contraseña, tokens de reseteo ni información interna del servidor.

## 5. Control de Acceso y Roles (Broken Access Control)
- Cada endpoint que consulte, modifique o elimine datos debe verificar que el usuario autenticado tiene permiso sobre dicho recurso (ej. verificar que `usuario_id` del token coincida con el dueño del registro).
