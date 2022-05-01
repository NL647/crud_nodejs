import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("Taks manager")
  .setDescription(
    'Task manager application \n\n## Congratulations! Your application is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your app comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .setVersion("88bk3erj")
  .addBearerAuth()
  .build();

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "Taks manager",
};