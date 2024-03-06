const size = 500;
  

  const getCameraIds = async()=>{
    if (!navigator.mediaDevices?.enumerateDevices)return;
    try{
        let mediaDevices = await navigator.mediaDevices.enumerateDevices();
        return mediaDevices.filter(device=>device.kind === "videoinput");
    }catch(err){
        console.log(err)
        return;
    }
}
const getConstrains = (id)=>{
    return {
        audio: false,
        video: {
          width: { ideal: size },
          height: { ideal: size },
          deviceId: { exact: id }
        } 
    }
}
const getVideoStreams = async()=>{
    let cameraListId = await getCameraIds();

    let stream1 = await navigator.mediaDevices.getUserMedia(getConstrains(cameraListId[0].deviceId));
    let stream2 = await navigator.mediaDevices.getUserMedia(getConstrains(cameraListId[1].deviceId));

    let video1 = document.createElement('video');
    let video2 = document.createElement("video");


    video1.srcObject=stream1;
    video2.srcObject=stream2;

    video1.play()
    video2.play();


    console.log(stream1)
    
    document.body.appendChild(video1)
    document.body.appendChild(video2)
}

const eyeDetection = (stream)=>{
    let canvas = document.createElement("canvas");
    canvas.height=size;
    canvas.width=size;
    let context = canvas.getContext("2d");

    setInterval(()=>drawImage(context),100);


}


const drawImage = (ctx)=>{

}

const getImageData=(ctx)=>{
    
}
//  getVideoStreams()
