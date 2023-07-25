import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { Tag } from '../tags/tags.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  addPost() {
    const post = new Post();
    const tag = new Tag();
    tag.name = 'some';
    post.title = 'title';
    post.content = 'content';
    post.image = 'image';
    post.tags = [tag];
    return this.postRepository.save(post);
  }
}


