import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
} from '@nestjs/common';

import { GamesService } from '../services/games.service';

@Controller('games')
export class GamesController {
  constructor(
    private gamesService: GamesService,
  ) {}

  @Get()
  // get all the games
  getAll() {
    return this.gamesService.getAllGames();
  }

  @Get(':id')
  // get a game by id
  getOne(@Param('id') id: string) {
    return this.gamesService.getOneGame(id);
  }

  @Post()
  // create a game
  create(@Body() body: any) {
    return this.gamesService.createGame(body);
  }

  @Delete(':id')
  // delete a game
  remove(@Param('id') id: string) {
    return this.gamesService.deleteGame(id);
  }

  @Put(':id')
  // update a game
  update(@Body() body: any, @Param('id') id: string) {
    return this.gamesService.updateGame(id, body);
  }

  @Get(':id/publisher')
  // get a publisher by game id
  getPublisherByGame(@Param('id') id: string) {
    return this.gamesService.getPublisherByGame(id);
  }

  @Post('discount')
  // get all games considering release date
  getAllGamesWithDiscount() {
    return this.gamesService.getAllGamesWithDiscount();
  }
}
