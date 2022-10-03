import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/product.schema';

@Module({
  imports: [MulterModule.register({dest: './uploads'}), 
  MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
