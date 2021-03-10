"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
async function bootstrap() {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Historias Clinicas')
        .setDescription('API Rest para historias clinicas')
        .setVersion('1.0')
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(morgan('dev'));
    app.use(compression());
    app.use(helmet());
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map