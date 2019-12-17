import { LightningElement, api,wire} from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi';
import AGENT_FIELD  from '@salesforce/schema/Property__c.Agent__c';

const propertyFields = [AGENT_FIELD];
export default class PropertyAgent extends LightningElement {
    @api recordId; 
     @wire (getRecord, {recordId: '$recordId',fields: propertyFields})
     property;

     get agentId(){
         return getFieldValue(this.property.data,AGENT_FIELD);
     }
}