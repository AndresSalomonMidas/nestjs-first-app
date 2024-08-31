// DTO: Data Transfer Object => what is sent from the client to the server

export interface CreateTaskDto {
  title: string;
  completed: boolean;
}
