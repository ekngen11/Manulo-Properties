import { LightningElement,wire,track,api } from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';
import getImages from '@salesforce/apex/PropertyController.getImages';

import NAME from '@salesforce/schema/Property__c.Name';
import CITY from '@salesforce/schema/Property__c.City__c';
import DESCRIPTION from '@salesforce/schema/Property__c.Description__c';

const FIELDS = [NAME,CITY,DESCRIPTION];
export default class PropertyImages extends LightningElement {
    @api recordId;
    @track urls;
    pictures;

    @wire (getRecord,{recordId: '$recordId', fields:FIELDS})
    property;

    @wire(getImages,{propertyId:'$recordId'})
    wiredPictures(pictures){
        this.pictures = pictures;
        if(pictures.data){
            const files = pictures.data;
            if(Array.isArray(files) && files.length){
                this.urls = files.map(
                    file => '/sfc/servlet.shepherd/version/download/' + file.Id
                );
            }
        }
    }

    get name(){
        return getFieldValue(this.property.data, NAME);
    }

    get description(){
        return getFieldValue(this.property.data, DESCRIPTION);
    }
    get errors(){
        const errors = [this.property.error, this.pictures.error].filter(
            error => error
        );

        return errors.length ? errors : null;
    }

    handleupload(){
        refreshApex(this.pictures);
    }
}