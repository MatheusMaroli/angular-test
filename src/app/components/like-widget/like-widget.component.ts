import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from 'src/app/services/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html'
})
export class LikeWidgetComponent implements OnInit    {
  @Output() liked = new EventEmitter<void>();
  @Input() likes  =0;
  @Input() id = null;
  icons = {
    faThumbsUp
  }

  constructor(private uniqueId : UniqueIdService) { 

  }

  ngOnInit(): void {
    if (!this.id)
      this.id = this.uniqueId.generateUniqueIdWithPrefix('like-widget')
  }

  public likeHandler(): void {
    this.liked.emit();
  }

}
