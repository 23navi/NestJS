import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  app.useGlobalPipes(new ValidationPipe());

  // Builder pattern
  const config = new DocumentBuilder()
    .setTitle('Message API')
    .setDescription('some desp')
    .setVersion('1.0.3')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3002);
}
bootstrap();
