import { InMemoryParcelsRepository } from 'test/repositories/in-memory-parcels-repository'
import { DeleteParcelUseCase } from '../parcel/delete-parcel-use-case'
import { makeParcel } from 'test/factories/make-parcel'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

let inMemoryParcelsRepository: InMemoryParcelsRepository
let sut: DeleteParcelUseCase

describe('DeleteParcelUseCase', async () => {
  beforeEach(() => {
    inMemoryParcelsRepository = new InMemoryParcelsRepository()
    sut = new DeleteParcelUseCase(inMemoryParcelsRepository)
  })

  it('should be able to delete a parcel by its id.', async () => {
    const parcel = makeParcel()

    inMemoryParcelsRepository.create(parcel)

    await sut.execute({ id: parcel.id.toString() })

    expect(inMemoryParcelsRepository.items).toHaveLength(0)
  })

  it('should raise an error when trying to delete a parcel with non existing id.', async () => {
    const parcel = makeParcel()

    inMemoryParcelsRepository.create(parcel)

    const result = await sut.execute({ id: 'non-existing-id' })

    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
