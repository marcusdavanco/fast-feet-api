import { PaginationParams } from '@/core/repositories/pagination-params'
import { RecipientsRepository } from '@/domain/application.ts/repositories/recipients-repository'
import { Recipient } from '@/domain/enterprise/entities/recipient'

export class InMemoryRecipientsRepository implements RecipientsRepository {
  public items: Recipient[] = []

  async findById(id: string): Promise<Recipient | null> {
    const index = this.items.findIndex(
      (recipient) => recipient.id.toString() === id,
    )

    return this.items[index]
  }

  findManyRecent(params: PaginationParams): Promise<Recipient[]> {
    throw new Error('Method not implemented.')
  }

  async create(recipient: Recipient): Promise<void> {
    this.items.push(recipient)
  }

  save(recipient: Recipient): Promise<void> {
    throw new Error('Method not implemented.')
  }

  update(recipient: Recipient): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(recipient: Recipient): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
