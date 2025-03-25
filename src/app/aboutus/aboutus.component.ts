import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input() parentValue: string = 'Initial Value';

  constructor() {
    console.log('Constructor executed');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges executed', changes);
  }

  ngOnInit() {
    console.log('ngOnInit executed');
  }

  ngDoCheck() {
    console.log('ngDoCheck executed');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit executed');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked executed');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit executed');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked executed');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy executed');
  }

  changeValue() {
    this.parentValue = 'Updated Value!';
  }
}

