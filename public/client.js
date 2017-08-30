var webrtc;

window.onload = function() {
  console.log("onLoad");

  //var media = {
  //  video: true,
  //  audio: true
  //};

  var options = {
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: false
  };
  webrtc = new SimpleWebRTC(options);

  // we have to wait until it's ready
  webrtc.on('readyToCall', function () {
    // you can name it anything
    console.log("Ready  to call. Joining room.");
    webrtc.joinRoom('roomy_room');
  });

  webrtc.on('localScreenAdded', function(el) {
    console.log("el: " + el);
  });
}

function screenClicked() {
  console.log(arguments);
  if(webrtc) {
    webrtc.shareScreen(function() {
      console.log("share screen callback arguments: " + JSON.stringify(arguments));
    });
  }
  else {
    console.log("WEBRTC IS INVALID");
  }
}

function mediaClicked() {
  if(webrtc) {
    console.log("Starting media share");
    webrtc.startLocalVideo();
  }
}
