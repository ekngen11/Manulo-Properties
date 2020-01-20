//
public with sharing class PropertyController {
    
    @AuraEnabled(Cacheable = true)
    public static List<Property__c> searchProperties(String searchTerm){
        
        ///Return all properties if there is no search term
        if(searchTerm==''){
            return getAllProperties();
        }
        else {
            searchTerm = '%'+searchTerm+'%';

            return [SELECT Name,Agent__c,Baths__c, 
             Beds__c,City__c,Description__c,Location__Latitude__s, Location__Longitude__s,
            Picture__c,Price__c,
            State__c,Zip__c,Address__c
             FROM Property__c WHERE City__c LIKE :searchTerm];
        }
    }

    @AuraEnabled(Cacheable=true)
    public static List<Property__c> getAllProperties(){
        return [SELECT Name,Agent__c,Baths__c, 
             Beds__c,City__c,Description__c, Location__Latitude__s, Location__Longitude__s,
            Picture__c,Price__c,
            State__c,Zip__c,Address__c
             FROM Property__c];
    }

    @AuraEnabled(Cacheable=true)
    public static List<ContentVersion> getImages(Id propertyId){
        List<ContentDocumentLink> links = [SELECT Id, LinkedEntityId,ContentDocumentId FROM ContentDocumentLink WHERE LinkedEntityId =: propertyId AND ContentDocument.FileType IN ('PNG','JPG','JPEG','GIF')];

        if(links.isEmpty()){
            return null;
        }

        Set<Id> contentIds = new Set<Id>();

        for(ContentDocumentLink link:links){
            contentIds.add(link.ContentDocumentId);
        }

        return [SELECT Id, Title FROM ContentVersion WHERE ContentDocumentId IN : contentIds];
    }
}