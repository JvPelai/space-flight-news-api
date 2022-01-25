import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToMany,
	JoinTable
} from 'typeorm';
import { Launch } from './Launch';
import { Event } from './Event';

@Entity()
export class Article {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	title: string;

	@Column()
	url: string;

	@Column()
	imgeUrl: string;

	@Column()
	newsSite: string;

	@Column()
	summary: string;

	@Column()
	publishedAt: string;

	@ManyToMany(() => Launch)
	@JoinTable()
	launches: Launch[];

	@ManyToMany(() => Event)
	@JoinTable()
	events: Event[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
