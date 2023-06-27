import {User as IUser} from "@to-get-there/types";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
