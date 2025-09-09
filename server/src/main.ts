import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
const app = await NestFactory.create(AppModule);

app.enableCors({
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
});
app.useGlobalPipes(new ValidationPipe());
const config = new DocumentBuilder()
.setTitle('Visvotsav Fest API')
.setDescription('API documentation for the Visvotsav college fest registration system.')
.setVersion('1.0')
.addTag('Registrations')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, document);

await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
