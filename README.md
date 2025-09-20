# Pruebas Funcionales Automatizadas a una Plataforma Web

🔧 Escenario de prueba: Automatizar las interacciones básicas de un usuario en la plataforma de OrangeHRM.

📝 Casos a automatizar:

- ✅ Ingresar credenciales incorrectas: Validar que no se pueda acceder al dashboard cuando el usuario ingrese datos erróneos
- ✅ Hacer login: Validar que el usuario pueda acceder al dashboard
- ✅ Acceder a la sección My info: Validar que las opciones del menú existan en el dashboard, acceder a la sección y obtener el texto de Personal Details
- ✅ Agregar y guardar la información de Personal Details: Llenar los campos y dar clic en el botón guardar
  - Employee Full Name
  - Employee Id
  - Driver's License Number
  - Other Id
  - Driver's License Number
  - License Expiry Date
  - Nationality
  - Marital Status
  - Date of Birth
  - Gender
- ✅ Agregar y guardar la información de Custom Fields: Llenar los campos y dar clic en el botón guardar
  - Blood Type
  - Test_Field
- Realizar acciones en la sección de Attachments:
  - Cargar: Se agrego código par carga pero no se logro realizar con exito ya que bot+on de carga se presentaba oculto.
  - ✅ Editar: se edito comentario de imagen
  - ✅ Descargar
  - ✅ Eliminar una imagen: se selecciono la opción de eliminar y la cancelo la misma.
- ✅ Hacer logout: Validar que el usuario pueda salir del dashboard

# Instalación

## ✅ Requisitos Previos

- Node.js

## 🧪 Instalación de Cypress

1. Agregar Cypress como dependencia: `npm install cypress --save-dev`
2. Iniciar proyecto Cypress: `npx cypress open`

## 🧰 Estructura del Proyecto

- ➡️ cypress/
  - ⏩ e2e/
  - ⏩ fixtures/
  - ⏩ support/
- ➡️ cypress.config.js

- **cypress/e2e/**: aquí van tus pruebas (.cy.js o .cy.ts)
- **cypress/fixtures/**: datos de prueba en formato JSON
- **cypress/support/**: configuraciones globales y comandos personalizados
- **cypress.config.js**: archivo de configuración general de Cypress

## Ejecución de Cypress

- Modo interactivo: `npx cypress open`

  Este comando se ejecuta desde la terminal de nuestro proyecto. Abre ventana de Cypress en donde se selecciona la opción e2e, nos abrira la suit de pruebas en donde daremos click a "Login" y se dara inicio la ejecuón de nuestros test.

- Modo headless (CI/CD): `npx cypress run`  
  Este comando se ejecuta desde la terminal de nuestro proyecto. Nos hara la ejecucón de los test en la misma terminal y mostrara los errores (en caso de tenerlos), el porcentaje de aprobación y una imagen referente.
