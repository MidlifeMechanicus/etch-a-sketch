const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {

    let blockRequest = parseInt(prompt("How many blocks do you want on each side?", "Please enter a numerical value between 1 and 100."));

    if (blockRequest > 0 && blockRequest < 101) {
    
        // We cannot remove elements in a NodeList by targeting them directly with .remove(). We must therefore target the containing parent element and use .removeChild. In general it is computationally faster to remove last element rather than first element.

        let cleanPad = document.getElementById("sketchPad");

        while (cleanPad.firstChild) {
            cleanPad.removeChild(cleanPad.lastChild)
        }

        // This could also have been done by deleting the html. However, this would not work where you wanted to preserve some elements and not others. See example.

        // doFoo.onclick = () => {
            // const myNode = document.getElementById("foo");
            // myNode.innerHTML = '';
        //   }

        getBlocks(blockRequest);
    } else {
        alert("That is not a valid entry.")
    }
})


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

getBlocks(16);