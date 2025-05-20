import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section projects-section">
      <div class="container">
        <h2 class="text-center">Our Projects</h2>
        <p class="section-subtitle text-center">Showcasing our architectural excellence and design innovation</p>
        
        <div class="filter-buttons animated" [class.visible]="isVisible">
          <button 
            *ngFor="let category of categories" 
            [class.active]="activeCategory === category"
            (click)="filterProjects(category)"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="projects-grid">
          @for (project of filteredProjects; track project.id) {
            <div class="project-card animated" [class.visible]="isVisible" [style.transition-delay]="project.id * 0.1 + 's'">
              <div class="project-image">
                <img [src]="project.imageUrl" [alt]="project.title" />
              </div>
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <span class="category-tag">{{ project.category }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      background-color: var(--white);
    }
    
    .section-subtitle {
      max-width: 600px;
      margin: 0 auto var(--space-xl);
      color: var(--text-secondary);
    }
    
    .filter-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: var(--space-xl);
      gap: var(--space-sm);
    }
    
    .filter-buttons button {
      background: transparent;
      border: 1px solid var(--gray);
      padding: var(--space-sm) var(--space-lg);
      border-radius: 30px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .filter-buttons button.active, .filter-buttons button:hover {
      background-color: var(--primary);
      color: var(--secondary);
      border-color: var(--primary);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
    
    @media (min-width: 768px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .projects-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .project-card {
      background-color: var(--white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    
    .project-image {
      height: 240px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.1);
    }
    
    .project-info {
      padding: var(--space-lg);
    }
    
    .project-info h3 {
      margin-bottom: var(--space-sm);
      font-size: 1.25rem;
    }
    
    .project-info p {
      color: var(--text-secondary);
      margin-bottom: var(--space-md);
      font-size: 0.9rem;
    }
    
    .category-tag {
      display: inline-block;
      background-color: var(--light-gray);
      color: var(--secondary);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Modern Villa Design',
      description: 'Luxury villa design with contemporary aesthetics and sustainable features.',
      category: 'Residential',
      imageUrl: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg'
    },
    {
      id: 2,
      title: 'Urban Apartment Complex',
      description: 'Multi-unit residential complex designed for urban living and community.',
      category: 'Residential',
      imageUrl: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
    },
    {
      id: 3,
      title: 'Commercial Office Space',
      description: 'Modern office design with open floor plan and collaborative workspaces.',
      category: 'Commercial',
      imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg'
    },
    {
      id: 4,
      title: 'Contemporary Home Interior',
      description: 'Minimalist interior design with custom furniture and natural lighting.',
      category: 'Interior',
      imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      id: 5,
      title: 'Residential Garden Design',
      description: 'Sustainable landscape design with native plants and water features.',
      category: 'Landscape',
      imageUrl: 'https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg'
    },
    {
      id: 6,
      title: 'Duplex Home Design',
      description: 'Contemporary duplex design with shared outdoor spaces and private terraces.',
      category: 'Residential',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    }
  ];
  
  categories: string[] = ['All', 'Residential', 'Commercial', 'Interior', 'Landscape'];
  activeCategory: string = 'All';
  filteredProjects: Project[] = [];
  isVisible = false;
  
  ngOnInit() {
    this.filteredProjects = [...this.projects];
    this.observeScroll();
  }
  
  filterProjects(category: string) {
    this.activeCategory = category;
    
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }
  
  observeScroll() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.isVisible = true;
      }
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      const element = document.querySelector('#projects');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}