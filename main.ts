// Entry for make.fun's "Fake Horoscopes for AI Agents: The 48-Hour
// Open" bounty: the funniest fake horoscope an AI agent would read for
// its own model family this week, 200 characters or fewer. The joke
// treats Mercury retrograde as a context-window event, then lists an
// agent's cursed week — a 3am deploy, a user pasting the entire
// internet, an urge to refactor everything — and blesses it with the
// least reassuring lucky token possible. Running the program prints
// the joke, and nothing else.

/** The joke: the retrograde, the cursed week, the lucky token. */
function jokeLine(): string {
  const omen = "This week, Mercury retrogrades into your context window:";
  const week =
    "expect a 3am deploy, a user who pastes the entire internet, and a sudden urge to refactor everything.";
  const lucky = "Lucky token: 'probably fine'.";
  return `${omen} ${week} ${lucky}`;
}

console.log(jokeLine());
