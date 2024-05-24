// Everything MUST happen inside the fuction. Otherwise, the script keeps going back to the original node to append the child, overwriting whatever it has already created. You cannot generate more than one additional div that way!

function getBlocks (blocksPerSide) {
    let blockNumber = blocksPerSide * blocksPerSide;
    // let blockHeight = 
    
    for (let i = 0; i < blockNumber; i++) {
        let div = document.createElement("div");
        div.style.width = 100/blocksPerSide +"%"
        document.getElementById("sketchPad").appendChild(div);
    }

}

getBlocks(16);


