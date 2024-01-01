import { PaginationParams } from '@/core/repositories/pagination-params'
import { Deliverer } from '@/domain/enterprise/entities/deliverer'

export interface DeliverersRepository {
  findById(id: string): Promise<Deliverer | null>
  findManyRecent(params: PaginationParams): Promise<Deliverer[]>
  create(deliverer: Deliverer): Promise<void>
  save(deliverer: Deliverer): Promise<void>
  delete(deliverer: Deliverer): Promise<void>
}
