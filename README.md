# Programación IV

**Autor:** _Rahi Ruilova_
**Materia:** Programación IV
**Periodo:** 2026

---

## 📌 Descripción

Repositorio de la materia **Programación IV**, donde se almacenan los proyectos, prácticas y ejercicios desarrollados durante el curso.

## 🎯 Objetivo principal

Aprender y aplicar los fundamentos del **desarrollo de aplicaciones móviles**, construyendo apps multiplataforma con Flutter, gestionando el código con Git y trabajando en un entorno Linux, siguiendo buenas prácticas de organización y seguridad del proyecto.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Mini concepto |
|---|---|
| **Flutter** | Framework de Google para crear aplicaciones móviles, web y de escritorio desde un solo código base. |
| **Dart** | Lenguaje de programación orientado a objetos con el que se escriben las aplicaciones en Flutter. |
| **Android** | Sistema operativo móvil de Google; plataforma principal donde se compilan y prueban las apps. |
| **Android Studio / SDK** | Herramientas oficiales para compilar apps Android, administrar emuladores y firmar aplicaciones. |
| **Git** | Sistema de control de versiones que registra el historial de cambios del código. |
| **GitHub** | Plataforma en la nube para alojar repositorios Git y colaborar en proyectos. |
| **.gitignore** | Archivo que indica a Git qué carpetas o archivos no debe subir (ej. `build/`, `node_modules/`, `.env`). |
| **Node.js / npm** | Entorno para ejecutar JavaScript fuera del navegador; npm instala dependencias en `node_modules/`. |
| **Variables de entorno (.env)** | Archivo que guarda configuraciones y credenciales sensibles fuera del código fuente. |
| **Keystore (.jks / .keystore)** | Archivo con las llaves privadas usadas para firmar apps Android antes de publicarlas. |
| **Ubuntu (Linux)** | Sistema operativo de código abierto usado como entorno de desarrollo; permite gestionar usuarios con permisos `sudo`. |
| **Visual Studio Code** | Editor de código ligero con extensiones para Flutter, Dart y Git. |

---

## 📁 Estructura del repositorio

```
programacion-iv/
├── proyectos/
│   ├── app1/
│   └── app2/
├── practicas/
├── .gitignore
└── README.md
```

---

## 🚀 Cómo ejecutar un proyecto

```bash
# Clonar el repositorio
git clone https://github.com/usuario/programacion-iv.git
cd programacion-iv/proyectos/app1

# Instalar dependencias
flutter pub get

# Ejecutar la aplicación
flutter run
```

---

## 🔒 Buenas prácticas

- No subir archivos `.env`, `.jks` ni `.keystore` al repositorio.
- Ignorar carpetas generadas como `build/` y `node_modules/`.
- Hacer commits pequeños y con mensajes descriptivos.
-
