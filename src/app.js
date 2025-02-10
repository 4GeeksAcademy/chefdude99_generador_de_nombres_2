let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let final = ['.com', '.yo', '.tengohambre']

for (let i = 0; i < pronoun.length; i++) {
  for (let u = 0; u < adj.length; u++) {
    for (let p = 0; p < noun.length; p++) {
      for (let o = 0; o < final.length; o++)
      console.log(pronoun[i]+adj[u]+noun[p]+final[o])
    }
  }
}

