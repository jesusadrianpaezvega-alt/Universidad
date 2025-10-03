import { TestBed } from '@angular/core/testing';

import { EquipmentHttpRepository } from './equipment-http.repository';

describe('EquipmentHttpRepository', () => {
  let service: EquipmentHttpRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentHttpRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
