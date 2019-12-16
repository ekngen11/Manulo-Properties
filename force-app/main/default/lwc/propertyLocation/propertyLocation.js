import { LightningElement,api,track,wire } from 'lwc';

//getRecord adapter allows us to retrieve records without using apex
import {getRecord} from 'lightning/uiRecordApi';

//fields  names
const fields = [
    'Property__c.Name',
    'Property__c.Location__Latitude__s',
    'Property__c.Location__Longitude__s',
    'Property__c.Address__c',
    'Property__c.Zip__c',
    'Property__c.City__c',
    'Property__c.State__c',
    'Property__c.Country__c'
];
export default class PropertyLocation extends LightningElement {

    //Retrieves the current record Id
    @api recordId;
    @track name;
    @track mapMarkers = [];
    @wire(getRecord,{recordId: '$recordId',fields})
    loadProperty({error,data}){
        if(error){
            //Deal with error
        }
        else if(data){
            this.name = data.fields.Name.value;
            const Latitude = data.fields.Location__Latitude__s.value;
            const Longitude = data.fields.Location__Longitude__s.value;
            this.mapMarkers = [
                {   
                    //Uncomment this to use Longitude and Latitude instead of addresses for location
                    /*
                    location:{
                        Latitude,
                        Longitude
                    },
                    */

                    
                    location:{
                        Street:data.fields.Address__c.value,
                        City: data.fields.City__c.value,
                        State: data.fields.State__c.value,
                        PostalCode: data.fields.Zip__c.value,
                        Country: data.fields.fields.Country__c.value
                    },
                    title:this.name,
                    description: `Coords: ${Latitude},${Longitude}`
                }
                
            ]
        }
    }

    get cardTitle(){
        return (this.name) ? `${this.name}'s location` : 'Property location';
    }

}