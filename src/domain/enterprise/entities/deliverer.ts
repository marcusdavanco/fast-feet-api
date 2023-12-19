import { Entity } from "@/core/entities/entity"
import { VehicleType } from "./vehicleTypes"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

interface DelivererProps {
  name: string,
  email: string,
  phoneNumber: string,
  vehicleInformation: {
    vehicleType: VehicleType
    licensePlateNumber: string
    vehicleModel: string
    color: string
  }
}

export class Deliverer extends Entity<DelivererProps> {
  static create(props: DelivererProps, id?: UniqueEntityID) {
    const deliverer = new Deliverer(props, id)

    return deliverer
  }
}