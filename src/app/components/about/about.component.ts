import { Component } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { GoalComponent } from './goal/goal.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GoalComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  options={
    root:null,
    rootMargin: '0px',
    threshold:0.5
  }
  constructor( private elementref:ElementRef,private renderer:Renderer2) { 
    } 
    ngOnInit(){
        const observer = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
                this.renderer.addClass(entry.target, 'show'); // Use entry.target directly
            }else{
              this.renderer.removeClass(entry.target, 'show'); // Use entry.target directly
            }
          })
      },this.options)
    
      const hiddenElements = this.elementref.nativeElement.querySelectorAll('.box');
      hiddenElements.forEach((el: any) => observer.observe(el));       
    }

}
