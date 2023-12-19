import { PaginationParams } from "@/core/repositories/pagination-params";
import { Deliverer } from "@/domain/enterprise/entities/deliverer";

export interface DeliverersRepository {
  findbyId(id: string): Promise<Deliverer | null>
  findManyRecent(params: PaginationParams): Promise<Deliverer[]>
  create(deliverer: Deliverer): Promise<void>
  save(deliverer: Deliverer): Promise<void>
  update(deliverer: Deliverer): Promise<void>
  delete(deliverer: Deliverer): Promise<void>
}