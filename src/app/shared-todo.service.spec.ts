import { TestBed, inject } from '@angular/core/testing';

import { SharedTodoService } from './shared-todo.service';

describe('SharedTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedTodoService]
    });
  });

  it('should be created', inject([SharedTodoService], (service: SharedTodoService) => {
    expect(service).toBeTruthy();
  }));
});
