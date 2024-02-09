import { InMemoryParcelsRepository } from 'test/repositories/in-memory-parcels-repository'

import { makeParcel } from 'test/factories/make-parcel'
import { UpdateParcelInformationUseCase } from './update-parcel-information-use-case'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

let inMemoryParcelRepository: InMemoryParcelsRepository
let sut: UpdateParcelInformationUseCase

describe('UpdateParcelInformationUseCase', () => {
  beforeAll(() => {
    inMemoryParcelRepository = new InMemoryParcelsRepository()
    sut = new UpdateParcelInformationUseCase(inMemoryParcelRepository)
  })

  it('Should be able to update a parcel information', async () => {
    const newParcel = makeParcel()

    await inMemoryParcelRepository.create(newParcel)

    const result = await sut.execute({
      id: newParcel.id.toString(),
      status: 'IN_TRANSIT',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryParcelRepository.items[0].status).equal('In Transit')
  })

  it('should return an error when trying to update a parcel with non existing id.', async () => {
    const newParcel = makeParcel()

    await inMemoryParcelRepository.create(newParcel)

    const result = await sut.execute({
      id: 'non-existing-id',
      status: 'IN_TRANSIT',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
