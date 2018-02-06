## CodePush Setup on iOS

### Steps

1. Install the CodePush CLI
   
    ````
    npm install -g code-push-cli
    ````
    
2. Create a CodePush account

    ````
    code-push register
    ````

3. Login to get codepush access key

     ````
     code-push login
     ```` 
        
4. Add your app's iOS version to codepush.

      ````
      code-push app add <appName> ios react-native
      ````

5. Create deployment key using following command.

      ````
      code-push deployment ls <appName> -k
      ````
      
6. Install code push in your React native application using following.

     ````
     yarn add react-native-code-push
     ````

7. Plugin Installation (iOS - RNPM)

     ````
     react-native link react-native-code-push     
     ````
     
   Note: You will be asked for deployment key. Use the 'staging'
   deployment key obtained in step 5
   
You are now almost done for with setting up code push.

Add following code in your application index.js or app.js file

````
import codepush from 'react-native-code-push';

 componentDidMount() {
    codepush.sync({ updateDialog: true, installMode: codepush.InstallMode.IMMEDIATE });
  }
````   

Now, you can release an update to your iOS application whenever required by using following command.

````
code-push release-react <appName> ios
````
   
    