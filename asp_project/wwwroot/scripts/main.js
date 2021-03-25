function scan(){

  requirejs(["zxing"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".


    const codeReader = new util.BrowserMultiFormatReader();
    var img = document.querySelector("#img")

    console.log("codeReader",img)


  


    codeReader.decodeFromImage(img)
    .then(result => {
      console.log(result);

    })
    .catch(err => {
      console.error(err);

    });


  });
}
