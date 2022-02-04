/* const friendLists = ["Manik", "Abdul Kader", "Al-Mamun", "Mostafizur Mim", "Nouroj Biswas"];

function bestFriend(FriendName) {
    let friendNameList = FriendName[0];
    for(let i = 0; i < FriendName.length; i++) {
        const nameList = friendLists[i];
        if(nameList > friendNameList){
            friendNameList = nameList;
        }
    }
    return friendNameList;
}

let MyfriendName = bestFriend(friendLists);
console.log(MyfriendName);

*/

/* let myBestFriendName = bestFriend(friendLists);
console.log("Largest Name is:", myBestFriendName); */


function bestFriend(bestFriendList) {
    var longestWord = "";
  
    bestFriendList.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = bestFriend(["The","quick","brown", "fox", "jumped", "over", "the wall in", "lazy", "dog"]);
  console.log(word); // result is "jumped"