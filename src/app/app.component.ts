import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular-pwa-app';

    constructor(private swUpdate: SwUpdate) {
    }

    ngOnInit(): void {
        // check back to the server to see i new ngsw.json is avaible
        //  this can be calles inside setInterval, upon router navigation, (and something else)
        this.swUpdate.checkForUpdate();
        this.swUpdate.available.subscribe(()=>{
            if(confirm("New version avaible. Load New Version?")){
                window.location.reload();
            }
        });

    }
}
