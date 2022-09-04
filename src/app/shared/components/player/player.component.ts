import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { v4 } from 'uuid';
import { Player } from '@shared/components/player/models/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'player, [player]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements AfterViewInit {
  private readonly playerId = `player_${v4()}`;

  @Input() src = '';
  @Input() poster = '';
  @Input() loop = false;
  @Input() autoplay = false;
  @Input() variant: 1 | 2 = 1;

  @Output() onCreated = new EventEmitter<Player>();

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.id = this.playerId;
  }

  ngAfterViewInit() {
    const player = new (window as any).Playerjs({
      id: this.playerId,
      file: this.src,
      poster: this.poster,
      autoplay: this.autoplay,
      loop: this.loop,
      player: this.variant,
    });
    this.onCreated.emit(player);
  }
}
