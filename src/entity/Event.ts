import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Event {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	provider: string;
}
