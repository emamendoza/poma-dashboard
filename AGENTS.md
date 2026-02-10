# Instrucciones para Agentes de Desarrollo - Poma

Este documento define los estándares de desarrollo, convenciones de código y cómo usar herramientas MCP en el proyecto Poma.

## 🌍 Idioma

Toda la comunicación, comentarios, documentación y explicaciones se realizan en **español**.

---

## 📁 Estructura del Proyecto

```
poma/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── _components/              # Componentes compartidos a nivel de app
│   │   ├── _statics/                 # Archivos estáticos: fuentes, estilos globales
│   │   ├── (root)/                   # Grupo de rutas - página principal
│   │   │   ├── page.tsx
│   │   │   └── auth/                 # Feature de autenticación
│   │   │       ├── page.tsx
│   │   │       └── _components/      # Componentes específicos de auth
│   │   ├── dashboard/                # Feature de dashboard
│   │   │   ├── page.tsx
│   │   │   └── _components/          # Componentes específicos de dashboard
│   │   └── api/                      # Rutas API
│   │       ├── products/route.ts
│   │       └── users/route.ts
│   ├── ui/                           # Módulo de UI - Componentes globales
│   │   ├── components/               # Componentes base reutilizables (shadcn, custom)
│   │   └── lib/                      # Utilidades compartidas
│   └── users/                        # Módulo de usuarios
│       └── services.ts               # Servicios y lógica empresarial
├── public/                           # Archivos estáticos públicos
├── .vscode/                          # Configuración de VS Code
│   ├── mcp.json                      # Configuración de servidores MCP
│   └── settings.json                 # Ajustes del editor y PATH
├── AGENTS.md                         # Este archivo
├── package.json
├── tsconfig.json
├── next.config.ts
├── components.json                   # Configuración de shadcn
└── biome.json                        # Configuración de linting/formatting
```

---

## 📋 Convenciones de Código

### 1. Nombres de Archivos y Carpetas: kebab-case

**Todas** las carpetas y archivos (excepto las especiales de Next.js) deben estar en **kebab-case** (minúsculas separadas por guion).

✅ **Correcto:**
```
src/
  app/
    (root)/
      auth/
        _components/
          login-form/
            login-form.tsx         # ✓ Componente React
            login-schema.ts        # ✓ Esquema de validación
            index.ts               # ✓ Punto de entrada
          form-field-auth.tsx      # ✓ Otro componente
  ui/
    components/
      button.tsx
      dropdown-menu.tsx
      custom-card.tsx
    lib/
      form-utils.ts
  users/
    services.ts
```

❌ **Incorrecto:**
```
loginForm.tsx              # camelCase ✗
LoginForm.tsx              # PascalCase ✗
login_form.tsx             # snake_case ✗
loginSchema.ts             # camelCase ✗
```

### 2. Exportación de Componentes

Los componentes React **no se exportan por defecto** (`export default`), sino como **exportaciones nombradas** usando `export function`.

✅ **Correcto:**
```typescript
// src/ui/components/button.tsx
export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

// src/app/(root)/auth/_components/login-form/login-form.tsx
export function LoginForm(props: LoginFormProps) {
  return <form>{/* ... */}</form>
}

// src/app/_components/header.tsx
export function Header(props: HeaderProps) {
  return <header>{/* ... */}</header>
}
```

❌ **Incorrecto:**
```typescript
export default function Button({ children }: ButtonProps) { /* ... */ }
const Button = ({ children }: ButtonProps) => { /* ... */ }
export const Header = () => { /* ... */ }
```

### 3. Interfaces de Props - Siempre Exportadas

Las interfaces que describen las props de un componente **siempre se exportan explícitamente** y siguen el patrón `NombreComponenteProps`.

✅ **Correcto:**
```typescript
// src/ui/components/button.tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export function Button({ variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return <button className={cn(variants({ variant, size }))} {...props} />
}
```

