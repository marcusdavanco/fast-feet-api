import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { ParcelsRepository } from '../../repositories/parcels-repository'

interface DeleteParcelUseCaseRequest {
  id: string
}

type DeleteParcelUseCaseResponse = Either<
  ResourceNotFoundError,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {}
>

export class DeleteParcelUseCase {
  constructor(private parcelsRepository: ParcelsRepository) {}

  async execute({
    id,
  }: DeleteParcelUseCaseRequest): Promise<DeleteParcelUseCaseResponse> {
    const parcel = await this.parcelsRepository.findById(id)

    if (!parcel) {
      return left(new ResourceNotFoundError())
    }

    await this.parcelsRepository.delete(parcel.id.toString())

    return right({})
  }
}
