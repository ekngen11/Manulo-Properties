import { LightningElement,track,wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
//Allows interaction with the searchProperties method fom PropertyController class
import getAllProperties from '@salesforce/apex/PropertyController.searchProperties';
export default class PropertyList extends NavigationMixin(LightningElement) {
    @track searchTerm = '';
    @wire(getAllProperties, {searchTerm:'$searchTerm'}) 
    properties;
    

    handleSearchTermChange(event){
        
        
        window.clearTimeout(this.delayTimeOut);
        const searchTerm = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeOut = setTimeout(()=>{
            this.searchTerm = searchTerm;
        },300);
    }

    get hasResults(){
        return (this.properties.data.length>0);
    }

    handlePropertyView(event){

        //Get property record Id from propertyview event defined in propertyTile.js
        const propertyId = event.detail;


        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                recordId : propertyId,
                objectApiName: 'Property__c',
                actionName: 'view'
            },
        });
    }
    

    
}