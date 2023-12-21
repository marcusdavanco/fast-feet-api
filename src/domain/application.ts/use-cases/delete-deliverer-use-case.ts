import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { DeliverersRepository } from '../repositories/deliverers-repository'

interface DeleteDelivererUseCaseRequest {
  id: string
}

type DeleteDelivererUseCaseResponse = Either<
  ResourceNotFoundError,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {}
>

export class DeleteDelivererUseCase {
  constructor(private deliverersRepository: DeliverersRepository) {}

  async execute({
    id,
  }: DeleteDelivererUseCaseRequest): Promise<DeleteDelivererUseCaseResponse> {
    const deliverer = await this.deliverersRepository.findbyId(id)

    if (!deliverer) {
      return left(new ResourceNotFoundError())
    }

    await this.deliverersRepository.delete(deliverer)

    return right({})
  }
}
