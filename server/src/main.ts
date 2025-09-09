import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().getInstance().set('trust proxy', 1);
  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'https://visvotsav-teal.vercel.app',
        'http://localhost:3000',
        'http://localhost:3001'
      ];
    
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://visvotsav-teal.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
    if (req.method === 'OPTIONS') {
      res.sendStatus(204); // or 200
    } else {
      next();
    }
  });
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Visvotsav Fest API')
    .setDescription(
      'API documentation for the Visvotsav college fest registration system.',
    )
    .setVersion('1.0')
    .addTag('Registrations')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
