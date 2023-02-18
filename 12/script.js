// const testSpeedBtn = document.getElementById('test-speed-btn');
// const downloadSpeedSpan = document.getElementById('download-speed');
// const uploadSpeedSpan = document.getElementById('upload-speed');

// testSpeedBtn.addEventListener('click', testSpeed);

// function testSpeed() {
//   const startTime = new Date().getTime();
//   const fileUrl = 'https://speed.hetzner.de/100MB.bin';
//   const download = new Image();
//   download.src = fileUrl + '?n=' + startTime;
//   download.onload = function() {
//     const endTime = new Date().getTime();
//     const downloadTime = (endTime - startTime) / 1000;
//     const downloadSpeed = (100 / downloadTime).toFixed(2);
//     downloadSpeedSpan.textContent = downloadSpeed;
//   };
//   const upload = new XMLHttpRequest();
//   const formData = new FormData();
//   const fileData = new Blob([new ArrayBuffer(1048576)], {type: 'application/octet-stream'});
//   formData.append('file', fileData);
//   upload.open('POST', 'https://httpbin.org/post');
//   upload.onload = function() {
//     const endTime = new Date().getTime();
//     const uploadTime = (endTime - startTime) / 1000;
//     const uploadSpeed = (1 / uploadTime).toFixed(2);
//     uploadSpeedSpan.textContent = uploadSpeed;
//   };
//   upload.send(formData);
// }

// 2
// const downloadSpeedSpan = document.getElementById('download-speed');
// const uploadSpeedSpan = document.getElementById('upload-speed');

// function testSpeed() {
//   const downloadSpeed = navigator.connection.downlink;
//   const uploadSpeed = navigator.connection.uplink;
//   downloadSpeedSpan.textContent = downloadSpeed.toFixed(2);
//   uploadSpeedSpan.textContent = uploadSpeed.toFixed(2);
// }

// // Check the internet speed every second
// setInterval(testSpeed, 1000);
