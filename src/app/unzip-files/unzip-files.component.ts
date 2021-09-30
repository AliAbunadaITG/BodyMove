import { Component, NgModule, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser'
import * as JSZip from 'jszip';
import * as path from 'path';


@Component({
  selector: 'app-unzip-files',
  templateUrl: './unzip-files.component.html',
  styleUrls: ['./unzip-files.component.scss']
})
export class UnzipFilesComponent implements OnInit {

  constructor() { }
  arrayOfTexts = ['Text1','Text2','Text3','Text4']

  ngOnInit(): void {

  }
  myHtmlProperty:any;
  isLoaded:boolean = false;

  readFileContent(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if (!file) {
            resolve('');
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const text = reader.result.toString();
            resolve(text);

        };

        reader.readAsText(file);
    });
}

  async fileChanged(event) {
    // debugger
// fs.readFile()
    const file = event.target.files[0];
     this.myHtmlProperty = await this.readFileContent(file);
    this.isLoaded = true;

    // JSZip.loadAsync(file).then((zip) => { // <----- HERE
    //   var dataHtml = zip.file("data.html").async("string")

    //   Object.keys(zip.files).forEach((filename) => { // <----- HERE
    //     console.log('filename',filename)
    //     if(filename){
    //       var fileDataHtml =  zip.files[filename].async('string');
    //       console.log(fileDataHtml, 'fileDataHtml')
    //       zip.files[filename].async('string').then((fileData) => { // <----- HERE
    //         console.log(fileData, 'fileData')
    //         // fs.()
    //         // this.fileData = this.fileData + '**$$##$$**' + fileData;
    //       });
    //     }

    //   });
    // });

  }




// zipfile(){

//     var zip = new JSZip();
//     zip.file("Hello.txt", "Hello World\n");
//     var img = zip.folder("images");
//     img.file("smile.gif", imgData, {base64: true});
//     zip.generateAsync({type:"blob"})
//     .then(function(content) {
//         // see FileSaver.js
//         saveAs(content, "example.zip");
//     });

// }
}
