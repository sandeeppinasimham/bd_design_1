import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1 class="animated" [class.visible]="isVisible">Designing Spaces, Building Dreams</h1>
        <div class="services-list animated" [class.visible]="isVisible" [style.transition-delay]="'0.2s'">
          <span>Planning</span>
          <span class="divider">|</span>
          <span>Interiors</span>
          <span class="divider">|</span>
          <span>Landscaping</span>
          <span class="divider">|</span>
          <span>Municipal Drawings</span>
        </div>
        <a href="#contact" class="btn animated" [class.visible]="isVisible" [style.transition-delay]="'0.4s'">Get In Touch</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      min-height: 600px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 var(--space-md);
      position: relative;
    }
    
    .hero-content {
      max-width: 800px;
      z-index: 2;
    }
    
    h1 {
      color: var(--white);
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: var(--space-lg);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .services-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: var(--primary);
      margin-bottom: var(--space-xl);
      font-size: 1.1rem;
      font-weight: 500;
    }
    
    .divider {
      margin: 0 var(--space-sm);
      color: var(--white);
    }
    
    .btn {
      padding: var(--space-md) var(--space-xl);
      font-size: 1rem;
    }
    
    @media (min-width: 768px) {
      h1 {
        font-size: 3.5rem;
      }
      
      .services-list {
        font-size: 1.25rem;
      }
    }
    
    @media (max-width: 767px) {
      .services-list {
        flex-direction: column;
        gap: 8px;
      }
      
      .divider {
        display: none;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  isVisible = false;
  
  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }
}