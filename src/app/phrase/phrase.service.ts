import { Injectable } from '@angular/core';

import { PHRASE_CATEGORIES } from './phrase-pools';

@Injectable({ providedIn: 'root' })
export class PhraseService {
  generate(): string {
    const category = this.pick(PHRASE_CATEGORIES);
    const start = this.pick(category.starters);
    const end = this.pick(category.endings);
    return `${start} ${end}`;
  }

  private pick<T>(pool: readonly T[]): T {
    const index = Math.floor(Math.random() * pool.length);
    return pool[index]!;
  }
}
