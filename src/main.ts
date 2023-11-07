import { ValidationPipe } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { NestFactory } from '@nestjs/core';



async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
