import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Parcel } from '@/domain/enterprise/entities/parcel'
import { ParcelsRepository } from '../../repositories/parcels-repository'

interface GetParcelByIdUseCaseRequest {
  id: string
}

type GetParcelByIdUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    parcel: Parcel
  }
>

export class GetParcelByIdUseCase {
  constructor(private parcelsRepository: ParcelsRepository) {}

  async execute({
    id,
  }: GetParcelByIdUseCaseRequest): Promise<GetParcelByIdUseCaseResponse> {
    const parcel = await this.parcelsRepository.findById(id)

    if (!parcel) {
      return left(new ResourceNotFoundError())
    }

    return right({
      parcel,
    })
  }
}
