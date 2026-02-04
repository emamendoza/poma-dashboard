---
name: "♻️ Refactorización"
about: Mejorar la estructura del código sin cambiar su funcionalidad externa.
title: "[REFACTOR] <nombre_del_modulo_o_patron>"
labels: refactor
assignees: ""
---

## 1. Motivación del Refactor
> ¿Por qué el código actual necesita una reestructuración?
- **Problema detectado:** [ej. Componente "God Object" demasiado grande, lógica duplicada, deuda técnica]
- **Objetivo:** [ej. Aplicar Atomic Design, separar lógica de negocio con Hooks, mejorar legibilidad]

## 2. Cambios de Arquitectura
- **Estado Anterior:** [ej. Lógica de API mezclada con el componente visual]
- **Nuevo Estado:** [ej. Implementación de Container-Component Pattern o Custom Hooks]

---

## 3. Plan de Acción
- [ ] **Extracción:** [ej. Mover lógica de validación a `utils/validators.ts`]
- [ ] **Simplificación:** [ej. Reemplazar condicionales complejos por un objeto de mapeo]
- [ ] **Estandarización:** [ej. Renombrar variables para cumplir con el naming convention del proyecto]

## 4. Archivos Impactados
- `src/components/...`
- `src/hooks/...`
- `src/types/...`

---

## 5. Garantía de No-Regresión
> Al ser un refactor, la funcionalidad debe permanecer idéntica.
- [ ] **Tests:** ¿Se han ejecutado los tests existentes para asegurar que nada se rompió? (Sí/No)
- [ ] **QA Manual:** ¿El flujo de usuario sigue siendo el mismo? (Sí/No)

---

## 6. Checklist de Calidad (DoD)
- [ ] El código es más legible y fácil de mantener.
- [ ] Se han eliminado comentarios redundantes o código muerto.
- [ ] Se respeta la arquitectura definida (ej. Atomic Design).
- [ ] No se han introducido nuevas funcionalidades (solo limpieza).

## 7. Tareas (Work Breakdown)
- [ ] Identificar áreas de mejora en `[nombre_archivo]`.
- [ ] Ejecutar la reestructuración.
- [ ] Verificar consistencia con el resto del sistema.