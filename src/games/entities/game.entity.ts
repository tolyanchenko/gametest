import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Publisher } from '../../publishers/entities/publisher.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column()
  price: number;

  @Column()
  releaseDate: Date;

  @Column('text', { array: true, nullable: true })
  tags: string[];

  @ManyToOne(() => Publisher, (publisher: Publisher) => publisher.games)
  @JoinColumn({ name: 'publisher' })
  public publisher: Publisher;
}
