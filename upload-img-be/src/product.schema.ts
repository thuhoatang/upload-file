import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  

  @Prop()
  urlImage: string[];

  @Prop()
  name: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);