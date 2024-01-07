import { PaginationParams } from '@/core/repositories/pagination-params'
import { Parcel } from '@/domain/enterprise/entities/parcel'

export interface ParcelsRepository {
  findById(id: string): Promise<Parcel | null>
  findManyByDelivererId(
    delivererId: string,
    params: PaginationParams,
  ): Promise<Parcel[]>
  findManyByRecipientId(
    recipientId: string,
    params: PaginationParams,
  ): Promise<Parcel[]>
  create(parcel: Parcel): Promise<void>
  save(parcel: Parcel): Promise<void>
}
