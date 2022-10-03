import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './public/images.module';

@Module({
  imports: [ImagesModule, ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'file')}),
  MongooseModule.forRoot('mongodb://localhost/images-upload') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
