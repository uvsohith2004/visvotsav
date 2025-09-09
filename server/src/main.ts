import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import serverlessExpress from '@vendia/serverless-express';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ CORS same as Express version
  app.enableCors({
    origin: ['https://visvotsav.vercel.app'],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  // ✅ Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Visvotsav Fest API')
    .setDescription('API documentation for the Visvotsav college fest registration system.')
    .setVersion('1.0')
    .addTag('Registrations')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();

  return serverlessExpress({ app: expressApp });
}


export default async function handler(req: any, res: any) {
  server = server ?? (await bootstrap());
  return server(req, res);
}
