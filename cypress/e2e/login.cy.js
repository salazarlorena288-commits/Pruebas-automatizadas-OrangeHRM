describe("login", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Error por credenciales incorrectas", () => {
    cy.get('[name="username"]').type("admin134");
    cy.get('[name="password"]').type("admin123#");
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-alert-content")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });

  it("login_exitoso", () => {
    //Hacer login: Validar que el usuario pueda acceder al dashboardcy.get('[name="username"]').type("Admin");
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-topbar-header-title", { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Dashboard");

    //Acceder a la sección My info: Validar que las opciones del menú existan en el dashboard, acceder a la sección y obtener el texto de Personal Details
    cy.get(":nth-child(6) > .oxd-main-menu-item")
      .should("be.visible")
      .and("contain", "My Info")
      .click();

    ////////////////////////////////////////////////////////////////
    const numeroAleatorio = Math.floor(Math.random() * 1000000000);
    cy.wrap(numeroAleatorio).as("numeroAleatorio");

    cy.get('[name="firstName"]')
      .should("have.length", 1)
      .clear()
      .type("Claudio");
    cy.get('[name="middleName"]')
      .should("have.length", 1)
      .clear()
      .type("Gallo");
    cy.get('[name="lastName"]')
      .should("have.length", 1)
      .clear()
      .type("Del monte");

    cy.get(
      ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type(numeroAleatorio.toString());

    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type(numeroAleatorio.toString());

    cy.get(
      ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type(numeroAleatorio.toString());

    cy.get(
      ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label"
    ).click();

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).click();

    cy.get(".oxd-calendar-selector-year-selected").should("be.visible").click();
    cy.get(".oxd-calendar-dropdown").contains("2025").click();
    cy.get(".oxd-calendar-selector-month-selected")
      .should("be.visible")
      .click();
    cy.get(".oxd-calendar-dropdown").contains("December").click();
    cy.get(".oxd-calendar-date-wrapper").contains(/^20$/).click();

    cy.get(
      ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-wrapper").should("be.visible");
    cy.get(".oxd-select-wrapper").contains("American").click();

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown")
      .should("be.visible")
      .contains("Single")
      .click();

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).click();
    cy.get(".oxd-calendar-selector-year").should("be.visible").click();
    cy.get(".oxd-calendar-dropdown").contains("1997").click();
    cy.get(".oxd-calendar-selector-month-selected")
      .should("be.visible")
      .click();
    cy.get(".oxd-calendar-dropdown").contains("March").click();
    cy.get(".oxd-calendar-date-wrapper").contains(/^19$/).click();
    cy.get(".oxd-form-actions > .oxd-button").contains("Save").click();

    //Agregar y guardar la información de Custom Fields: Llenar los campos y dar clic en el botón guardar
    cy.get(
      ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-wrapper").should("be.visible");
    cy.get(".oxd-select-wrapper").contains("A+").click();

    cy.get(
      ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    )
      .clear()
      .type(numeroAleatorio.toString());
    cy.get(".oxd-form-actions > .oxd-button").contains("Save").click();

    /////Cargar imagen/////
    /*cy.get(".orangehrm-action-header > .oxd-button").contains("Add").click();
    cy.get("input.oxd-file-input")
      .should("exist")
      .then(($input) => {
        $input[0].removeAttribute("style");
        $input[0].style.opacity = "1";
        $input[0].style.pointerEvents = "auto";
        $input[0].style.position = "relative";
        $input[0].style.width = "100px";
        $input[0].style.maxWidth = "100px";
      });
    cy.get("input.oxd-file-input").attachFile("../fixtures/imagen.jpg");
    cy.wait(5000);
    cy.get(".oxd-textarea").type(
      "Se agrego imagen en attachments, y comentario de prueba"
    );
    cy.wait(5000);
    cy.get(
      ".orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
    ).click();
    cy.get(".oxd-input-group > .oxd-text").should("be.visible");*/

    //Descargar imagen
    cy.get(".oxd-table-cell-actions > :nth-child(3) > .oxd-icon").click();
    //Editar imagen
    cy.get(".oxd-table-cell-actions > :nth-child(1) > .oxd-icon").click();
    cy.get(".oxd-textarea")
      .clear()
      .type("Se edito el texto para la imagen test.png por Claudio Gallo");
    cy.get(
      ".orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
    ).click();
    //Click en eliminar imagen y cancelar
    cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").click();
    cy.get(".oxd-button--ghost").contains("Cancel").click();

    //Logout
    cy.get(".oxd-userdropdown-tab").click();
    cy.contains("Logout").should("be.visible").click();
  });
});
