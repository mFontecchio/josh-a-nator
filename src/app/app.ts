import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { PhraseService } from './phrase/phrase.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly phraseService = inject(PhraseService);

  protected readonly phrase = signal(this.phraseService.generate());
  protected readonly bubbleAnimating = signal(true);

  protected saySomething(): void {
    this.bubbleAnimating.set(false);
    this.phrase.set(this.phraseService.generate());

    // Allow the pop class to clear before re-applying so the animation replays
    setTimeout(() => this.bubbleAnimating.set(true), 10);
  }
}
