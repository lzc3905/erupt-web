import {Component, Input, OnInit} from '@angular/core';
import {Edit, EruptFieldModel} from "../../model/erupt-field.model";
import {DateEnum, PickerMode} from "../../model/erupt.enum";
import {DatePipe} from "@angular/common";
import {DisabledDateFn} from "ng-zorro-antd/date-picker/standard-types";

@Component({
    selector: 'erupt-date',
    templateUrl: './date.component.html',
    styles: []
})
export class DateComponent implements OnInit {

    @Input() size: 'large' | 'small';

    @Input() field: EruptFieldModel;

    @Input() range: boolean = false;

    edit: Edit;

    private datePipe: DatePipe = new DatePipe("zh-cn");

    dateRanges: object = {};

    dateEnum = DateEnum;

    today: Date = new Date();

    constructor() {

    }

    ngOnInit() {
        this.dateRanges = {
            "今天": [this.datePipe.transform(new Date(), "yyyy-MM-dd 00:00:00"), this.datePipe.transform(new Date(), "yyyy-MM-dd 23:59:59")]
        };
        this.edit = this.field.eruptFieldJson.edit;
    }

    disabledDate: DisabledDateFn = (date) => {
        if (this.edit.dateType.pickerMode == PickerMode.ALL) {
            return false;
        } else if (this.edit.dateType.pickerMode == PickerMode.FUTURE) {
            return date.getTime() < this.today.getTime();
        } else if (this.edit.dateType.pickerMode == PickerMode.HISTORY) {
            return date.getTime() > this.today.getTime();
        }
    };


}