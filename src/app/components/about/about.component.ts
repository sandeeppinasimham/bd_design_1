import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-image animated" [class.visible]="isVisible">
            <div class="image-container">
              <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" alt="Architect in Office" />
            </div>
          </div>
          
          <div class="about-text animated" [class.visible]="isVisible" [style.transition-delay]="'0.2s'">
            <h2>About the Architect</h2>
            <h3 class="architect-name">Ar. Bhanu Satya Prasad</h3>
            <p class="qualifications">M.Arch, AIIA, RACA, D.A.A</p>
            
            <p>
              With over 15 years of experience in architectural design, Ar. Bhanu Satya Prasad has established 
              BD Design Consultants as one of Hyderabad's premier architectural firms. Specializing in residential, 
              commercial, and landscape design, our team brings creativity and technical expertise to every project.
            </p>
            
            <p>
              As a COA-approved Senior Architect, Bhanu is dedicated to creating spaces that blend functionality, 
              aesthetics, and sustainability. His work is characterized by attention to detail, innovative use of 
              materials, and commitment to client satisfaction.
            </p>
            
            <div class="credentials">
              <div class="credential">
                <div class="number">15+</div>
                <div class="label">Years Experience</div>
              </div>
              <div class="credential">
                <div class="number">200+</div>
                <div class="label">Projects Completed</div>
              </div>
              <div class="credential">
                <div class="number">180+</div>
                <div class="label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background-color: var(--light-gray);
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }
    
    @media (min-width: 992px) {
      .about-content {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-xxl);
      }
    }
    
    .about-image {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .image-container {
      max-width: 400px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .image-container img {
      width: 100%;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .image-container:hover img {
      transform: scale(1.05);
    }
    
    .image-container::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(255, 215, 0, 0.1), rgba(0, 0, 0, 0.3));
      z-index: 1;
    }
    
    .architect-name {
      color: var(--secondary);
      margin-bottom: var(--space-xs);
    }
    
    .qualifications {
      color: var(--primary);
      font-weight: 600;
      margin-bottom: var(--space-lg);
      letter-spacing: 1px;
    }
    
    .credentials {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-md);
      margin-top: var(--space-xl);
    }
    
    .credential {
      text-align: center;
    }
    
    .number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary);
      line-height: 1;
      margin-bottom: var(--space-xs);
    }
    
    .label {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    
    @media (max-width: 767px) {
      .about-image {
        order: 2;
      }
      
      .about-text {
        order: 1;
      }
      
      .credentials {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .credential:last-child {
        grid-column: span 2;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  isVisible = false;
  
  ngOnInit() {
    this.observeScroll();
  }
  
  observeScroll() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.isVisible = true;
      }
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      const element = document.querySelector('#about');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}