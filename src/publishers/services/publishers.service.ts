import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Publisher } from '../entities/publisher.entity';

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(Publisher) private publishersRepo: Repository<Publisher>,
  ) {}

  async getAllPublishers(): Promise<Publisher[]> {
    return await this.publishersRepo.find();
  }

  async getOnePublisher(id: string): Promise<Publisher> {
    return await this.publishersRepo.findOne(id);
  }

  async createPublisher(body: any): Promise<Publisher> {
    return await this.publishersRepo.save(body);
  }

  async updatePublisher(
    id: string,
    body: any,
  ): Promise<Publisher> {
    const thisPublisher = await this.publishersRepo.findOne(id);
    await this.publishersRepo.merge(thisPublisher, body);
    return await this.publishersRepo.save(thisPublisher);
  }

  async deletePublisher(id: string): Promise<Publisher[]> {
    await this.publishersRepo.delete(id);
    return await this.publishersRepo.find();
  }
}
