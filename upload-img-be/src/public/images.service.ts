import { ArgumentMetadata, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/product.schema';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  transform(value: any, metadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata
    const oneKb = 1000;
    return value.size < oneKb;
  }

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  findAll() {
    return `This action returns all images`;
  }

  findOne(id: string) {
    const rs = this.productModel.findOne({ _id: id });
    return rs;
  }

  update(id: string, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  async updateById(id: string, imgURL: string) {
    console.log(id, imgURL);
    return await this.productModel.findByIdAndUpdate(
      { _id: id },
      { $push: { urlImage: imgURL } },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
