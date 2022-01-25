import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Launch {
  @PrimaryColumn()
	readonly id: string;

	@Column()
	provider: string;
}
