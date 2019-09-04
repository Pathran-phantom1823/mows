var btnConnect = document.getElementById('connect');
var btnDisConnect = document.getElementById('disconnect');
var btnPublish = document.getElementById('publish');
var btnSubscribe = document.getElementById('subscribe');
var btnUnSubscribe = document.getElementById('unsubscribe');
// var result = document.getElementById('result');
var conRes = document.getElementById('connectresult');
// var topic= document.getElementById('topic').value
// var payload = document.getElementById('payload').value;
var topic;
var payload;
var timestamp = new Date()
var data;

// basic functionalities
 
alert("PLEASE CONNECT THE BROKER FIRST")
// var client;// = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
btnConnect.addEventListener('click', function(e) {
        e.preventDefault();
        var brokerAdress = document.getElementById('broker').value;
        console.log(brokerAdress);
        client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
        client.on("connect", function(){
          conRes.value= "Successfully connected";
          conRes.style.backgroundColor='rgb(0, 204, 0)';
          conRes.style.color = 'yellow';
        console.log("Successfully connected");
    })
})

btnPublish.addEventListener('click',function(e){
      e.preventDefault();
      payload = document.getElementById('payload').value;
      topic = document.getElementById('topic').value
      console.log(topic)
      client.on("message", function (topic, payload) {
            var table = document.getElementById('tbody');
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = topic;
            cell2.innerHTML = payload;
            cell3.innerHTML = timestamp;
      // data = "<tr><td>"+topic+"</td>"+
      //       "<td>"+payload+"</td>"+
      //       "<td>"+timestamp+"</td>"+
      //     "</tr>"
      //     $('table tbody').append(data);
      })
            client.publish(topic,payload)
})

btnSubscribe.addEventListener('click',function(e) {
      e.preventDefault();
      topic = document.getElementById('topic').value
      console.log(topic)
      client.subscribe(topic)

})

btnDisConnect.addEventListener('click', function() {
        console.log(client.end());
        client.end();
        conRes.value= "Successfully Disconnected";
        conRes.style.backgroundColor='rgb(204, 0, 0)';
            conRes.style.color = 'yellow';
})

btnUnSubscribe.addEventListener('click',function(e) {
      e.preventDefault();
      console.log('unsubscribe')
      client.unsubscribe(topic,payload);
  
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
