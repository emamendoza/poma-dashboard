---
name: "🚀 Nueva Funcionalidad"
about: Especificación clara para el desarrollo de una nueva característica.
title: "FEAT: <nombre_breve>"
labels: Mejora
assignees: ""
---

## 1. Resumen (El Problema)
> Describe brevemente qué necesidad estamos cubriendo.
- **Usuario objetivo:** [ej. Desarrollador, Cliente Final]
- **Necesidad:** [ej. No existe una forma de exportar reportes en PDF]

## 2. Solución Propuesta (El "Qué")
- **Descripción:** [Resumen de la funcionalidad]
- **Impacto esperado:** [ej. Reducción de tiempo en X proceso, mejora de conversión]

---

## 3. Especificaciones Técnicas
### 🛠️ Componentes y Lógica
- [ ] **Frontend:** [ej. Crear componente `ExportButton.tsx`]
- [ ] **Backend/API:** [ej. Nuevo endpoint `GET /api/reports/download`]
- [ ] **Estado/Contexto:** [ej. Integrar con `useReportStore`]

### 📦 Dependencias
- [ ] **Nuevas:** [ej. `jspdf`]
- [ ] **A considerar:** [ej. Impacto en el bundle size]

---

## 4. Interfaz de Usuario (UI)
| Mockup / Referencia | Notas de Comportamiento |
| :--- | :--- |
| ![Imagen](url_o_drop_aquí) | [ej. El botón debe deshabilitarse mientras carga] |

---

## 5. Criterios de Aceptación (DoD)
- [ ] Cumple con el diseño acordado.
- [ ] El flujo principal (Happy Path) funciona sin errores.
- [ ] Incluye tests unitarios básicos.
- [ ] Documentación mínima actualizada.

## 6. Pasos a seguir (Tasks)
- [ ] Definir estructura de datos.
- [ ] Implementar UI básica.
- [ ] Lógica de negocio y validaciones.
- [ ] Pruebas finales.