public with sharing class PropertyControllerTest {
    
    public static void getAllPropertiesTest(){

        List<Property__c> properties = new List<Property__c>();
        for(Integer i = 0;i<200;i++){
            properties.add(new Property__c(Name='Property Test'+i, City__c = 'Nairobi'));
        }
        for(Integer i = 0;i<100;i++){
            properties.add(new Property__c(Name='Property Test'+i, City__c = 'Kigali'));
        }

        insert properties;

        Test.startTest();
        List<Property__c> allProperties = PropertyController.searchProperties('');
        List<Property__c> someProperties = PropertyController.searchProperties('airo');

        Test.stopTest();

        System.assertEquals(300, allProperties.size(), 'Did not return the right number of total properties');
        System.assertEquals(200, someProperties.size(), 'Did not return the right number of searched properties');

    }
}
