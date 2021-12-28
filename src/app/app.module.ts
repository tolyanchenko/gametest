import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';

import { PublishersModule } from '../publishers/modules/publishers.module';
import { GamesModule } from '../games/modules/games.module';
import { Publisher } from '../publishers/entities/publisher.entity';
import { Game } from '../games/entities/game.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/envs/.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Game, Publisher],
      synchronize: true,
    }),
    GamesModule,
    PublishersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
