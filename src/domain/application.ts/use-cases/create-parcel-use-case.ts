import { Either, right } from '@/core/either'
import { Address, Parcel } from '@/domain/enterprise/entities/parcel'
import { ParcelsRepository } from '../repositories/parcels-repository'
import { Status } from '@/domain/enterprise/entities/status'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface CreateParcelUseCaseRequest {
  delivererId: string
  recipientId: string
  status: Status
  deliveryAddress: Address
  isDelivered: boolean
}

type CreateParcelUseCaseResponse = Either<
  null,
  {
    parcel: Parcel
  }
>

export class CreateParcelUseCase {
  constructor(private parcelsRepository: ParcelsRepository) {}

  async execute({
    delivererId,
    recipientId,
    status = Status.PENDING_PICKUP,
    deliveryAddress,
    isDelivered = false,
  }: CreateParcelUseCaseRequest): Promise<CreateParcelUseCaseResponse> {
    const parcel = Parcel.create({
      delivererId: new UniqueEntityID(delivererId),
      recipientId: new UniqueEntityID(recipientId),
      status,
      deliveryAddress,
      isDelivered,
    })

    await this.parcelsRepository.create(parcel)

    return right({
      parcel,
    })
  }
}
