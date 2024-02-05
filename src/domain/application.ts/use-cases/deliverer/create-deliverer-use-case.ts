import { Deliverer } from '@/domain/enterprise/entities/deliverer'
import { DeliverersRepository } from '../../repositories/deliverers-repository'
import { Either, right } from '@/core/either'
import { VehicleType } from '@/domain/enterprise/entities/vehicleTypes'

interface CreateDelivererUseCaseRequest {
  name: string
  email: string
  phoneNumber: string
  vehicleInformation: {
    vehicleType: VehicleType
    licensePlateNumber: string
    vehicleModel: string
    color: string
  }
}

type CreateDelivererUseCaseResponse = Either<
  null,
  {
    deliverer: Deliverer
  }
>

export class CreateDelivererUseCase {
  constructor(private deliverersRepository: DeliverersRepository) {}

  async execute({
    name,
    email,
    phoneNumber,
    vehicleInformation,
  }: CreateDelivererUseCaseRequest): Promise<CreateDelivererUseCaseResponse> {
    const deliverer = Deliverer.create({
      name,
      email,
      phoneNumber,
      vehicleInformation,
    })

    await this.deliverersRepository.create(deliverer)

    return right({
      deliverer,
    })
  }
}
