// Everything MUST happen inside the fuction. Otherwise, the script keeps going back to the original node to append the child, overwriting whatever it has already created. You cannot generate more than one additional div that way!

function getBlocks (blocksPerSide) {
    let blockNumber = blocksPerSide * blocksPerSide;
    
    for (let i = 0; i < blockNumber; i++) {
        let div = document.createElement("div");
        div.style.width = 100/blocksPerSide +"%"
        div.setAttribute("class", "block");
        document.getElementById("sketchPad").appendChild(div);
    }

    function changeBlockColor () {
        let block = document.getElementsByClassName("block");

// Because block captures more than one element, it is a nodeList, an array-like object. Each element occupies a separate entry on the list, so we need a for loop to add our eventListener to each entry.

        for (let i = 0; i < block.length; i++) {
            block[i].addEventListener("mouseover", () => {
                block[i].style.backgroundColor = "gold";
            })
        }
    };

    changeBlockColor();

}

getBlocks(100);

