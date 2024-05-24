// Everything MUST happen inside the fuction. Otherwise, the script keeps going back to the original node to append the child, overwriting whatever it has already created. You cannot generate more than one additional div that way!

function getBlocks (blockNumber) {
    
    for (let i = 0; i < blockNumber; i++) {
        var div = document.createElement("div");
        document.getElementById("sketchPad").appendChild(div);
    }

}

getBlocks(256);


