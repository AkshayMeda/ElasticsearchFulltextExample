import { Component, ViewChildren, ElementRef, QueryList, ViewChild, OnInit, HostListener } from '@angular/core';
import { SearchResults, SearchSuggestions } from '@app/app.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, empty, timer, zip, range, of } from 'rxjs';
import { map, retryWhen, mergeMap, switchMap, debounceTime, filter } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-fileupload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
    file: File;
    
    fileUploadForm = new FormGroup({
        id: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
        file: new FormControl('', Validators.required),
    }, );

    constructor(public dialogRef: MatDialogRef<FileUploadComponent>, private httpClient: HttpClient) {

    }

    onFileInputChange(fileInputEvent: any) {
        this.file = fileInputEvent.target.files[0];

        this.fileUploadForm.controls['file'].setValue(this.file ? this.file.name : '');
    }

    onSubmit() {
        console.log(this.fileUploadForm.value);
        
        this.dialogRef.close();
    }
}
