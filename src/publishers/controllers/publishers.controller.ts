import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
} from '@nestjs/common';

import { PublishersService } from '../services/publishers.service';
import { Publisher } from '../entities/publisher.entity';

@Controller('publishers')
export class PublishersController {
  constructor(private publishersService: PublishersService) {}

  @Get()
  // get all publishers
  getAllPublishers(): Promise<Publisher[]> {
    return this.publishersService.getAllPublishers();
  }

  @Get(':id')
  // get a publisher
  getOnePublisher(@Param('id') id: string): Promise<Publisher> {
    return this.publishersService.getOnePublisher(id);
  }

  @Post()
  // create a publisher
  createPublisher(@Body() body: any): Promise<Publisher> {
    return this.publishersService.createPublisher(body);
  }

  @Delete(':id')
  // delete a publisher
  removePublisher(@Param('id') id: string): Promise<Publisher[]> {
    return this.publishersService.deletePublisher(id);
  }

  @Put(':id')
  // update a publisher
  updatePublisher(
    @Body() body: any,
    @Param('id') id: string,
  ): Promise<Publisher> {
    return this.publishersService.updatePublisher(id, body);
  }
}
