# Regla de Calidad: Test-Driven Development (TDD) y Cero Regresiones

La estabilidad del producto depende de una suite de pruebas automatizadas confiable.

---

## 1. El Ciclo Obligatorio de Construcción (TDD)
Para cada funcionalidad definida en `specs/`:
1. **Escribir las Pruebas Primero:** Basadas en los criterios de aceptación de la especificación.
2. **Verificar que Fallen (RED):** Confirmar que el test falla por la razón correcta antes de implementar.
3. **Implementar el Código Mínimo (GREEN):** Escribir la lógica necesaria para que las pruebas pasen.
4. **Refactorizar (REFACTOR):** Limpiar el código sin alterar el comportamiento verificado.

---

## 2. Tipos de Pruebas Requeridas
- **Pruebas Unitarias:** Para servicios, cálculos, reglas de validación y transformaciones de datos.
- **Pruebas de Integración / Endpoints:** Para controladores y endpoints API, simulando peticiones HTTP reales (códigos 200, 201, 400, 404, 422).
- **Pruebas de Componentes Frontend:** Para verificar que los botones, formularios y estados de error se rendericen y respondan correctamente al usuario.

---

## 3. Política de Cero Regresiones
- **PROHIBIDO:** Modificar o eliminar aserciones de pruebas existentes solo para hacer que el build pase.
- Si una prueba existente falla al agregar código nuevo, significa que se introdujo un error o se rompió una regla de negocio previa. Debe corregirse la implementación, no la prueba.
- Toda tarea en `tasks.md` requiere ejecutar la suite completa de pruebas y verificar que el resultado sea `100% PASS` antes de marcarse como completada.
