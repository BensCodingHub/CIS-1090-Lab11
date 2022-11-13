//The decleration of a variable named "text" that is assigned a string of words.
let text = "If you really want to hear about it, the first thing you'll probably want to know is where I was born, an what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told DB about, and he's my brother and all. He's in Hollywood. That isn't too far from this crumby place, and he comes over and visits me practically every week end. He's going to drive me home when I go home next month maybe. He just got a Jaguar. One of those little English jobs that can do around two hundred miles an hour. It cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to. He used to be just a regular writer, when he was home. He wrote this terrific book of short stories, The Secret Goldfish, in case you never heard of him. The best one in it was The Secret Goldfish. It was about this little kid that wouldn't let anybody look at his goldfish because he'd bought it with his own money. It killed me. Now he's out in Hollywood";

//Another variable decleration named "words" that is assigning our previous variable to an internal function
//The split function breaks the continous string that was contained in "words" and turns it into an array
let words = text.split(" ");

//The next internal function ".map" reverse assigns a function to our variable.
//the new created array accomodates another function, ".toLowerCase" turning our original string text into all lowercase.
words = words.map( word => word.toLowerCase() );

//The .map function is back again, and reverse assigns an anonymous function that takes a parameter.
words = words.map( function(word){
    return word
        .replaceAll(".", "")    // The .replaceAll function replaces all the periods with nothing, therefore removing them
        .replaceAll(",", "");   // Replacing all the commas with nothing, removing them as well
});

// Decleration of an empty object
let lookup = {};

//This for-loop is a linear style search that is usually used on arrays.
//The variable "word" is being assigned the variable 0, because that's the starting point in an array.
//It will stop looping once it reaches the end of the array. Because the length of the words array is greater than 0.
for ( let i = 0; i < words.length; i++ ){
    let word = words[i];

    //We're now assinging the variable firstLetter to another internalized function, .charAt
    //Because the charAt function starts at 0, it will output the first letter from a supplied word from the original words variable. 
    let firstLetter = word.charAt(0);

    // The ".hasOwnProperty" function checks the lookup object to see if it contains properties
    // It will yield a true or false result if it does or doesn't, from checking if there's a first letter supplied in the parameter.
    if ( !lookup.hasOwnProperty(firstLetter) ){
        lookup[firstLetter] = [];
    }

    //Here, the .Push function can add more words to the array if they didn't originally exist within the array.
    lookup[firstLetter].push(word);
}

// The program now declares the variable entry, assigning it to the lookup first letter
for ( firstLetter in lookup ){
   let entry = lookup[firstLetter];

   // Reverse assigned to entry, the filter function compares it to the indexOf function
   // Evaluating whether the item parameter is contained in the index parameter
   entry = entry.filter((item, index) => entry.indexOf(item) === index);

   // The sort interalized function sorts the words alphabetically.
   entry = entry.sort();

   // Although already assigned before, this now accomodates everything reverse assigned together for the entry variable.
   lookup[firstLetter] = entry;
}

// The expected output will take every word from the original string, and return a sorted list of the words in alphabetical order.
for ( letter of Object.keys(lookup).sort() ){
    console.log(letter, lookup[letter]);
}
