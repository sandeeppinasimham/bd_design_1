import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="#">
              <div class="logo-icon">BD</div>
              <div class="logo-text">
                <span class="company-name">BD DESIGN CONSULTANTS</span>
                <span class="architect-title">Ar. Bhanu Satya Prasad | Sr. Architect</span>
              </div>
            </a>
          </div>
          
          <nav class="desktop-nav">
            <ul>
              <li><a href="#" class="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <button class="menu-toggle" (click)="toggleMenu()" [class.active]="menuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <div class="mobile-nav" [class.open]="menuOpen">
        <ul>
          <li><a href="#" (click)="closeMenu()">Home</a></li>
          <li><a href="#about" (click)="closeMenu()">About</a></li>
          <li><a href="#services" (click)="closeMenu()">Services</a></li>
          <li><a href="#projects" (click)="closeMenu()">Projects</a></li>
          <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 16px 0;
      transition: all 0.3s ease;
      background-color: transparent;
    }
    
    header.scrolled {
      background-color: var(--secondary);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 8px 0;
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo a {
      display: flex;
      align-items: center;
      color: var(--white);
      text-decoration: none;
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
      margin-right: 12px;
      transition: all 0.3s ease;
    }
    
    header:not(.scrolled) .logo-icon {
      background-color: var(--primary);
      color: var(--secondary);
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
    }
    
    .company-name {
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
    
    .architect-title {
      font-size: 0.75rem;
      color: var(--primary);
    }
    
    .desktop-nav {
      display: none;
    }
    
    @media (min-width: 992px) {
      .desktop-nav {
        display: block;
      }
      
      .menu-toggle {
        display: none;
      }
    }
    
    .desktop-nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .desktop-nav li {
      margin-left: 32px;
    }
    
    .desktop-nav a {
      color: var(--white);
      font-weight: 500;
      text-decoration: none;
      position: relative;
      padding-bottom: 4px;
      transition: color 0.3s ease;
    }
    
    .desktop-nav a:hover, .desktop-nav a.active {
      color: var(--primary);
    }
    
    .desktop-nav a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--primary);
      transition: width 0.3s ease;
    }
    
    .desktop-nav a:hover::after, .desktop-nav a.active::after {
      width: 100%;
    }
    
    .menu-toggle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 22px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
    }
    
    .menu-toggle span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--white);
      transition: all 0.3s ease;
    }
    
    .menu-toggle.active span:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
      background-color: var(--primary);
    }
    
    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .menu-toggle.active span:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
      background-color: var(--primary);
    }
    
    .mobile-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--secondary);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
      transform: translateY(-100%);
    }
    
    .mobile-nav.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    .mobile-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: center;
    }
    
    .mobile-nav li {
      margin-bottom: 24px;
    }
    
    .mobile-nav a {
      color: var(--white);
      font-size: 1.5rem;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }
    
    .mobile-nav a:hover {
      color: var(--primary);
    }
    
    @media (max-width: 767px) {
      .logo-text {
        display: none;
      }
      
      .logo-icon {
        margin-right: 0;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : 'auto';
  }
  
  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }
}