```typescript
// src/app/(root)/auth/_components/login-form/login-form.tsx
export interface LoginFormProps {
  onSuccess?: (user: User) => void
  onError?: (error: Error) => void
}

export function LoginForm({ onSuccess, onError }: LoginFormProps) {
  return <form>{/* ... */}</form>
}
```

❌ **Incorrecto:**
```typescript
function Button({ variant = 'primary', ...props }: any) { /* ... */ }  // Sin interface

interface Props {  // No exportada
  variant?: string
}

function LoginForm(props) { /* ... */ }  // Sin tipos
```

---

## 🗂️ Organización de Componentes

### Componentes Globales (ui/components)

Los componentes que se **reutilizan en múltiples lugares** de la aplicación van en `src/ui/components/`. Incluyen:

- Componentes base de shadcn (button, input, card, etc.)
- Componentes personalizados reutilizables
- Layouts generales
- Wrappers UI comunes

**Estructura:**
```
src/ui/components/
├── button.tsx
├── input.tsx
├── field.tsx
├── dropdown-menu.tsx
├── custom-card.tsx
└── custom-badge.tsx
```

**Uso:**
```typescript
import { Button } from '@/ui/components/button'
import { CustomCard } from '@/ui/components/custom-card'
```

### Componentes de Scope/Feature

Los componentes **específicos de una funcionalidad** van en la carpeta `_components/` de esa feature.

**Estructura para Auth:**
```
src/app/(root)/auth/
├── page.tsx
└── _components/
    ├── login-form/
    │   ├── login-form.tsx          # Componente principal
    │   ├── login-schema.ts         # Esquema Zod/validación
    │   └── index.ts                # Exporta { LoginForm }
    ├── form-field-auth.tsx         # Campo de formulario específico
    └── auth-error-message.tsx      # Componente de error
```

**Estructura para Dashboard:**
```
src/app/dashboard/
├── page.tsx
└── _components/
    ├── dashboard-card.tsx
    ├── stats-panel/
    │   ├── stats-panel.tsx
    │   └── stats-types.ts
    └── user-table.tsx
```

**Uso:**
```typescript
// En src/app/(root)/auth/page.tsx
import { LoginForm } from './_components/login-form'
import { FormFieldAuth } from './_components/form-field-auth'

export default function AuthPage() {
  return (
    <div>
      <LoginForm />
      <FormFieldAuth />
    </div>
  )
}
```

### Estructura de Archivos en Componentes Complejos

Cuando un componente tiene lógica, esquemas o tipos adicionales:

```
src/app/(root)/auth/_components/login-form/
├── index.ts                  # Punto de entrada: export { LoginForm }
├── login-form.tsx            # Componente React
├── login-schema.ts           # Esquema de validación (Zod, etc.)
├── login-types.ts            # Tipos/interfaces adicionales (opcional)
└── login-utils.ts            # Utilidades específicas (opcional)
```

**index.ts:**
```typescript
export { LoginForm, type LoginFormProps } from './login-form'
export { loginSchema } from './login-schema'
```

---

## 🔌 Agentes MCP (Model Context Protocol)

El proyecto tiene dos servidores MCP configurados en `.vscode/mcp.json`. Úsalos según las instrucciones:

### 1. Agente `better-auth`

**URL:** `https://mcp.inkeep.com/better-auth/mcp`

**Qué es:** Servidor remoto con documentación y helpers para autenticación usando Better Auth.

**Cuándo usarlo:**
- Crear endpoints de autenticación (`/api/auth/[...auth]`)
- Generar esquemas y tipos para usuarios, sesiones, tokens
- Implementar proveedores OAuth (Google, GitHub, etc.)
- Manejar refresh tokens, expiración de sesiones
- Validar políticas de seguridad en rutas protegidas

**Cómo pedirlo:**
```
"Usa el agente better-auth para generar el endpoint /api/auth/[...nextauth].ts 
con soporte para Google OAuth y manejo de sesiones."

"Consulta better-auth sobre tipos para User, Session y cómo validar 
headers de autenticación en middleware."
```

