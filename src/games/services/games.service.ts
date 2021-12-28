import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Game } from '../entities/game.entity';

@Injectable()
export class GamesService {
  constructor(@InjectRepository(Game) private gamesRepo: Repository<Game>) {}

  async getAllGames() {
    return await this.gamesRepo.find();
  }

  async getOneGame(id: string) {
    return await this.gamesRepo.findOne(id, {
      relations: ['publisher'],
    });
  }

  async createGame(body: any) {
    return await this.gamesRepo.save(body);
  }

  async updateGame(id: string, body: any) {
    const thisGame = await this.gamesRepo.findOne(id);
    await this.gamesRepo.merge(thisGame, body);
    return await this.gamesRepo.save(thisGame);
  }

  async deleteGame(id: string) {
    await this.gamesRepo.delete(id);
    return await this.gamesRepo.find();
  }

  async getPublisherByGame(id: string) {
    const res = await this.gamesRepo.findOne(id, {
      relations: ['publisher'],
    });
    return res.publisher;
  }

  async getAllGamesWithDiscount() {
    const allGames = await this.gamesRepo.find();
    const todayDate = new Date();

    let months;
    allGames.forEach((game, index) => {
      months = (game.releaseDate.getFullYear() - todayDate.getFullYear()) * 12;
      months -= todayDate.getMonth();
      months += game.releaseDate.getMonth();
      if (months * -1 > 11 && months * -1 < 18) {
        game.price = Math.floor(game.price - game.price / 20);
      }
      if (months * -1 > 18) {
        allGames.splice(index, 1);
      }
    });
    return allGames;
  }
}
