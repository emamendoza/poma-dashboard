---
name: "🧪 Pruebas / Testing"
about: Creación, actualización o mejora de la cobertura de tests.
title: "[TEST] <componente_o_flujo_a_testear>"
labels: Testing
assignees: ""
---

## 1. Objetivo del Test
> ¿Qué parte del sistema estamos asegurando?
- **Tipo de Test:** [ej. Unitario, Integración, E2E]
- **Componente/Módulo:** [ej. Formulario de Contacto, Hook `usePortfolio`]
- **Motivo:** [ej. Cubrir un caso de borde (edge case), prevenir regresiones en el despliegue]

## 2. Escenarios de Prueba (Casos de uso)
- [ ] **Caso Exitoso:** [ej. El formulario se envía correctamente con datos válidos]
- [ ] **Caso de Error:** [ej. Muestra un mensaje de error si el email es inválido]
- [ ] **Estado de Carga:** [ej. El botón muestra un spinner mientras la API responde]

---

## 3. Especificación Técnica
- **Herramientas:** [ej. Vitest, React Testing Library, Playwright]
- **Mocks necesarios:** [ej. Mock de la API de Gmail o de la base de datos local]
- **Cobertura esperada:** [ej. +80% en el módulo de validación]

---

## 4. Archivos Creados / Modificados
- `src/__tests__/filename.test.ts`
- `src/components/filename.tsx` (en caso de añadir `data-testid`)

---

## 5. Checklist de Calidad (DoD)
- [ ] Los tests pasan localmente (`npm test` / `pnpm test`).
- [ ] Los tests son independientes (no dependen del orden de ejecución).
- [ ] No se han dejado datos sensibles en los mocks.
- [ ] El código del test sigue las buenas prácticas (limpieza y legibilidad).

## 6. Tareas (Tasks)
- [ ] Configurar el entorno de test (si no existe).
- [ ] Escribir los casos de prueba definidos.
- [ ] Verificar la ejecución en el pipeline de CI/CD (si aplica).