**Ejemplo de solicitud:**
```
Usa better-auth para:
1. Crear tipos TypeScript para sesiones de usuario
2. Generar helper para validar tokens JWT
3. Implementar middleware de autenticación para rutas protegidas
```

### 2. Agente `shadcn`

**Comando:** `bun x shadcn@latest mcp`

**Qué es:** CLI de shadcn integrado como servidor MCP para generar componentes UI.

**Cuándo usarlo:**
- Agregar componentes base (button, input, card, etc.) a `src/ui/components/`
- Mantener consistencia de estilos con Tailwind CSS
- Scaffolding rápido de componentes comunes
- Asegurar que los componentes sigan el estándar shadcn

**Dónde se generan:** Todos los componentes van a `src/ui/components/`

**Cómo pedirlo:**
```
"Usa el agente shadcn para generar componentes:
- button en src/ui/components/button
- input en src/ui/components/input
- card en src/ui/components/card"

"Genera un componente toast en src/ui/components/toast 
y asegúrate de exportar su interfaz de props."
```

**Nota:** Los componentes generados por shadcn deben seguir esta estructura:
```
src/ui/components/
├── [component-name].tsx        # Componente principal
└── [component-name].tsx        # Con exports: export { ComponentName, type ComponentNameProps }
```

---

## 🚀 Guía de Desarrollo Next.js

Este proyecto usa **Next.js 15+** con App Router. Sigue estas directrices:

### Estructura de Rutas

- **Carpetas normales** (no terminan en barra): `(root)`, `auth`, `dashboard`
- **Carpetas privadas** (comienzan con `_`): `_components`, `_statics`, `_utils`
- **Información:** El símbolo `()` define grupos de rutas sin afectar la URL

### Convenciones de Archivos Next.js

```
src/app/
├── layout.tsx              # Layout raíz compartido
├── (root)/
│   ├── page.tsx            # URL: /
│   ├── layout.tsx          # Layout del grupo (root)
│   ├── auth/
│   │   ├── page.tsx        # URL: /auth
│   │   ├── layout.tsx      # Layout específico de auth
│   │   └── _components/
│   └── ...
├── dashboard/
│   ├── page.tsx            # URL: /dashboard
│   └── _components/
├── api/
│   ├── auth/
│   │   └── [...nextauth]/route.ts
│   └── users/route.ts
└── _components/            # Componentes compartidos globales
```

### Niveles de Composición

1. **Nivel de layout global** (`src/app/layout.tsx`): Temas, providers, navegación.
2. **Nivel de grupo** (`src/app/(root)/layout.tsx`): Estructura compartida por un grupo de rutas.
3. **Nivel de página** (`src/app/(root)/auth/page.tsx`): Contenido específico de la página.
4. **Componentes:** Descomponen funcionalidad en piezas reutilizables.

### Server vs Client Components

- **Componentes Servidor** (por defecto): `src/app/(root)/page.tsx`, `src/app/(root)/layout.tsx`
- **Componentes Cliente:** Añade `'use client'` al inicio del archivo cuando necesites interactividad.

```typescript
// src/app/(root)/auth/_components/login-form/login-form.tsx
'use client'

import { LoginFormProps } from './login-form'

export function LoginForm(props: LoginFormProps) {
  // Lógica interactiva: useState, useEffect, event handlers
  return <form>{/* ... */}</form>
}
```

### API Routes

Las rutas API están en `src/app/api/`. Cada carpeta es una ruta:

```typescript
// src/app/api/users/route.ts
export async function GET(request: Request) {
  return Response.json({ users: [] })
}

export async function POST(request: Request) {
  const data = await request.json()
  return Response.json({ created: true })
}

// src/app/api/auth/[...nextauth]/route.ts
export { GET, POST } from '@/lib/auth'
```

### Importaciones Alias

Usa el alias `@/` para importaciones relativas (configurado en `tsconfig.json`):

```typescript
// ✓ Bien
import { Button } from '@/ui/components/button'
import { loginSchema } from '@/app/(root)/auth/_components/login-form/login-schema'
import { getUserById } from '@/users/services'

// ✗ Evitar
import { Button } from '../../../../ui/components/button'
```

