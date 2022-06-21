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
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number;

  constructor() 
  { 
    this.log('constructor');
    
    this.valorInicial = 10;
  }

  ngDoCheck(): void 
  {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void 
  {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void 
  {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void 
  {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void 
  {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void 
  {
    this.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    this.log('ngOnChanges');
  }

  ngOnInit(): void 
  {
    this.log('ngOnInit');
  }

  private log(hook: string)
  {
    console.log(hook);
  }

}
