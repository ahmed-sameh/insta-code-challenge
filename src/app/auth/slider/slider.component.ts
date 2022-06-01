import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  @ViewChild('slider', {static: true}) productContainers!: ElementRef<any>;
  hideSlider = false;
  sliderInterval: any;
  resetInterval: any;

  ngOnInit(): void {
    this.sliding()
  }

  sliding() {
    
    let containerDimensions = (this.productContainers.nativeElement as HTMLElement).getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    this.sliderInterval =  setInterval(() => {
      this.hideSlider = false;
      (this.productContainers.nativeElement as HTMLElement).scrollLeft += containerWidth;
    }, 3000)
    
    this.resetInterval = setInterval(() => {
      (this.productContainers.nativeElement as HTMLElement).scrollLeft = 0;
      this.hideSlider = true;
    }, 9000)
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval)
    clearInterval(this.resetInterval)
  }
}