import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  @HostBinding("class.pc" ) pcMode = false;

    constructor(private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {

  }

}