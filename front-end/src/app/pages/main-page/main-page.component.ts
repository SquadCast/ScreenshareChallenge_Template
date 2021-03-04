import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  /* 
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
Main Screenshare Component 
Some Functions have been pre-built as a tip,
you can use more or less or rewrite the whole thing! 
The freedom is yours! 
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
*/
  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  isScreenSharing: boolean = false;
  screenshotTaken: boolean = false;
  uploadComplete: boolean = false;

  ngOnInit(): void {}

  captureScreenshot() {}

  download() {}

  upload() {}

  shareScreen() {}
}
