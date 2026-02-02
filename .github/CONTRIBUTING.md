# **Guía de Colaboración**

¡Gracias por el interés en contribuir a este proyecto\! Para mantener un entorno de desarrollo consistente y un historial de cambios limpio, es necesario seguir estos pasos de configuración inicial.

## ---

**🛠 Requisitos Previos**

Este proyecto utiliza **Bun** como entorno de ejecución (runtime) y gestor de paquetes por su velocidad y eficiencia.

### **1\. Instalación de Bun**

Si aún no tienes instalado Bun, puedes hacerlo ejecutando el siguiente comando en tu terminal (Linux, macOS o WSL):

Bash

curl \-fsSL https://bun.sh/install | bash

Para confirmar que la instalación fue exitosa, verifica la versión:

Bash

bun \--version

## ---

**📝 Configuración de Git**

Para estandarizar nuestros mensajes de commit, utilizamos un archivo de plantilla llamado .gitmessage. Debes configurarlo en tu entorno local para que Git lo reconozca automáticamente.

### **2\. Configurar el Template de Mensajes**

Ejecuta el siguiente comando en la raíz del repositorio para vincular la plantilla de forma **local**:

Bash

git config \--local commit.template .gitmessage

**Nota:** Al usar \--local, esta configuración solo afectará a este proyecto en particular, respetando tus configuraciones globales de Git.

## ---

**🚀 Pasos para empezar a desarrollar**

1. **Instalar dependencias:**  
   Bash  
   bun install

2. **Crear una rama para tu trabajo:**  
   Bash  
   git checkout \-b feature/nombre-de-tu-mejora

3. **Realizar tus cambios y hacer commit:**  
   Al ejecutar git commit, se abrirá tu editor de texto con la estructura definida en .gitmessage para que la completes.