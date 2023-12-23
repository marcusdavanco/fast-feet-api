import { InMemoryParcelsRepository } from 'test/repositories/in-memory-parcels-repository'
import { CreateParcelUseCase } from './create-parcel-use-case'
import { makeParcel } from 'test/factories/make-parcel'

let inMemoryParcelsRepository: InMemoryParcelsRepository
let sut: CreateParcelUseCase

describe('Create Parcel Use Case', () => {
  beforeEach(() => {
    inMemoryParcelsRepository = new InMemoryParcelsRepository()
    sut = new CreateParcelUseCase(inMemoryParcelsRepository)
  })

  it('Should create a new parcel', async () => {
    const newParcel = makeParcel()
  })
})
