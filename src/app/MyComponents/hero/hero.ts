import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements AfterViewInit, OnDestroy {
  
  currentIndex = 0;
  totalSlides = 5;
  private interval: any;
  
  ngAfterViewInit() {
    this.startCarousel();
  }
  
  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 seconds delay
  }
  
  nextSlide() {
    // Hide current slide
    const slides = document.querySelectorAll('[data-carousel-item]');
    slides.forEach(slide => {
      slide.classList.add('hidden');
    });
    
    // Show next slide
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    slides[this.currentIndex].classList.remove('hidden');
    slides[this.currentIndex].setAttribute('data-carousel-item', '');
    
    // Update indicators
    this.updateIndicators();
  }
  
  prevSlide() {
    // Hide current slide
    const slides = document.querySelectorAll('[data-carousel-item]');
    slides.forEach(slide => {
      slide.classList.add('hidden');
    });
    
    // Show previous slide
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    slides[this.currentIndex].classList.remove('hidden');
    slides[this.currentIndex].setAttribute('data-carousel-item', '');
    
    // Update indicators
    this.updateIndicators();
  }
  
  goToSlide(index: number) {
    const slides = document.querySelectorAll('[data-carousel-item]');
    slides.forEach(slide => {
      slide.classList.add('hidden');
    });
    
    this.currentIndex = index;
    slides[this.currentIndex].classList.remove('hidden');
    
    this.updateIndicators();
    
    // Reset interval
    clearInterval(this.interval);
    this.startCarousel();
  }
  
  updateIndicators() {
    const indicators = document.querySelectorAll('[data-carousel-slide-to]');
    indicators.forEach((indicator, idx) => {
      if (idx === this.currentIndex) {
        indicator.setAttribute('aria-current', 'true');
        indicator.classList.add('bg-white');
        indicator.classList.remove('bg-gray-400');
      } else {
        indicator.setAttribute('aria-current', 'false');
        indicator.classList.add('bg-gray-400');
        indicator.classList.remove('bg-white');
      }
    });
  }
  
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}