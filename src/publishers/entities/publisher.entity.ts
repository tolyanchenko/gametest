import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Game } from '../../games/entities/game.entity';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  siret: number;

  @Column()
  phone: string;

  @OneToMany(() => Game, (game: Game) => game.publisher)
  public games: Game[];
}
