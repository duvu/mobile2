import { Component, OnInit } from '@angular/core';
import { distanceInWordsToNow } from "date-fns";
import { ListViewEventData } from "nativescript-ui-listview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "~/app/shared/models/event-data";
import { EventService } from "~/app/shared/services/event.service";

@Component({
    selector: 'ns-device-list',
    moduleId: module.id,
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
    events: Array<EventData>;
    constructor(private eventService: EventService) { }

    ngOnInit() {
        console.log('Access here!')
        this.eventService.getLiveEvents().subscribe(
            (data: Array<EventData>) => {
                console.log('event-size', data.length);
                this.events = data;
            },
            (error: any) => {
                console.log('error', error);
            },
            () => {
                //
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onDeviceItemTap(args: ListViewEventData) {
        //
    }

    distanceToNow(timestamp: number): string {
        return distanceInWordsToNow(new Date(timestamp), {addSuffix: true});
    }

}
