import { Either, left, right } from '@/core/either'
import { DeliverersRepository } from '../repositories/deliverers-repository'
import { Deliverer } from '@/domain/enterprise/entities/deliverer'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface GetDelivererByIdUseCaseRequest {
  id: string
}

type GetDelivererUseCaseReponse = Either<
  ResourceNotFoundError,
  {
    deliverer: Deliverer
  }
>

export class GetDelivererByIdUseCase {
  constructor(private deliverersRepository: DeliverersRepository) {}

  async execute({
    id,
  }: GetDelivererByIdUseCaseRequest): Promise<GetDelivererUseCaseReponse> {
    const deliverer = await this.deliverersRepository.findById(id)

    if (!deliverer) {
      return left(new ResourceNotFoundError())
    }

    return right({
      deliverer,
    })
  }
}
