function readImage(){

  requirejs(["zxing"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".


    const codeReader = new util.BrowserMultiFormatReader();
    var img = document.querySelector("#img")

    //console.log("codeReader",img)

      codeReader.decodeFromImage(img)
          .then(result => {
              //console.log("Result",result);

              if (result.text.substr(0, 4).toLowerCase() == 'http') {

                  document.querySelector('#result').innerText = ""

                  var anchor = document.createElement("a")
                  var linkText = document.createTextNode(result.text);
                  anchor.href = result.text
                  anchor.appendChild(linkText)

                  document.querySelector('#result').appendChild(anchor)


              }
              else {

                  document.querySelector('#result').innerHtml = ""
                  document.querySelector('#result').innerText = result.text

              }

          })
          .catch(err => {
              //console.error("err",err);
              document.querySelector('#result').innerHtml = ""
              document.querySelector('#result').innerText = err

          });




  });
}
