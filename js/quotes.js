const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them",
    author: "Confucius",
    kor: "허물이 있다면, 버리기를 두려워 말라",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom",
    author: "Confucius",
    kor: "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다",
  },
  {
    quote: "Age is no guarantee of maturity",
    author: "Lawana Blackwell",
    kor: "나이가 성숙을 보장하지는 않는다",
  },
  {
    quote: "Youth isn’t always all it’s touted to be",
    author: "Lawana Blackwell",
    kor: "젊음은 반드시 칭송되는 것만큼 좋은 것은 아니다",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated",
    author: "Maya Angelou",
    kor: "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
    kor: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다",
  },
  {
    quote: "Life is either a daring adventure or nothing at all",
    author: "Helen Keller",
    kor: "생활은 과감한 모험이거나 아니면 아무것도 아니다",
  },
  {
    quote: "This too shall pass",
    author: "Et hoc transibit",
    kor: "이또한 지나가리라",
  },
  {
    quote: "The dice is cast",
    author: "Julius caesar",
    kor: "주사위는 던져졌다",
  },
  {
    quote: "Only I can change me life, no one can do it for me",
    author: "Carol Burnett",
    kor: "내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요",
  },
  {
    quote: "Life is unfair, get used to it",
    author: "Bill Gates",
    kor: "인생은 불공평 합니다. 익숙해지세요",
  },
  {
    quote: "Being happy never goes out of style",
    author: "Lilly Pulitzer",
    kor: "즐거움은 영원히 유행에 뒤떨어지지 않는다",
  },
  {
    quote:
      "All you need in this life is ignorance and confidence, then success is sure",
    author: "Maxime Lagacé",
    kor: "삶에 필요한 것은 무지와 자신감이다. 그렇다면 성공은 확실하다",
  },
  {
    quote:
      "Life can only be understood backwards; but it must be lived forwards",
    author: "Søren Kierkegaard",
    kor: "인생은 거꾸로만 이해되지만 앞으로 살아야 한다",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why",
    author: "Mark Twain",
    kor: "당신의 인생에서 가장 중요한 두 날은 당신이 태어난 날과 그 이유를 찾는 날이다",
  },
  {
    quote: "Nothing in more despicable than respect based on fear",
    author: "Albert camus",
    kor: "두려움 때문에 갖는 존경심만큼 비열한 것은 없다",
  },
  {
    quote: "Turn your wounds into wisdom",
    author: "Oprah Gail Winfrey",
    kor: "상처를 지혜로 바꾸세요",
  },
  {
    quote: "Change the world by being yourself",
    author: "Amy Poehler",
    kor: "자신이 됨으로써 세상을 바꿔라",
  },
  {
    quote: "Great minds have purposes, others have wishes",
    author: "Washington Irving",
    kor: "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다",
  },
  {
    quote:
      "If you are not willing to risk the usual, you will have to settle for the ordinary",
    author: "Jim Rohn",
    kor: "만약 네가 리스크를 무릅쓰지 않으려면, 어쩔 수 없이 평범함에 안주할 것이다",
  },
];

const quote = document.querySelectorAll("#quotes span")[0];
const author = document.querySelectorAll("#quotes span")[1];
const kor = document.querySelectorAll("#quotes span")[2];
const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
kor.innerText = toDaysQuote.kor;
