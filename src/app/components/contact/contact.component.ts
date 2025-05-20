import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section contact-section">
      <div class="container">
        <h2 class="text-center">Get In Touch</h2>
        <p class="section-subtitle text-center">Let's bring your vision to life</p>
        
        <div class="contact-container">
          <div class="contact-info animated" [class.visible]="isVisible">
            <div class="info-card">
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>Hyderabad - 500081<br>Telangana, India</p>
            </div>
            
            <div class="info-card">
              <div class="icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p><a href="tel:+917981686431">+91 7981686431</a></p>
            </div>
            
            <div class="info-card">
              <div class="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p><a href="mailto:creatorbhanu&#64;gmail.com">creatorbhanu&#64;gmail.com</a></p>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            </div>
          </div>
          
          <div class="contact-form animated" [class.visible]="isVisible" [style.transition-delay]="'0.2s'">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name" 
                  [class.invalid]="isControlInvalid('name')"
                />
                @if (isControlInvalid('name')) {
                  <div class="error-message">Please enter your name</div>
                }
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  [class.invalid]="isControlInvalid('email')"
                />
                @if (isControlInvalid('email')) {
                  <div class="error-message">Please enter a valid email address</div>
                }
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  formControlName="phone"
                  [class.invalid]="isControlInvalid('phone')"
                />
                @if (isControlInvalid('phone')) {
                  <div class="error-message">Please enter a valid phone number</div>
                }
              </div>
              
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="5"
                  [class.invalid]="isControlInvalid('message')"
                ></textarea>
                @if (isControlInvalid('message')) {
                  <div class="error-message">Please enter your message</div>
                }
              </div>
              
              <button type="submit" class="btn" [disabled]="contactForm.invalid || isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              @if (formSubmitted) {
                <div class="success-message">
                  <i class="fas fa-check-circle"></i> Thank you for your message! We'll get back to you soon.
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: var(--light-gray);
    }
    
    .section-subtitle {
      max-width: 600px;
      margin: 0 auto var(--space-xl);
      color: var(--text-secondary);
    }
    
    .contact-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xxl);
    }
    
    @media (min-width: 992px) {
      .contact-container {
        grid-template-columns: 1fr 1.5fr;
      }
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }
    
    .info-card {
      background-color: var(--white);
      padding: var(--space-lg);
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .info-card .icon {
      width: 50px;
      height: 50px;
      background-color: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-md);
    }
    
    .info-card .icon i {
      color: var(--secondary);
      font-size: 1.25rem;
    }
    
    .info-card h3 {
      font-size: 1.1rem;
      margin-bottom: var(--space-sm);
    }
    
    .info-card p {
      color: var(--text-secondary);
      margin: 0;
    }
    
    .info-card a {
      color: var(--text-secondary);
      transition: color 0.3s ease;
    }
    
    .info-card a:hover {
      color: var(--primary);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-md);
      margin-top: var(--space-md);
    }
    
    .social-link {
      width: 40px;
      height: 40px;
      background-color: var(--white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary);
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    }
    
    .social-link:hover {
      background-color: var(--primary);
      color: var(--secondary);
      transform: translateY(-3px);
    }
    
    .contact-form {
      background-color: var(--white);
      padding: var(--space-xl);
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .form-group {
      margin-bottom: var(--space-md);
    }
    
    label {
      display: block;
      margin-bottom: var(--space-xs);
      font-weight: 500;
      color: var(--secondary);
    }
    
    input, textarea {
      width: 100%;
      padding: var(--space-md);
      border: 1px solid var(--gray);
      border-radius: 4px;
      font-family: var(--font-family);
      transition: all 0.3s ease;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
    }
    
    input.invalid, textarea.invalid {
      border-color: var(--error);
    }
    
    .error-message {
      color: var(--error);
      font-size: 0.85rem;
      margin-top: var(--space-xs);
    }
    
    .success-message {
      background-color: rgba(76, 175, 80, 0.1);
      color: var(--success);
      padding: var(--space-md);
      border-radius: 4px;
      margin-top: var(--space-md);
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }
    
    .success-message i {
      font-size: 1.25rem;
    }
    
    button[type="submit"] {
      width: 100%;
    }
    
    button[disabled] {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  formSubmitted = false;
  isVisible = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      message: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    this.observeScroll();
  }
  
  isControlInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.formSubmitted = true;
        this.contactForm.reset();
      }, 1500);
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
  
  observeScroll() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.isVisible = true;
      }
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      const element = document.querySelector('#contact');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}