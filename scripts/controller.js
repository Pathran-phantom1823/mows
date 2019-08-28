var btnConnect = document.getElementById('connect');
var btnDisConnect = document.getElementById('disconnect');
var btnPublish = document.getElementById('publish');
var btnSubscribe = document.getElementById('subscribe');
// var result = document.getElementById('result');
var conRes = document.getElementById('connectresult');
var topicinput = document.getElementById('topic').value
var timestamp = new Date()

// basic functionalities
 
// var client;// = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
btnConnect.addEventListener('click', function(e) {
    //  e.preventDefault();
    var brokerAdress = document.getElementById('broker').value;
    console.log(brokerAdress);
    client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
    client.on("connect", function(){
    conRes.value= "Successfully connected";
    console.log("Successfully connected");
})
})

btnPublish.addEventListener('click',function(e){
  e.preventDefault();
  var payload = document.getElementById('payload').value 
  topic = document.getElementById('topic').value
  console.log(topic)
  client.on("message", function (topic, payload) {
      // var holder = [topic, payload].join(": ");
      // result.value = holder;
    var data = "<tr><td>"+topic+"</td>"+
                "<td>"+payload+"</td>"+
                "<td>"+timestamp+"</td>"+
              "</tr>"
    $('table tbody').append(data);
  })
  
  client.publish("mqtt/"+topic,payload)
})

btnSubscribe.addEventListener('click',function(e) {
  // e.preventDefault();
  var topic = document.getElementById('topic').value
  console.log(topic)
  client.subscribe("mqtt/"+topic)

})

btnDisConnect.addEventListener('click', function() {
  console.log(client.end());
  client.end();
  conRes.value= "Successfully Disconnected";
})
















































// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
