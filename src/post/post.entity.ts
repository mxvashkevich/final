import { Tag } from "../tags/tags.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'Post' })
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  image: string;

  @ManyToMany(() => Tag, (Tag) => Tag.id, { cascade: ['insert'] }) // Tag.name -> Tag.id
  @JoinTable(
    {
      name: 'tags_posts',
      joinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
      },
      inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
      },
    }
  ) // ?
  tags: Tag[];
}