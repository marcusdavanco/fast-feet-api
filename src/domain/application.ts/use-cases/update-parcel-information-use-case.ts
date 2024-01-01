import { Either } from '@/core/either'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Parcel } from '@/domain/enterprise/entities/parcel'
import { ParcelsRepository } from '../repositories/parcels-repository'

interface UpdateParcelInformationUseCaseRequest {}

type UpdateParcelInformationUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    parcel: Parcel
  }
>

export class UpdateParcelInformationUseCase {
  constructor(private parcelsRepository: ParcelsRepository) {}

  async execute() {
    // TODO
  }
}
