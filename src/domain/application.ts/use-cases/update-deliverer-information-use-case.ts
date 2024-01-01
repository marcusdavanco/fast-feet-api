import { Either, left, right } from '@/core/either'
import { DeliverersRepository } from '../repositories/deliverers-repository'
import { Deliverer } from '@/domain/enterprise/entities/deliverer'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { VehicleType } from '@/domain/enterprise/entities/vehicleTypes'
import { VehicleInformation } from '@/domain/enterprise/entities/vehicleInformation'
import { EmptyUpdateError } from '@/core/errors/errors/empty-update-error'

interface UpdateDelivererUseCaseRequest {
  id: string
  name?: string
  email?: string
  phoneNumber?: string
  vehicleInformation?: {
    vehicleType?: VehicleType
    licensePlateNumber?: string
    vehicleModel?: string
    color?: string
  }
}

type UpdateDelivererUseCaseReponse = Either<
  ResourceNotFoundError | EmptyUpdateError,
  {
    deliverer: Deliverer
  }
>

export class UpdateDelivererInformationUseCase {
  constructor(private deliverersRepository: DeliverersRepository) {}

  private updateVehicleInformation(
    original: VehicleInformation,
    update: Partial<VehicleInformation>,
  ): VehicleInformation {
    return {
      ...original,
      ...update,
    }
  }

  async execute({
    id,
    name,
    email,
    phoneNumber,
    vehicleInformation,
  }: UpdateDelivererUseCaseRequest): Promise<UpdateDelivererUseCaseReponse> {
    const deliverer = await this.deliverersRepository.findById(id)

    if (!deliverer) {
      return left(new ResourceNotFoundError())
    }

    if (!name && !email && !phoneNumber && !vehicleInformation) {
      return left(new EmptyUpdateError())
    }

    deliverer.name = name ?? deliverer.name
    deliverer.email = email ?? deliverer.email
    deliverer.phoneNumber = phoneNumber ?? deliverer.phoneNumber
    deliverer.vehicleInformation = this.updateVehicleInformation(
      deliverer.vehicleInformation,
      vehicleInformation ?? deliverer.vehicleInformation,
    )

    await this.deliverersRepository.save(deliverer)

    return right({
      deliverer,
    })
  }
}
