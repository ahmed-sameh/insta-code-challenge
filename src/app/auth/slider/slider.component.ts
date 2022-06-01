import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('slider', {static: true}) productContainers!: ElementRef<any>;
  hideSlider = false;
  sliderInterval: any;
  resetInterval: any;
  containerDimensions: any
  containerWidth: any
  
  // listener to get slider new dimensions if there is in change in window size
  @HostListener('window:resize', ['$event']) onResize() {
    this.getSliderDimensions();
  }

  ngOnInit(): void {
    this.sliding();
  }

  ngAfterViewInit(): void {
    this.getSliderDimensions();
  }
  
  // function for auto sliding and reset the slider
  sliding() {
    this.sliderInterval =  setInterval(() => {
      this.hideSlider = false;
      (this.productContainers.nativeElement as HTMLElement).scrollLeft += this.containerWidth;
    }, 3000)
    
    this.resetInterval = setInterval(() => {
      (this.productContainers.nativeElement as HTMLElement).scrollLeft = 0;
      this.hideSlider = true;
    }, 9000)
  }
  
  // function to get the slider dimensions if user resize the window
  getSliderDimensions(){
    this.containerDimensions = (this.productContainers.nativeElement as HTMLElement).getBoundingClientRect();
    this.containerWidth = this.containerDimensions.width;  
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval)
    clearInterval(this.resetInterval)
  }
}