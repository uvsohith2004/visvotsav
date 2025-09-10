import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let cachedServer: any;

async function bootstrap() {
  const expressApp = express();

  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.getHttpAdapter().getInstance().set('trust proxy', 1);

  app.enableCors({
    origin: [
      'https://visvotsav-teal.vercel.app',
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
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

  await app.init();
  return expressApp;
}

export default async function handler(req, res) {
  
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return cachedServer(req, res);
}
