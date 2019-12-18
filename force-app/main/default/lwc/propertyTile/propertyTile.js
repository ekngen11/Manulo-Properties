import { LightningElement,api } from 'lwc';
import PROPERTY_FACADE from '@salesforce/resourceUrl/manulo_properties';
export default class PropertyTile extends LightningElement {
    @api property;
    appResources = {
        propertyFacade: PROPERTY_FACADE + '/Manulo-Properties/img/propertyicon.png',
    };

    openRecordClick(){
        const selectEvent = new CustomEvent('propertyview',{
            detail: this.property.Id
        });
        this.dispatchEvent(selectEvent);
    }
}