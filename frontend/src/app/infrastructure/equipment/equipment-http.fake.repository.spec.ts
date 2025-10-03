import { TestBed } from '@angular/core/testing';

import { EquipmentFakeRepository } from './equipment-http.fake.repository';

describe('EquipmentHttpFakeRepository', () => {
  let service: EquipmentFakeRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentFakeRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
