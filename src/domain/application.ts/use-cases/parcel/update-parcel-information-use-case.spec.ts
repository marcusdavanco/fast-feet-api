import { InMemoryParcelsRepository } from 'test/repositories/in-memory-parcels-repository'

import { makeParcel } from 'test/factories/make-parcel'
import { UpdateParcelInformationUseCase } from './update-parcel-information-use-case'

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
})
