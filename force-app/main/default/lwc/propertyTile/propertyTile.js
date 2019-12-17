import { LightningElement,api } from 'lwc';
import PROPERTY_FACADE from '@salesforce/resourceUrl/manulo_properties';
export default class PropertyTile extends LightningElement {
    @api property;
    appResources = {
        propertyFacade: PROPERTY_FACADE + 'img/propertyicon.png',
    }
}