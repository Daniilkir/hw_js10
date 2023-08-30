const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = '';
for (let i = 0; i < friends.length; i+=1) {
  string += friends[i];
}
console.log(string)
const joinedFriends = friends.join(', ');
console.log(joinedFriends);

const trelloCards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

trelloCards.splice(2, 1);
trelloCards.splice(2, 0, "newCard");
console.log(trelloCards);

