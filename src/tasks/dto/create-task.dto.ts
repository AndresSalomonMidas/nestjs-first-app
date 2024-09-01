import { IsString, IsBoolean, MinLength } from 'class-validator';

// DTO: Data Transfer Object => what is sent from the client to the server

export class CreateTaskDto {
  @IsString()
  @MinLength(5)
  title: string;

  @IsBoolean()
  completed: boolean;
}
