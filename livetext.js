const liveText = `Ever since that first mall hangout, call it blind love  I was obsessed with you. I always wished I was good enough to even be near you. From buying you food when your parents wouldnt wanna pay, to the silly trades we made I was desperate for any piece of you to hold onto.

I remember trading legend of zelda botw to you just to get your little glow in the dark Hello Kitty figure so i could have a anything to rember you by. Giving you my Chainsaw Man books, hoping youd give me the tiniest hint that you liked me back. I was so desperate for you to see me, to love me. Every night, Id wish for some magical call telling me you wanted me to be your boyfriend. It always felt like I had to be with you  like I was drawn to you no matter what.

You were, and still are, the coolest person Ive ever met.

I never imagined Id be at a point where I can say “youre mine” and know that Im yours too. From our dumb inside jokes like Funky Buddha and Barack Obama or like random characters we created like miso soup or jaquevious and piska (RIP Piska Wiener), we had created a little world of our own.

The gifts youve made me — the clay cats, crocheted roses, the cat gloves theyre priceless to me. Im so lucky to be part of your world, to feel like I know you deeply, to feel like I matter. You make me feel so loved.

Even when were distant or I mess up and forget things like Girlfriends Day, Ive never once doubted that I love you truly and completely. If it were my last day on Earth, Id spend every moment with you, just to pass away in your arms. And if I had a final thought, it would be of you  smiling, wearing the I Woof You shirt, lifting me into eternal peace.

Your smile has cheered me up for so long even when I only had three photos of you saved. Now Ive counted... and I have 3,400 pictures of you on my phone. Maybe its a little obsessive, but every single one brings me joy like nothing else.

I hope I get to hold you after weve succeeded, after weve grown even more together. I wont stop loving you. one day when i feel like weve made it and just hug you for an absurdly long time probably not until the next Persona game releases, or maybe even until the heat death of the universe.

I cant even begin to express my gratitude for everything youve done, for everything youve put up with. Youre a wonderful partner the kind anyone would die for (but, of course, only I get to have you).

Youre truly an amazing girlfriend. A creative, beautiful, kind, loving human being(maybey on the human being part i still cant prove it but ur some sort of evil seal alien )  my best friend, my buff caked up gamer duo(epic), my everything.

All that said, I still dream of the day I can wake up next to you, hold your hand through dawn or dusk, under the moonlight or starlight gazing at either the sky or your eyes, whichever is brighter that day.

Youre my beautiful star in the sky. And Id swim through all of space  even if there were spiders (yiax)  just to reach you.

So yeah. I love you. A lot. Im sorry if I dont always show it well, but I really do. I hope this message brightened your day or night just a little bit.
-love nikolas xoxox <3
_ _
I LOVE YOU
_ _
ICH LIEBE DICH
_ _
TE IUBESC
_ _
ΣΕ ΑΓΑΠΩ
_ _
Я ТЕБЯ ЛЮБЛЮ
_ _
MILUJI TĚ
_ _
愛してます
_ _
我爱你
_ _
मुझे तुमसे प्यार है`;
const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");

let index = 0;

function typeNextChar() {
  if (index < liveText.length) {
    typedText.textContent += liveText.charAt(index);
    index++;
    setTimeout(typeNextChar, 80);
  }
}

window.addEventListener("load", typeNextChar);
