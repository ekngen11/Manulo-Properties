import { LightningElement,track,wire } from 'lwc';

//Allows interaction with the searchProperties method fom PropertyController class
import getAllProperties from '@salesforce/apex/PropertyController.searchProperties';
export default class PropertyList extends LightningElement {
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

    
}