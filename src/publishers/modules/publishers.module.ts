import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PublishersService } from '../services/publishers.service';
import { PublishersController } from '../controllers/publishers.controller';
import { Publisher } from '../entities/publisher.entity';

@Module({
  controllers: [PublishersController],
  providers: [PublishersService],
  imports: [TypeOrmModule.forFeature([Publisher])],
})
export class PublishersModule {}
