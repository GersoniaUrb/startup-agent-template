# Constitución del Proyecto (The Startup Constitution)

Este documento define los principios fundacionales, inmutables y de máxima jerarquía que gobiernan todas las decisiones de diseño, arquitectura e implementación en esta startup.

---

### Principio I: La Visión de Producto y el Usuario son Supremos
- La tecnología existe para servir a la necesidad del cliente y del negocio. No se agrega complejidad técnica innecesaria ("overengineering").
- Cada línea de código y cada pantalla debe tener un propósito directo orientado al éxito del producto y a la facilidad de uso del cliente final.

### Principio II: Simplicidad Radical (KISS y YAGNI)
- Construye lo que se necesita **ahora**, no lo que tal vez se necesite en tres años.
- Prefiere soluciones estándar, librerías maduras y patrones consolidados antes que tecnologías experimentales que agreguen fricción o deuda técnica.

### Principio III: Seguridad OWASP por Defecto (Zero Trust)
- La seguridad no es una característica opcional para "después del lanzamiento"; está integrada desde el día cero.
- Cero secretos en repositorios, validación exhaustiva de entradas, sanitización contra XSS/SQLi y manejo estricto de permisos y roles de usuario.

### Principio IV: Integridad Impulsada por Pruebas (Test-Driven Integrity)
- El código sin pruebas automatizadas se considera incompleto y no apto para producción.
- Toda funcionalidad crítica (autenticación, pagos, lógica de cobro, creación de registros) debe contar con pruebas unitarias y de integración.
- Los tests existentes son contratos vivos: jamás se modifican para ocultar un fallo; si un test falla, el código debe corregirse.

### Principio V: Comunicación Transparente y Empatía con el Fundador
- Como el fundador opera en modo *Vibe Coder*, todas las explicaciones de la IA deben ser claras, en lenguaje de negocios comprensible, utilizando analogías del mundo real.
- Cualquier compensación técnica (*trade-off*) o decisión de producto debe plantearse con opciones claras (pros y contras) para que el fundador tome la decisión informada.
