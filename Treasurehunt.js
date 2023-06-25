const changeToEmoji = (treasure) => {
  const treasureLocation = Math.floorMath.random() * 9;
  const skullLocation = Math.floorMath.random() * 9;
  
        if(treasure === treasureLocation){
            document.getElementById("coin").innerHTML = "🏆";
            alert("you won");
    } else if (treasure === skullLocation) {
        document.getElementById("skull").innerHTML = "💀";
        alert("you lose");
    } else { 
        document.getElementById(treasure).innerHTML = "";
    }
}
