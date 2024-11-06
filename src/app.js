
let pronoun = ['my', 'your', 'our'];
let adj = ['awesome', 'creative', 'unique'];
let noun = ['developer', 'artist', 'thinker'];

for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++)  {
                console.log(pronoun[p] + adj[a] + noun[n] + ".net");
            }
        }
    }
    