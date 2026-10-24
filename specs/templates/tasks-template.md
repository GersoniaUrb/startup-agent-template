# Tasks: [Nombre de la Funcionalidad]

**Spec:** `specs/[numero]-[nombre]/spec.md`  
**Plan:** `specs/[numero]-[nombre]/plan.md`

---

## Phase 1: Setup & Prerequisitos
- [ ] T001 Verificar que la rama de Git esté limpia y las pruebas previas en verde.
- [ ] T002 Crear migraciones de base de datos o modelos necesarios.

---

## Phase 2: Pruebas Primero (TDD)
- [ ] T003 Escribir pruebas unitarias para el servicio de lógica de negocio (verificar que fallen en rojo).
- [ ] T004 Escribir pruebas de integración para los controladores/rutas API.

---

## Phase 3: Implementación Backend
- [ ] T005 Implementar la lógica en la capa de servicio para poner los tests unitarios en verde.
- [ ] T006 Implementar los endpoints en la capa de controlador con validación de esquemas DTO.
- [ ] T007 Ejecutar la suite de pruebas del backend y confirmar 100% de éxito.

---

## Phase 4: Implementación Frontend
- [ ] T008 Crear cliente de llamada a la API y funciones auxiliares con pruebas unitarias.
- [ ] T009 Crear o actualizar la página y componentes visuales con feedback de carga y errores.
- [ ] T010 Validar el flujo de usuario de punta a punta en el navegador.

---

## Phase 5: Auditoría y Cierre
- [ ] T011 Ejecutar el subagente `code-reviewer` para auditar seguridad y arquitectura.
- [ ] T012 Actualizar la documentación en `docs/` y hacer commit final en Git.
