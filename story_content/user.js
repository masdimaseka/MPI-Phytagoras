function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6g92SqDhB0a":
        Script1();
        break;
      case "6YLnNXqXfn8":
        Script2();
        break;
      case "6LWaQfyA4Cn":
        Script3();
        break;
      case "63pbl1ZZ5Ic":
        Script4();
        break;
      case "62m4jDHirt8":
        Script5();
        break;
      case "6rfJRMG8Cpp":
        Script6();
        break;
      case "5mfLRkKvKOz":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.play();
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.play();
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

