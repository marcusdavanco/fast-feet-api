import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Deliverer,
  DelivererProps,
} from '@/domain/enterprise/entities/deliverer'
import { VehicleType } from '@/domain/enterprise/entities/vehicleTypes'
import { faker } from '@faker-js/faker'

export function makeDeliverer(
  override: Partial<DelivererProps> = {},
  id?: UniqueEntityID,
) {
  const deliverer = Deliverer.create(
    {
      name: faker.person.fullName.toString(),
      email: faker.internet.email.toString(),
      phoneNumber: faker.phone.number.toString(),
      vehicleInformation: {
        color: faker.color.human.toString(),
        licensePlateNumber: faker.vehicle.vrm.toString(),
        vehicleModel: faker.vehicle.model.toString(),
        vehicleType: VehicleType.CAR,
      },
      ...override,
    },
    id,
  )

  return deliverer
}
