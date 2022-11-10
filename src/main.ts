import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(
    `🟢 ${port} 포트로 서버가 열렸어요! http://localhost:${port}/api`,
  );
}
bootstrap();
