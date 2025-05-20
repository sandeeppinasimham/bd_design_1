import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <div class="container">
        <h2 class="text-center">Our Services</h2>
        <p class="section-subtitle text-center">Comprehensive architectural solutions for every space</p>
        
        <div class="services-grid">
          @for (service of services; track service.id) {
            <div class="service-card" [class.animated]="true" [class.visible]="isVisible">
              <div class="icon-container">
                <i [class]="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-subtitle {
      max-width: 600px;
      margin: 0 auto var(--space-xxl);
      color: var(--text-secondary);
      font-size: 1.1rem;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
    
    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .services-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .service-card {
      background-color: var(--white);
      border-radius: 8px;
      padding: var(--space-xl);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .icon-container {
      width: 80px;
      height: 80px;
      background-color: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-lg);
    }
    
    .icon-container i {
      font-size: 2rem;
      color: var(--secondary);
    }
    
    .service-card h3 {
      margin-bottom: var(--space-md);
      font-size: 1.25rem;
    }
    
    .service-card p {
      color: var(--text-secondary);
      margin: 0;
      font-size: 0.95rem;
    }
  `]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      title: 'Planning of Houses',
      description: 'Comprehensive planning for independent houses, duplex buildings, and apartment complexes.',
      icon: 'fas fa-home'
    },
    {
      id: 2,
      title: 'Interior Design',
      description: 'Creative and functional interior design solutions for residential and commercial spaces.',
      icon: 'fas fa-couch'
    },
    {
      id: 3,
      title: 'Landscape Designing',
      description: 'Beautiful and sustainable landscape designs with plant supply services.',
      icon: 'fas fa-tree'
    },
    {
      id: 4,
      title: 'Municipal Permissions',
      description: 'Assistance with panchayat, municipal, and layout permission procedures.',
      icon: 'fas fa-building'
    }
  ];
  
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
      const element = document.querySelector('#services');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}