---

## ✅ Checklist de Desarrollo

Antes de crear un componente o archivo, verifica:

### Para Componentes Globales (`src/ui/components/`)

- [ ] ¿Se reutiliza en más de una feature?
- [ ] ¿Es genérico y configurable?
- [ ] ¿Tiene interface de props exportada?
- [ ] ¿Usa `export function` (no default export)?
- [ ] ¿El nombre es kebab-case?
- [ ] ¿El archivo también es kebab-case?
- [ ] ¿Ha sido validado con shadcn si es un componente base?

### Para Componentes de Feature (`src/app/[feature]/_components/`)

- [ ] ¿Es específico de esta feature?
- [ ] ¿Está en la carpeta `_components/` correcta?
- [ ] ¿Tiene interface de props exportada?
- [ ] ¿Usa `export function` (no default export)?
- [ ] ¿Nombres en kebab-case?
- [ ] ¿Importa componentes globales de `@/ui/components/`?
- [ ] ¿Si es complejo, tiene `index.ts` como punto de entrada?

### Para Archivos de Lógica/Servicios

- [ ] ¿El nombre es kebab-case?
- [ ] ¿Las funciones exportadas tienen tipos explícitos?
- [ ] ¿Está en el módulo correcto (`src/users/`, `src/[feature]/`)?

---

## 🔧 Configuración del Entorno

### PATH para Servidores MCP

Dado que el proyecto es compartido y no puede usar rutas absolutas, la configuración de PATH se realiza en `.vscode/settings.json`:

```json
{
  "terminal.integrated.env.linux": {
    "PATH": "~/.nvm/versions/node/v24.12.0/bin:~/.bun/bin:${env:PATH}"
  }
}
```

Esto permite que los agentes MCP encuentren `bun` y `npx` sin rutas hardcodeadas.

### Lanzar VS Code desde Terminal

Para que los servidores MCP funcionen correctamente, inicia VS Code desde terminal:

```bash
cd /home/red-mat/Proyectos/poma
code .
```

---

## 📝 Ejemplos de Estructura

### Ejemplo 1: Componente Global

```typescript
// src/ui/components/custom-button.tsx
import { ButtonHTMLAttributes } from 'react'

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  full?: boolean
}

export function CustomButton({
  variant = 'primary',
  full = false,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={cn('px-4 py-2', {
        'w-full': full,
        'bg-blue-600': variant === 'primary',
        'bg-gray-300': variant === 'secondary',
      }, className)}
      {...props}
    />
  )
}
```

### Ejemplo 2: Componente de Feature

```typescript
// src/app/(root)/auth/_components/login-form/login-form.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/ui/components/button'
import { Input } from '@/ui/components/input'
import { loginSchema } from './login-schema'

export interface LoginFormProps {
  onSubmit?: (email: string) => Promise<void>
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const validated = loginSchema.parse({ email })
      await onSubmit?.(validated.email)
    } catch (err) {
      setError('Email inválido')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="correo@ejemplo.com"
      />
      {error && <span className="text-red-500">{error}</span>}
      <Button type="submit">Ingresar</Button>
    </form>
  )
}
```

```typescript
// src/app/(root)/auth/_components/login-form/login-schema.ts
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Mínimo 8 caracteres'),
})

export type LoginInput = z.infer<typeof loginSchema>
```

```typescript
// src/app/(root)/auth/_components/login-form/index.ts
export { LoginForm, type LoginFormProps } from './login-form'
export { loginSchema, type LoginInput } from './login-schema'
```

---

## 📚 Referencias y Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/)
- [Better Auth Docs](https://www.better-auth.com)

---

## 🔄 Actualizaciones de Este Documento

Este archivo debe revisarse y actualizarse cuando:

- Se agreguen nuevas features o módulos
- Se cambien las convenciones de nomenclatura
- Se implementen nuevos patrones de desarrollo
- Se integren nuevas herramientas o agentes MCP
- Se encuentren inconsistencias en el código existente

**Última actualización:** Febrero 2026
