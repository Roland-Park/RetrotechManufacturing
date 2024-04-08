import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPicture } from 'src/app/core/entities/pictures/picture';
import { environment } from 'src/environments/environment';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() pictures: IPicture[];
  @Output() onPictureClick = new EventEmitter();
  
  index: number = 0;
  private picturesCount: number;

  constructor(private toast: ToastService) {
  }

  ngOnInit(): void {
    if(!this.pictures || this.pictures.length <= 0){
      const placeholder: IPicture = {
        id: 0,
        url: this.getRandomBackupUrl(),
        alt: "placeholder image"
      }
        this.pictures = [placeholder]
      }
    this.picturesCount = this.pictures.length - 1;
  }

  increment(){
    if(this.index < this.picturesCount){
      this.index++;
    }
    else{
      this.index = 0;
    }
  }

  decrement(){
    if(this.index > 0){
      this.index--;
    }
    else{
      this.index = this.picturesCount;
    }
  }

  start(){
    this.index = 0;
  }

  end(){
    this.index = this.picturesCount;
  }

  displayControls(): string{
    if(this.pictures.length > 1){
      return "";
    }

    return "hide";
  }

  pictureClicked(){
    this.onPictureClick.emit();
  }
  
  getImageFilePath(url: string | null){
    if(!url){
      return this.getRandomBackupUrl();
    }

    return `${environment.apiUrlRoot}/staticfiles/${url}`
  }

  handleMissingImage(event: Event){
    this.toast.notifyError("Whoops! There's a missing image on this page... here's a random one instead.", 1000);
    (event.target as HTMLImageElement).src = this.getRandomBackupUrl();
  }

  private getRandomBackupUrl(): string{
    const max: number = environment.backupUrls.length - 1;
    const min: number = 0;

    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    return environment.backupUrls[index];
  }
}
