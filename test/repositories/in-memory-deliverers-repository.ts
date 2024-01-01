import { PaginationParams } from '@/core/repositories/pagination-params'
import { DeliverersRepository } from '@/domain/application.ts/repositories/deliverers-repository'
import { Deliverer } from '@/domain/enterprise/entities/deliverer'

export class InMemoryDeliverersRepository implements DeliverersRepository {
  public items: Deliverer[] = []

  async findById(id: string): Promise<Deliverer | null> {
    const deliverer =
      this.items.find((deliverer) => deliverer.id.toString() === id) || null

    if (!deliverer) {
      return null
    }

    return deliverer
  }

  async findManyRecent(params: PaginationParams): Promise<Deliverer[]> {
    throw new Error('Method not implemented.')
  }

  async create(deliverer: Deliverer) {
    this.items.push(deliverer)
  }

  async save(deliverer: Deliverer): Promise<void> {
    const delivererIndex = this.items.findIndex(
      (targetDeliverer) =>
        targetDeliverer.id.toString() === deliverer.id.toString(),
    )

    this.items[delivererIndex] = deliverer
  }

  async delete(deliverer: Deliverer): Promise<void> {
    const itemsIndex = this.items.findIndex((item) => item.id === deliverer.id)

    this.items.splice(itemsIndex, 1)
  }
}
