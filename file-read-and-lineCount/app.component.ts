import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

fileContent: any = '';
lineCount: any;

constructor(){}

ngOnInit() {}

onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader = new FileReader();
    let that = this;
    fileReader.onloadend = function(x) {
      that.fileContent = fileReader.result;
      that.lineCount = (that.fileContent.split("\n").length - 1);
    }
    fileReader.readAsText(file);
  }
}
