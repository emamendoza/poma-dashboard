---
name: "⚡ Optimización de Rendimiento"
about: Tareas destinadas a mejorar la velocidad, carga o eficiencia del proyecto.
title: "[PERF] <área_a_optimizar>"
labels: Performance
assignees: ""
---

## 1. Diagnóstico de Rendimiento
> ¿Qué está ralentizando el proyecto actualmente?
- **Métrica afectada:** [ej. LCP (Largest Contentful Paint), Tiempo de respuesta API, Bundle Size]
- **Herramienta de medición:** [ej. Lighthouse, PageSpeed, Network Tab, Docker Stats]

## 2. Comparativa de Métricas (Benchmarking)
| Métrica | Estado Inicial | Objetivo / Final |
| :--- | :--- | :--- |
| **Tiempo de carga** | [ej. 4.5s] | [ej. < 2.0s] |
| **Peso del Bundle** | [ej. 1.2MB] | [ej. < 800KB] |
| **Uso de Memoria** | [ej. 500MB] | [ej. 250MB] |

---

## 3. Acciones Técnicas
- [ ] **Code Splitting:** [ej. Implementar `next/dynamic` en componentes pesados]
- [ ] **Optimización de Assets:** [ej. Convertir imágenes a `.webp` o usar `next/image`]
- [ ] **Limpieza:** [ej. Eliminar librerías redundantes o código muerto]
- [ ] **Cache:** [ej. Implementar estrategias de SWR o Redis]

## 4. Evidencia Técnica
> Adjunta capturas de Lighthouse o comparativas de la pestaña Network.
- **Antes:** ![Screenshot de métricas lentas]
- **Después:** ![Screenshot de métricas optimizadas]

---

## 5. Checklist de Verificación (DoD)
- [ ] La mejora es medible y verificable.
- [ ] No se ha sacrificado funcionalidad clave por rendimiento.
- [ ] El cambio ha sido probado en dispositivos de gama baja / redes lentas.
- [ ] Documentación técnica actualizada (si el flujo cambió).

## 6. Próximos Pasos (Tasks)
- [ ] Identificar cuello de botella con `[herramienta]`.
- [ ] Aplicar refactorización técnica.
- [ ] Ejecutar auditoría final de performance.