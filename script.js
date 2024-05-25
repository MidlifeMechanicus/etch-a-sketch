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
        for (let i = 0; i < block.length; i++) {
            block[i].addEventListener("mouseover", () => {
                block[i].style.backgroundColor = "gold";
            })
        }
    };

    changeBlockColor();

}

getBlocks(100);



// changeBlockColor();


// function changeColor () {
    // const head = document.querySelector(".test");
    // head.style.backgroundColor = "pink";
// }
// 
// changeColor()

const head = document.querySelector(".test");
head.addEventListener("mouseover", () => {
    head.style.backgroundColor = "pink";
    // alert("working!");
});






// const head = document.getElementsByClassName("test");
// head[0].style.backgroundColor = "pink";

// Grabbing multiple elements at once returns a NodeList, an Array-like object that needs to be handled a little differently from single elements.