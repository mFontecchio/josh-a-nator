import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { PhraseService } from './phrase/phrase.service';

const SCRAMBLE_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly phraseService = inject(PhraseService);
  private settleGeneration = 0;

  protected readonly phrase = signal('');
  protected readonly displayText = signal('');
  protected readonly isScrambling = signal(false);
  protected readonly bubbleAnimating = signal(true);

  constructor() {
    const first = this.phraseService.generate();
    this.phrase.set(first);
    void this.settleText(first);
  }

  protected saySomething(): void {
    if (this.isScrambling()) {
      return;
    }

    this.bubbleAnimating.set(false);
    const next = this.phraseService.generate();
    this.phrase.set(next);
    void this.settleText(next);

    // Allow the pop class to clear before re-applying so the animation replays
    setTimeout(() => this.bubbleAnimating.set(true), 10);
  }

  private async settleText(finalText: string): Promise<void> {
    const generation = ++this.settleGeneration;
    this.isScrambling.set(true);

    // Phase 1: rapid full-string slot spin (keeps spaces so wrapping stays inside)
    for (let i = 0; i < 10; i++) {
      if (generation !== this.settleGeneration) {
        return;
      }
      this.displayText.set(this.scrambleFrame(finalText, 0));
      await this.wait(28);
    }

    // Phase 2: left-to-right settle into the real phrase
    const steps = Math.max(finalText.length, 1);
    for (let revealed = 0; revealed <= steps; revealed++) {
      if (generation !== this.settleGeneration) {
        return;
      }
      this.displayText.set(this.scrambleFrame(finalText, revealed));
      await this.wait(22);
    }

    if (generation !== this.settleGeneration) {
      return;
    }

    this.displayText.set(finalText);
    this.isScrambling.set(false);
  }

  /** Scramble unsettled chars; preserve spaces/punctuation so layout doesn't overflow. */
  private scrambleFrame(finalText: string, revealedCount: number): string {
    let frame = '';
    for (let i = 0; i < finalText.length; i++) {
      const ch = finalText[i]!;
      if (i < revealedCount || ch === ' ' || ch === '\n') {
        frame += ch;
      } else if (/[.,:;!'’—-]/.test(ch)) {
        frame += ch;
      } else {
        frame += this.randomChar();
      }
    }
    return frame;
  }

  private randomChar(): string {
    const index = Math.floor(Math.random() * SCRAMBLE_CHARS.length);
    return SCRAMBLE_CHARS[index]!;
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
