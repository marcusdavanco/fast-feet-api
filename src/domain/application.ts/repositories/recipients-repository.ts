import { PaginationParams } from '@/core/repositories/pagination-params'
import { Recipient } from '@/domain/enterprise/entities/recipient'

export interface RecipientsRepository {
  findById(id: string): Promise<Recipient | null>
  findManyRecent(params: PaginationParams): Promise<Recipient[]>
  create(recipient: Recipient): Promise<void>
  save(recipient: Recipient): Promise<void>
  update(recipient: Recipient): Promise<void>
  delete(recipient: Recipient): Promise<void>
}
