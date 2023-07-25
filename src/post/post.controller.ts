import { Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postServise: PostService) {}

  @Post('add')
  addPost(): any {
    return this.postServise.addPost();
  }
}
