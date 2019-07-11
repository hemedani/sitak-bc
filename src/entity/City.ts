import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Parish } from "./Parish";

@ObjectType()
@Entity()
export class City extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  EnName: string;

  @Field(() => [Parish])
  @OneToMany(() => Parish, parish => parish.city)
  parishes: Parish[];
}
