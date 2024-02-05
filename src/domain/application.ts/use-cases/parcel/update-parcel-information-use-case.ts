import { Either, left, right } from '@/core/either'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Parcel } from '@/domain/enterprise/entities/parcel'
import { ParcelsRepository } from '../../repositories/parcels-repository'
import { EmptyUpdateError } from '@/core/errors/errors/empty-update-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Status } from '@/domain/enterprise/entities/status'

interface DeliveryAddress {
  street: string
  neighborhood: string
  city: string
  state: string
  postalCode: string
}

interface UpdateParcelInformationUseCaseRequest {
  id: string
  delivererId?: string
  recipientId?: string
  status?: keyof typeof Status
  deliveryAddress?: DeliveryAddress
  isDelivered?: string
}

type UpdateParcelInformationUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    parcel: Parcel
  }
>

export class UpdateParcelInformationUseCase {
  constructor(private parcelsRepository: ParcelsRepository) {}

  private updateDeliveryAddressInformation(
    original: DeliveryAddress,
    update: Partial<DeliveryAddress>,
  ): DeliveryAddress {
    return {
      ...original,
      ...update,
    }
  }

  async execute({
    id,
    delivererId,
    recipientId,
    deliveryAddress,
    isDelivered,
    status,
  }: UpdateParcelInformationUseCaseRequest): Promise<UpdateParcelInformationUseCaseResponse> {
    const parcel = await this.parcelsRepository.findById(id)

    if (!parcel) {
      return left(new ResourceNotFoundError())
    }

    if (
      !delivererId &&
      !deliveryAddress &&
      !isDelivered &&
      !recipientId &&
      !status
    ) {
      return left(new EmptyUpdateError())
    }

    parcel.delivererId = new UniqueEntityID(delivererId) ?? parcel.delivererId
    parcel.recipientId = new UniqueEntityID(recipientId) ?? parcel.recipientId
    parcel.status = status ? Status[status] : parcel.status
    parcel.deliveryAddress = this.updateDeliveryAddressInformation(
      parcel.deliveryAddress,
      deliveryAddress ?? parcel.deliveryAddress,
    )

    await this.parcelsRepository.save(parcel)

    return right({
      parcel,
    })
  }
}
