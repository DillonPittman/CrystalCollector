var idealHaul=0
var currentHaul=0
var wins=0
var losses=0
var gem=[]

window.onload = function() {
    reset()
    $("#gem1").click(valueGem1);
    $("#gem2").click(valueGem2);
    $("#gem3").click(valueGem3);
    $("#gem4").click(valueGem4);
  };

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

function reset () {
    gem = []
    // console.log("reset")
    idealHaul = getRandomInt(19,120)
    $("#idealHaul").text("$" + idealHaul)
    currentHaul = 0;
    $("#currentHaul").text("$" + currentHaul)

    while(gem.length<4){
        var random = Math.ceil(1 + Math.floor(Math.random() * 12));
    if(gem.indexOf(random)==-1){
        gem.push(random);
    }
}
// console.log(gem);
    // Old gem randomizer. gem3 never worked right.
    // gem1 = getRandomInt(1,12)
    // gem2 = getRandomInt(1,12)
    // gem3 = getRandomInt(1,12)
    // gem4 = getRandomInt(1,12)
    // while (gem1 === gem2){
    //     gem2 = getRandomInt(1,12)        
    // } 
    // while (gem2 === gem3){
    //     gem3 = getRandomInt(1,12)        
    // } 
    // while (gem3 === gem4){
    //     gem4 = getRandomInt(1,12)        
    // } 
};

function valueGem1(){
    $("#currentHaul").text("$" + (currentHaul + gem[0]))
    currentHaul = (currentHaul + gem[0])
    // console.log("gem1:" + gem[0])
    endCheck()
};
function valueGem2(){
    $("#currentHaul").text("$" + (currentHaul + gem[1]))
    currentHaul = (currentHaul + gem[1])
    // console.log("gem2:" + gem[1])
    endCheck()
};
function valueGem3(){
    $("#currentHaul").text("$" + (currentHaul + gem[2]))
    currentHaul = (currentHaul + gem[2])
    // console.log("gem3:" + gem[2])
    endCheck()
};
function valueGem4(){
    $("#currentHaul").text("$" + (currentHaul + gem[3]))
    currentHaul = (currentHaul + gem[3])
    // console.log("gem4:" + gem[3])
    endCheck()
};

function endCheck (){
    if (currentHaul >= idealHaul){
        if (currentHaul == idealHaul){
            wins++;
            $("#wins").text("Wins: " + wins)
            // console.log("endCheck win")
            reset()
        } if (currentHaul > idealHaul)
            losses++
            // console.log(currentHaul)
            // console.log(idealHaul)
            $("#losses").text("Losses: " + losses)
            // console.log("endCheck loss")
            reset()
    };
};