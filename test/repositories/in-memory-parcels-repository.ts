import { PaginationParams } from "@/core/repositories/pagination-params";
import { ParcelsRepository } from "@/domain/application.ts/repositories/parcels-repository";
import { Parcel } from "@/domain/enterprise/entities/parcel";

export class InMemoryParcelsRepository implements ParcelsRepository {
  public items: Parcel[] = []
  
  findById(id: string): Promise<Parcel | null> {
    throw new Error("Method not implemented.");
  }
  findManyByDelivererId(delivererId: string, params: PaginationParams): Promise<Parcel[]> {
    throw new Error("Method not implemented.");
  }
  findManyByRecipientId(recipientId: string, params: PaginationParams): Promise<Parcel[]> {
    throw new Error("Method not implemented.");
  }
  create(parcel: Parcel): Promise<void> {
    throw new Error("Method not implemented.");
  }
  save(parcel: Parcel): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(parcel: Parcel): Promise<void> {
    throw new Error("Method not implemented.");
  }

}