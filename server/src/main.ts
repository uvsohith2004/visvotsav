import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
const app = await NestFactory.create(AppModule);

app.enableCors({
  origin: ["http://localhost:5173", "https://visvotsav.pbrvits.ac.in","https://visvotsav-teal.vercel.app"],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
  credentials: true,
  allowedHeaders: 'Content-Type, Accept, Authorization',
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
