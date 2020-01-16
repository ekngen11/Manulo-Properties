# Manulo Properties Lightning Web Components Application


Manulo Properties is a sample application that can be utilized in the Real Estate industry to extend the basic functionality of Salesforce and keep track of properties via a custom object.

## Installation Manulo Properties on a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/). The steps include:

-    Enable Dev Hub in your Trailhead Playground 
-    Install Salesforce CLI • Install Visual Studio Code 
-    Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension


2. If you haven't already done so, authenticate with your hub org and provide it with an alias (**manuloproperties** in the command below):

```
sfdx force:auth:web:login -d -a manuloproperties
```

3. Clone this repository:

```
git clone https://github.com/ekngen11/Manulo-Properties.git
```

4. Create a scratch org and give it an alias (**manuloscratch** in our case below)

```
sfdx force:org:create -s -f config/project-scratch-def.json -a manuloscratch
```

5. Push the app to your scratch org:

```
sfdx force:source:push
```

6. Assign the **ManuloProperties** permission set to the default user.

```
sfdx force:user:permset:assign -n Manuloproperties
```

7. Import Sample data:

```
sfdx force:data:tree:import --plan Data/sample.json
```

8. Open the scratch org:

```
sfdx force:org:open
```

9. In App Launcher, select the **Manulo Properties** app.

