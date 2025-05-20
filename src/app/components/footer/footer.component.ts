import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <div class="logo-icon">BD</div>
            <div class="logo-text">
              <div class="company-name">BD DESIGN CONSULTANTS</div>
              <div class="slogan">Designing Spaces, Building Dreams</div>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Planning of Houses</a></li>
                <li><a href="#services">Interior Design</a></li>
                <li><a href="#services">Landscape Designing</a></li>
                <li><a href="#services">Municipal Drawings</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h4>Contact Info</h4>
              <p><i class="fas fa-map-marker-alt"></i> Hyderabad - 500081</p>
              <p><i class="fas fa-phone-alt"></i> <a href="tel:+917981686431">+91 7981686431</a></p>
              <p><i class="fas fa-envelope"></i> <a href="mailto:creatorbhanu&#64;gmail.com">creatorbhanu&#64;gmail.com</a></p>
              
              <div class="social-links">
                <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 BD Design Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: var(--secondary);
      color: var(--white);
      padding-top: var(--space-xxl);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xl);
      padding-bottom: var(--space-xl);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    @media (min-width: 992px) {
      .footer-content {
        grid-template-columns: 1fr 2fr;
      }
    }
    
    .footer-logo {
      display: flex;
      align-items: center;
      margin-bottom: var(--space-lg);
    }
    
    .logo-icon {
      width: 48px;
      height: 48px;
      background-color: var(--primary);
      color: var(--secondary);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 1.25rem;
      margin-right: var(--space-md);
    }
    
    .logo-text .company-name {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }
    
    .logo-text .slogan {
      font-size: 0.8rem;
      color: var(--primary);
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }
    
    @media (min-width: 768px) {
      .footer-links {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .footer-column h4 {
      color: var(--white);
      margin-bottom: var(--space-md);
      position: relative;
      display: inline-block;
    }
    
    .footer-column h4::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 30px;
      height: 2px;
      background-color: var(--primary);
    }
    
    .footer-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-column li {
      margin-bottom: var(--space-sm);
    }
    
    .footer-column a {
      color: var(--gray);
      transition: color 0.3s ease;
    }
    
    .footer-column a:hover {
      color: var(--primary);
    }
    
    .footer-column p {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: var(--gray);
      margin-bottom: var(--space-md);
    }
    
    .footer-column p i {
      color: var(--primary);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-sm);
      margin-top: var(--space-lg);
    }
    
    .social-link {
      width: 36px;
      height: 36px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background-color: var(--primary);
      color: var(--secondary);
    }
    
    .footer-bottom {
      padding: var(--space-md) 0;
      text-align: center;
      font-size: 0.9rem;
      color: var(--dark-gray);
    }
  `]
})
export class FooterComponent {}