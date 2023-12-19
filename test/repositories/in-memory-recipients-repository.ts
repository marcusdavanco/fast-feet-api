import { PaginationParams } from "@/core/repositories/pagination-params";
import { RecipientsRepository } from "@/domain/application.ts/repositories/recipients-repository";
import { Recipient } from "@/domain/enterprise/entities/recipient";

export class InMemoryRecipientsRepository implements RecipientsRepository {
  public items: Recipient[] = []
  
  findbyId(id: string): Promise<Recipient | null> {
    throw new Error("Method not implemented.");
  }
  findManyRecent(params: PaginationParams): Promise<Recipient[]> {
    throw new Error("Method not implemented.");
  }
  create(recipient: Recipient): Promise<void> {
    throw new Error("Method not implemented.");
  }
  save(recipient: Recipient): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(recipient: Recipient): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(recipient: Recipient): Promise<void> {
    throw new Error("Method not implemented.");
  }
}