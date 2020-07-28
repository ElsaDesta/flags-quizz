export default function shuffle(options) {
    let ctr = options.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = options[ctr];
        options[ctr] = options[index];
        options[index] = temp;
    }
    return options;
}