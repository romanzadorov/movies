import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent implements OnInit {
  videoLink: any;

  constructor(public dialogRef: MatDialogRef<VideoDialogComponent>) { }

  ngOnInit() {
  }

}
