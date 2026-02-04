---
name: "🐞 Reporte de Error"
about: Notificar un error o incidencia técnica para su corrección.
title: "[FIX] <breve_descripcion_del_error>"
labels: Error
assignees: ""
---

## 1. Descripción del Error
> Breve explicación de qué está fallando.
- **Componente afectado:** [ej. Formulario de Contacto, Navbar, Script de Docker]
- **Gravedad:** [Baja / Media / Alta / Bloqueante]

## 2. Comportamiento Actual vs Esperado
- **Actual:** ❌ [ej. Al hacer clic en enviar, la página se recarga sin enviar el mail]
- **Esperado:** ✅ [ej. El botón debe mostrar un loader y luego un mensaje de éxito]

---

## 3. Pasos para Reproducir
1. Ir a `[ruta_o_url]`
2. Hacer clic en `[botón/elemento]`
3. Cambiar el estado a `[valor]`
4. Ver el error en `[consola/pantalla]`

## 4. Evidencia (Capturas/Logs)
| Captura del Error | Logs de Consola / Terminal |
| :--- | :--- |
| ![Imagen](url_o_drop_aquí) | ```bash [error_log_aquí] ``` |

---

## 5. Contexto del Entorno
- **Navegador/OS:** [ej. Chrome en Linux Devuan, Firefox Mobile]
- **Rama/Entorno:** [ej. main, develop, local]

## 6. Posible Solución (Opcional)
- [ ] Revisar el archivo `[nombre_del_archivo.tsx]`
- [ ] Validar si la dependencia `[librería]` requiere actualización.

---

## 7. Checklist de Arreglo (DoD)
- [ ] Error reproducido en entorno local.
- [ ] El fix no afecta otras funcionalidades (Regression check).
- [ ] Código limpio de `console.log` o comentarios de debug.
- [ ] Test de flujo corregido.