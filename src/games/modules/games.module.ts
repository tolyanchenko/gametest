import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GamesController } from '../controllers/games.controller';
import { GamesService } from '../services/games.service';
import { PublishersService } from 'src/publishers/services/publishers.service';
import { Publisher } from 'src/publishers/entities/publisher.entity';
import { Game } from '../entities/game.entity';

@Module({
  controllers: [GamesController],
  providers: [GamesService, PublishersService],
  imports: [TypeOrmModule.forFeature([Game, Publisher])],
})
export class GamesModule {}
