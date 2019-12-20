const RANDOM_WORDS = [
    "voleer",
    "happy",
    "alpha",
    "beta",
    "delta",
    "gamma",
    "apple",
  ];
  
  export const randomWord = () => {
    return RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
  }

  
  
