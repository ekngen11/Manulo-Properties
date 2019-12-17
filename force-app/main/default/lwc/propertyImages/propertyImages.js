import { LightningElement,wire,api } from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi';
import URL_FIELD from '@salesforce/schema/Property__c.picture__c';
const propertyFields = [URL_FIELD];
export default class PropertyImages extends LightningElement {
    @api recordId;
    @wire (getRecord,{recordId: '$recordId', fields:propertyFields})
    property;

    get pictureURL(){
        return getFieldValue(this.property.data,URL_FIELD);
    }
}