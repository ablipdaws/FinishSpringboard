// -------------------------
// Part One: Joke API
// -------------------------

async function getRandomJoke() {
  try {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
    const joke = res.data;
    console.log("Random Joke:", joke.setup, "-", joke.punchline);
  } catch (err) {
    console.log("Error getting random joke:", err);
  }
}

async function getTenJokes() {
  try {
    const res = await axios.get("https://official-joke-api.appspot.com/random_ten");
    const jokes = res.data;
    console.log("Ten Jokes:");
    jokes.forEach(j => {
      console.log(j.setup, "-", j.punchline);
    });
  } catch (err) {
    console.log("Error getting ten jokes:", err);
  }
}

async function getProgrammingJokes() {
  try {
    const res = await axios.get("https://official-joke-api.appspot.com/jokes/programming/ten");
    const jokes = res.data;
    console.log("Programming Jokes:");
    jokes.forEach(j => {
      console.log(j.setup, "-", j.punchline);
    });
  } catch (err) {
    console.log("Error getting programming jokes:", err);
  }
}

async function getFourRandomJokes() {
  try {
    const req1 = axios.get("https://official-joke-api.appspot.com/random_joke");
    const req2 = axios.get("https://official-joke-api.appspot.com/random_joke");
    const req3 = axios.get("https://official-joke-api.appspot.com/random_joke");
    const req4 = axios.get("https://official-joke-api.appspot.com/random_joke");

    const results = await Promise.all([req1, req2, req3, req4]);

    console.log("Four Random Jokes:");
    results.forEach(r => {
      console.log(r.data.setup, "-", r.data.punchline);
    });
  } catch (err) {
    console.log("Error getting four jokes:", err);
  }
}

async function logFiveJokes() {
  try {
    console.log("Five Jokes in a row:");
    for (let i = 0; i < 5; i++) {
      const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
      const joke = res.data;
      console.log(joke.setup, "-", joke.punchline);
    }
  } catch (err) {
    console.log("Error getting five jokes:", err);
  }
}

// -------------------------
// Part Two: Deck of Cards API
// -------------------------

async function deckOfCardsDemo() {
  try {
    // Make a new deck
    const deckRes = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
    const deckId = deckRes.data.deck_id;
    console.log("New Deck ID:", deckId);

    // Draw one card
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let card = res.data.cards[0];
    console.log("Single Card:", card.value, "of", card.suit);

    // Draw five cards
    res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`);
    console.log("Five Cards:");
    res.data.cards.forEach(c => {
      console.log(c.value, "of", c.suit);
    });

    // Shuffle and draw two
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    console.log("After Shuffle, Two Cards:");
    res.data.cards.forEach(c => {
      console.log(c.value, "of", c.suit);
    });

    // Hands for 4 players
    console.log("Hands for 4 players:");
    for (let i = 1; i <= 4; i++) {
      const handRes = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`
      );
      const hand = handRes.data.cards;
      const formatted = hand.map(c => `${c.value} of ${c.suit}`).join(", ");
      console.log(`Player ${i}:`, formatted);
    }

  } catch (err) {
    console.log("Error with Deck of Cards API:", err);
  }
}
