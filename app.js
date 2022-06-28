'use strict';
console.log('up and running');

//we wanna make a dad joke generator
//each time the 'another' button is clicked, another joke is printed in the div
//i probably need to make a giant array of jokes, is there a better way to do that?
//probably, but i'm gonna make a giant array
let jokeArray = [];
//i can always add more jokes to the array as i feel necessary
//array can only hold 33 jokes, how would i go about adding more jokes?
//another array? i feel like there has to be another way
jokeArray = ["What do you call two monkeys who share an Amazon account? \n Prime mates.", "I told my wife she needs to start embracing her mistakes. \n So she hugged me.", "Who is the most lonely billionaire? \n Alone musk.", "I asked 10 people what LGTBQ standed for… \n Couldn’t get a straight answer!", "My wife and I let astrology get between us. \n It Taurus apart.", "Why can’t you send a duck to space? \n Because the bill would be astronomical.", "I once got fired from a canned juice factory. \n Apparently I couldn’t concentrate.", "Why did Karen press Ctrl+Shift+Delete? \n Because she wanted to see the task manager.", "I’m really excited for the amateur autopsy club I just joined. \n Tuesday is open Mike night!", "I can’t find my ‘Gone in 60 seconds’ DVD. \n It was here a minute ago.", "How was Rome split in two? \n With a pair of Ceasars.", "What kind of doctor is Dr. Pepper? \n A fizzician.", "Why didn’t the melons get married? \n Because they cantaloupe.", "Two guys walked into a bar. \n The third guy ducked.", "My son got angry when I told him 'Sky is the limit for you'. \n He wants to be an astronaut.", "What happens when it rains cats and dogs? \n You have to be careful not to step in a poodle.", "Did you know that bees are actually allergic to pollen? \n They break out in hives.", "I had a great joke about COVID… \n but I don’t wanna spread it around.", "How did the pirate get his ship so cheap? \n It was on sail..", "What do you call a laughing jar of mayonnaise? \n LMAYO.", "Did you hear about the cheese that’s been working out? \n Dude’s shredded", "What do you need to make a small fortune on Wall Street\? \n A large fortune.", "How do you follow Will Smith in the snow? \n You follow the fresh prints.", "What did Adam say to his GF on the 24th of December\? \n It’s Christmas Eve.", "My boss asked me why I only get sick on work days. \n I said it must be my weekend immune system.", "How does a non-binary samurai kill people? \n They/Them.", 'Friend: “Bro, can you pass me that pamphlet?” \n Me: “Brochure”', "Whoever stole my depression medication: \n I hope you’re happy.", "Why does Sherlock Holmes love Mexican restaurants? \n They give him good case ideas.", "Why can’t a leopard hide? Because he’s always spotted.", "The world tongue-twister champion just got arrested. I hear they’re gonna give him a really tough sentence.", "What do you call a zombie who cooks stir fries? Dead man wok-ing", "Which cat is the least loyal? A cheetah.",];
//i need to create a function to loop through the array...do i want to do it at random though? maybe not, then there's the risk of duplicates happening in one sitting
//get html elements
//another button
let anotherButton = document.getElementById('another-joke-button');
//get div where i wanna print the joke
let printJokeHere = document.getElementById('joke-goes-here');
//okay, i have an array of jokes and i want to iterate through it every time i click anotherButton
//same principal as the odd ducks lab, i'll just create a random index number to print a random joke from the array
function generateJoke(){
    //declare variable to be random index #
    let randomJoke = Math.floor(Math.random() * jokeArray.length);
    //will return a random item from jokeArray
    return jokeArray[randomJoke];
}

//i want to print that joke on the screen though
//create function to print out a new h2 in the div every time the button is clicked
//create h2 where i wanna print joke
//create h2 element
let jokeh2 = document.createElement('h2');
function printJoke(){
    //print the joke out as the text content of the h2
    jokeh2.textContent = generateJoke();
    //add h2 to the html div
    printJokeHere.append(jokeh2);
}
printJoke();
//when the button is clicked, another random joke will be generated
anotherButton.addEventListener('click', function(){
    generateJoke();
    printJoke();
});

console.log(jokeArray);