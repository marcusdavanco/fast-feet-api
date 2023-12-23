import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Parcel, ParcelProps } from '@/domain/enterprise/entities/parcel'
import { Status } from '@/domain/enterprise/entities/status'
import { faker } from '@faker-js/faker'

export function makeParcel(
  override: Partial<ParcelProps> = {},
  id?: UniqueEntityID,
) {
  const parcel = Parcel.create(
    {
      delivererId: new UniqueEntityID(),
      recipientId: new UniqueEntityID(),
      status: Status.PENDING_PICKUP,
      deliveryAddress: {
        city: faker.location.city.toString(),
        neighborhood: 'the hood',
        postalCode: faker.location.zipCode.toString(),
        state: faker.location.state.toString(),
        street: faker.location.street.toString(),
      },
      isDelivered: false,
      ...override,
    },
    id,
  )

  return parcel
}
