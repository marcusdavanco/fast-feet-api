import { PaginationParams } from '@/core/repositories/pagination-params'
import { ParcelsRepository } from '@/domain/application.ts/repositories/parcels-repository'
import { Parcel } from '@/domain/enterprise/entities/parcel'

export class InMemoryParcelsRepository implements ParcelsRepository {
  public items: Parcel[] = []

  async findById(id: string): Promise<Parcel | null> {
    const index = this.items.findIndex((parcel) => parcel.id.toString() === id)

    return this.items[index]
  }

  findManyByDelivererId(
    delivererId: string,
    params: PaginationParams,
  ): Promise<Parcel[]> {
    throw new Error('Method not implemented.')
  }

  findManyByRecipientId(
    recipientId: string,
    params: PaginationParams,
  ): Promise<Parcel[]> {
    throw new Error('Method not implemented.')
  }

  async create(parcel: Parcel): Promise<void> {
    this.items.push(parcel)
  }

  async save(parcel: Parcel): Promise<void> {
    const parcelIndex = this.items.findIndex(
      (targetParcel) => targetParcel.id.toString() === parcel.id.toString(),
    )

    this.items[parcelIndex] = parcel
  }
}
