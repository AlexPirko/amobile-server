import * as session from 'express-session';
import * as passport from 'passport';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'keyword',
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: 'strict',
      },
    }),
    passport.initialize(),
    passport.session(),
  );

  app.use(cookieParser());

  app.enableCors({
    origin: [
      'https://amobile.vercel.app',
      'http://amobile.vercel.app',
      'http://localhost:3001',
      'http://localhost:3000',
    ],
    credentials: true, // разрешить отправку учетных данных (например, куки)
  });

  const config = new DocumentBuilder()
    .setTitle('A-mobile')
    .setDescription('api documentation')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
