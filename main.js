function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet', modelLoaded)
};

function modelLoaded()
{
  console.log("model is loaded")
}

function draw()
{
  image(video,0,0,300,300)
  classifier.classify(video, gotResults)
}

function gotResults(error,results)
{
  if (error)
  {
    console.log(error)
  }
  else 
  {
    console.log(results)
    document.getElementById("result_object_tag").innerHTML=results[0].label
    document.getElementById("result_accuracy_tag").innerHTML=results[0].confidence.toFixed(3)
  }
}


