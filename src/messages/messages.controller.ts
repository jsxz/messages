import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  private messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body)
    return this.messagesService.create(body.content);
  }

  @Get("/:id")
  getMessage(@Param("id") id: string) {
    return this.messagesService.finOne(id);
  }
}
