import { PaginationParams } from "@/core/repositories/pagination-params";
import { DeliverersRepository } from "@/domain/application.ts/repositories/deliverers-repository";
import { Deliverer } from "@/domain/enterprise/entities/deliverer";

export class InMemoryDeliverersRepository implements DeliverersRepository {
  public items: Deliverer[] = []
  
  async findbyId(id: string): Promise<Deliverer | null> {
    throw new Error("Method not implemented.");
  }
  async findManyRecent(params: PaginationParams): Promise<Deliverer[]> {
    throw new Error("Method not implemented.");
  }
  async create(deliverer: Deliverer) {
    this.items.push(deliverer)
    
  }
  async save(deliverer: Deliverer): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async update(deliverer: Deliverer): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(deliverer: Deliverer): Promise<void> {
    throw new Error("Method not implemented.");
  }

}