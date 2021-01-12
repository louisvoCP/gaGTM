var firebaseConfig = {
    apiKey: "AIzaSyCadpa1mkOLfrU8aUgPUqJYQNx4DTN0sjs",
    authDomain: "astute-asset-244919.firebaseapp.com",
    databaseURL: "https://astute-asset-244919.firebaseio.com",
    projectId: "astute-asset-244919",
    storageBucket: "astute-asset-244919.appspot.com",
    messagingSenderId: "714582457983",
    appId: "1:714582457983:web:51f3b29f55ba528501094a",
    measurementId: "G-4274GV0PB4"
};

firebase.initializeApp(firebaseConfig);
analytics = firebase.analytics();

$('.testBtn').on('click', function(){
    console.log("button is working and connected to JQ")
    analytics.logEvent('select_content', {
        content_type: 'image',
        content_id: 'P12453',
        items: [{ name: 'Kittens' }]
      });
})