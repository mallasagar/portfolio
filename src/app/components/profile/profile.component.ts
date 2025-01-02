import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from "../welcome/welcome.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { SkillComponent } from "../skill/skill.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, WelcomeComponent, NavbarComponent, ContactComponent, ExperienceComponent, AboutComponent, FooterComponent, SkillComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
