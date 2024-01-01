import { InMemoryParcelsRepository } from 'test/repositories/in-memory-parcels-repository'
import { GetParcelByIdUseCase } from './get-parcel-by-id-use-case'
import { makeParcel } from 'test/factories/make-parcel'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

let inMemoryParcelsRepository: InMemoryParcelsRepository
let sut: GetParcelByIdUseCase
describe('GetParcelByIdUseCase', async () => {
  beforeAll(() => {
    inMemoryParcelsRepository = new InMemoryParcelsRepository()
    sut = new GetParcelByIdUseCase(inMemoryParcelsRepository)
  })

  it('Should be able to get a parcel by Id', async () => {
    const newParcel = makeParcel()

    const newParcelId = newParcel.id.toString()

    inMemoryParcelsRepository.create(newParcel)

    const result = await sut.execute({ id: newParcelId })

    console.log(result.value)

    expect(result.isRight()).toBe(true)
  })

  it('Should return resource not found error when searching for non existent id', async () => {
    const newParcel = makeParcel()

    inMemoryParcelsRepository.create(newParcel)

    const result = await sut.execute({ id: 'non-existent-id' })

    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
