import {Edit, EruptFieldModel, View} from "./erupt-field.model";
import {OperationMode, OperationType, OperationIfExprBehavior} from "./erupt.enum";


export interface EruptModel {
    eruptFieldModels: EruptFieldModel[];
    eruptJson: Erupt;
    eruptName: string;
    extraRow: boolean;
    //# customer prop
    eruptFieldModelMap?: Map<String, EruptFieldModel>;
    tableColumns?: View[];
    searchCondition: any;
}

export interface Erupt {
    primaryKeyCol: string;
    desc: string;
    power: Power;
    tree: Tree;
    linkTree: LinkTree;
    cardView: CardView;
    rowOperation: RowOperation[];
    drills: Drill[];
}

export interface CardView {
    galleryField: string;
    galleryCover: GalleryCover;
    viewFields: string[];
}

export enum GalleryCover {
    FIT = "FIT", //适应
    CLIP = "CLIP", //剪裁
}

interface LinkTree {
    field: string;
    dependNode: boolean;
    value: any;
}

export interface Drill {
    code: string;
    title: string;
    icon: string;
    column: string;
    link: Link;
}

export interface Page {
    pageIndex: number;
    pageSize: number;
    totalPage?: number;
    total?: number;
    sort?: string;
    list?: any[];
}

export interface Tree {
    id: string;
    label: string;
    pid: string;
    expandLevel: number;
    level: number;
    linkTable: Link[];
    children?: Tree[];
    data?: any;
}

export interface Checkbox {
    id: any;
    label: any;
    checked: boolean;
}

export interface Link {
    linkErupt: string;
}


export interface RowOperation {
    code: string;
    icon: string;
    title: string;
    mode: OperationMode;
    type: OperationType;
    tip: string;
    ifExpr: string;
    tplWidth: string;
    ifExprBehavior: OperationIfExprBehavior;
}


interface CodeAndEdit {
    edit: Edit;
    codeType: string;
    code: string;
}

export interface Power {
    add: boolean;
    delete: boolean;
    edit: boolean;
    query: boolean;
    viewDetails: boolean;
    importable: boolean;
    export: boolean;
}

export interface Row {
    className?: string;
    columns: Column[];
}

export interface Column {
    className?: string;
    value: string;
    colspan?: number;
}
