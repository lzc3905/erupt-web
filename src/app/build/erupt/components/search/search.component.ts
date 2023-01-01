import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EruptModel} from "../../model/erupt.model";
import {ChoiceEnum, DateEnum, EditType, Scene} from "../../model/erupt.enum";
import {colRules} from "@shared/model/util.model";
import {EruptFieldModel} from "../../model/erupt-field.model";

@Component({
    selector: 'erupt-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

    @Input() eruptModel: EruptModel;

    @Input() size: "large" | "small" | "default" = "large";

    @Output() search = new EventEmitter();

    editType = EditType;

    col = colRules[3];

    choiceEnum = ChoiceEnum;

    dateEnum = DateEnum;


    constructor() {
    }

    ngOnInit(): void {
    }

    enterEvent(event) {
        if (event.which === 13) {
            this.search.emit();
        }
    }


}
