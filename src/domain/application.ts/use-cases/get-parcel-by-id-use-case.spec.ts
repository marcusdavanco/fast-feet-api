import { InMemoryParcelsRepository } from 'test/repositories/in-memory-parcels-repository'
import { GetParcelByIdUseCase } from './get-parcel-by-id-use-case'

let inMemoryParcelsRepository: InMemoryParcelsRepository
let sut: GetParcelByIdUseCase
describe('GetParcelByIdUseCase', async () => {
  beforeAll(() => {
    inMemoryParcelsRepository = new InMemoryParcelsRepository()
    sut = new GetParcelByIdUseCase(inMemoryParcelsRepository)
  })

  it('Should be able to get a parcel by Id', async () => {
    // TODO
  })
})
