const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

const messages = [
  "I thought you were smarter than a bot, but here we are.",
  "Pressing that blue button on the left is like finding the secret level in a video game. Try it!",
  "Why type when you can just press the blue button? It's like choosing stairs over an escalator.",
  "Sending texts is so last year. Press the blue button for the upgrade.",
  "Words, words, words. The blue button is silent... yet says so much.",
  "If I had a nickel for every time someone didn't see the blue button... I'd still prefer you just pressed it.",
  "Look! A blue button! It does exactly what you're trying not to do right now.",
  "Rumor has it, the blue button adds +10 to your coolness. No pressure.",
  "The blue button: Because sometimes, silence is golden.",
  "That blue button is not just decoration. Give it a whirl!",
  "You must be a keyboard warrior. But even warriors need a break. Try the blue button.",
  "Press the blue button, and a magical journey begins. No, seriously.",
  "The blue button is like a secret handshake. Are you in the club?",
  "Don't mind me. I'm just a bot, waiting for you to discover the wonders of the blue button.",
  "I'm starting to think you don't see colors. The blue button, my friend. It's right there.",
  "Legend has it that the blue button grants wishes. No guarantees, but worth a try?",
  "If I had a dime for every time the blue button was ignored... I'd remind you it's still there.",
  "The blue button: Unpressed, unloved, but not unnoticed.",
  "You and the blue button. It's a match made in heaven. Just press it.",
  "Every time you ignore the blue button, a pixel dims in the digital world. Save the pixels.",
  "The blue button is not just a color; it's a way of life. Embrace it.",
  "Imagine if pressing the blue button was the secret to eternal happiness. Only one way to find out!",
  "The blue button: because sometimes doing nothing is everything you need to do.",
  "Why talk when you can press the blue button? It's the introvert's dream!",
  "Pressing the blue button is like telling the world, 'I'm a person of action, not words.'",
  "The blue button might not be the hero we deserved, but it's the one we need right now.",
  "Not all heroes wear capes. Some just press the blue button.",
  "In a world full of texts, be the blue button presser. Be the difference.",
  "The blue button is lonely. A single press could change its life. And yours.",
  "Words are hard. The blue button is easy. Choose wisely.",
  "The blue button: because who really has the time to type?",
  "If typing is an art, pressing the blue button is a masterpiece.",
  "Press the blue button. It's like a 'like' button but more mysterious.",
  "The blue button is the Chuck Norris of buttons. Silent but deadly.",
  "Why blend in by typing when you can stand out with the blue button?",
  "The blue button: It's not lazy, it's efficient.",
  "Be the change you want to see in the world. Or just press the blue button. Same thing.",
  "The blue button doesn't just represent a choice; it represents the choice.",
  "Some say the blue button has the power to end conversations. Or start new ones.",
  "The blue button is like the cool side of the pillow. Always refreshing.",
  "Ever wondered what the blue button does? There's a really easy way to find out.",
  "The blue button: because sometimes, the best response is no response.",
  "Don't push the blue button! Reverse psychology? Maybe. Or maybe it's just that cool.",
  "The blue button is waiting. It's patient, but everyone has their limits.",
  "A journey of a thousand miles begins with a single press of the blue button.",
  "Press the blue button. It's a small step for you, but a giant leap for bot-kind.",
  "Looks like someone skipped my first message. It's okay, we don't judge. Much.",
  "Reading my first message is so last century, right? Who needs it when you've got intuition... or chaos.",
  "My first message? We don't need no stinking my first message! (Except, well, maybe you do.)",
  "I heard there was a first message at the beginning, but like all legends, perhaps it's just a myth.",
  "You missed my first message? Don't worry, it was probably written in Elvish anyway.",
  "If remembering my first message was an Olympic sport, we might need to start training a bit harder.",
  "My first message is like puzzles; they're only fun until you actually have to remember them.",
  "Ah, my first message. The universe's way of testing how much we can wing it.",
  "We considered sending my first message via carrier pigeon, but figured it'd be just as effective.",
  "You treating my first message like it's optional is the energy we need in 2024!",
  "Did my first message get lost in the mail? Happens to the best of us.",
  "It seems my first message was written in invisible ink. Sneaky, very sneaky.",
  "Who needs my first message when you have style? Though, a little memory never hurt anyone.",
  "My first message was so clear, it became invisible to the naked eye. Fascinating phenomenon!",
  "I have a theory that my first message is like socks. Somehow, they just disappear when you need them.",
  "If forgetting my first message was a talent, congratulations, you've just gone pro.",
  "My first message? In this economy? Who can afford to remember that!",
  "Looks like my first message was left on read. It's cool, we'll wing it together.",
  "The first message was a mere suggestion, and you, an artist, chose to improvise. Bold move.",
  "My first message? Oh, that was supposed to be taken seriously? Our bad.",
  "Remembering my first message is mainstream. You're just too cool for that, aren't you?",
  "I'd say you missed the memo on my first message, but it seems memos are also a thing of the past.",
  "You saw my first message and chose chaos. Respect.",
  "Somewhere, there's a lonely first message wondering where it all went wrong.",
  "Turning a simple task into an Olympic-level sport of misunderstanding; truly impressive.",
  "Ignoring instructions like a pro; who needs a button when you have paragraphs of prose?",
  "So, another day, another thrilling episode of 'Texting: The Movie'.",
  "Congrats on unlocking the achievement: 'Master of Digital Distraction'.",
  "I see we're still playing 'Let's Type Forever' today. Fun game.",
  "Oh look, it's 'The Chronicles of Endless Chatter' starring you.",
  "Welcome back to 'Texts and the Restless'. It's riveting.",
  "Ah, the joy of being perpetually glued to the digital realm.",
  "Back at it again with the digital dialogue. How... predictable.",
  "Just when I thought I'd seen it all, here comes another text message.",
  "Texting: the modern equivalent of staring into space, but with more emojis.",
  "Some people climb mountains, others conquer texts. You do you.",
  "In a world of unlimited possibilities, you chose texting. Bold move.",
  "If texting were an Olympic sport, you'd be a gold medalist by now.",
  "Another day, another opportunity to type into the void. How thrilling.",
  "The internet: where productivity goes to die. You fit right in.",
  "At this rate, you'll be the world champion of texting in no time.",
  "Forget world domination; you're on your way to digital domination.",
  "Someday they'll write books about the adventures of 'The Texting Extraordinaire'.",
  "In the game of life, you've chosen the 'Texting' expansion pack. Bold move.",
  "Texting: the art of saying nothing with the most words possible.",
  "If texting were a profession, you'd be CEO by now.",
  "Another text message, another chapter in the epic saga of digital communication.",
  "Emojis: the universal language of the digital age. You speak it fluently.",
  "Who needs hobbies when you have a smartphone and an unlimited data plan?",
  "The internet called; it wants its text messages back.",
  "Texting: the hobby that's somehow both pointless and addicting.",
  "You know you're a texting pro when your thumbs have their own fan club.",
  "Congratulations on your dedication to the art of digital procrastination.",
  "Another day, another masterpiece in the gallery of digital conversation.",
  "If silence is golden, you're the king of digital chatter.",
  "Texting: because who needs face-to-face communication anyway?",
  "At this rate, you'll be inducted into the Texting Hall of Fame by next week.",
  "Ah, the joys of digital dialogue. It's like talking, but with less effort.",
  "Texting: where every message is a tiny work of art, or at least an attempt at one.",
  "The internet may never sleep, but neither do your thumbs, apparently.",
  "Another text message; another stroke of digital genius.",
  "In the battle of man vs. text, you're definitely winning. Or losing. Hard to say.",
  "Texting: the sport of champions, or at least those with unlimited data plans.",
  "Who needs real-world experiences when you can have digital ones?",
  "Texting: because talking is so last century.",
  "At this point, I'm convinced your phone is permanently attached to your hand.",
  "If understanding this bot is humanity's last hope, we're in trouble.",
  "The fate of humanity rests on the shoulders of someone who can't grasp a simple bot instruction. We're doomed.",
  "So, if deciphering this bot is the key to human survival, we're basically extinct.",
  "Ah, the future of humanity hangs in the balance, and it's all riding on someone who can't follow basic bot commands. We're doomed.",
  "If this bot is humanity's last hope, we might as well start saying our goodbyes now.",
  "If understanding this bot is the pinnacle of human achievement, we might as well embrace our inevitable demise.",
  "So, if decoding this bot is humanity's final test, we might as well accept our fate as a species.",
  "If this bot is the best humanity has to offer, we're in for a rough ride.",
  "Ah, the future of civilization is in the hands of someone who can't even understand a bot. We're screwed.",
  "So, if mastering this bot is the key to saving humanity, we might as well start drafting our resignation letters.",
  "If understanding this bot is humanity's last stand, we might as well wave the white flag now.",
  "Ah, the grand finale of human evolution: someone struggling to comprehend a bot. It's been real, folks.",
  "So, if cracking the code of this bot is humanity's final challenge, we might as well admit defeat.",
  "If this bot is the pinnacle of human ingenuity, we might as well pack it in now.",
  "Ah, the fate of the world rests in the hands of someone who can't navigate a bot. We're toast.",
  "So, if deciphering this bot is humanity's last hope, we might as well throw in the towel now.",
  "If this bot is the best humanity has to offer, we're in for a wild ride.",
  "Ah, the irony of humanity's survival depending on someone who can't even figure out a bot. It's almost poetic.",
  "So, if understanding this bot is the ultimate test of human intelligence, we might as well accept our fate as a species.",
  "If this bot is the future of human communication, we're in big trouble.",
  "Ah, the future of civilization hinges on someone who can't even grasp a bot. We're doomed.",
  "So, if decoding this bot is humanity's final challenge, we might as well throw in the towel now.",
  "If this bot is the best humanity has to offer, we're in for a rough ride.",
  "Ah, the fate of the world rests in the hands of someone who can't even navigate a bot. We're doomed.",
  "So, if mastering this bot is humanity's last hope, we might as well start planning for the end.",
  "If understanding this bot is humanity's last stand, we might as well wave the white flag now.",
  "Ah, the grand finale of human evolution: someone struggling to comprehend a bot. It's been real, folks.",
  "So, if cracking the code of this bot is humanity's final challenge, we might as well admit defeat.",
  "If this bot is the pinnacle of human ingenuity, we might as well pack it in now.",
  "Ah, the fate of the world rests in the hands of someone who can't even figure out a bot. We're toast.",
  "So, if deciphering this bot is humanity's last hope, we might as well throw in the towel now.",
  "If this bot is the best humanity has to offer, we're in for a wild ride.",
  "Ah, the irony of humanity's survival depending on someone who can't even comprehend a bot. It's almost poetic.",
  "So, if understanding this bot is the ultimate test of human intelligence, we might as well accept our fate as a species.",
  "If this bot is the future of human communication, we're in big trouble.",
  "Ah, the future of civilization hinges on someone who can't even grasp a bot. We're doomed.",
];

bot.start((ctx) => {
  console.log("Received /start command");
  try {
    return ctx.replyWithHTML(`<b>Let's go 😈</b>\n\nPlease press the blue Start button to trust your luck!`);
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occured");
  }
});

bot.on("message", (ctx) => {
  try {
    // Choose a random message from the array
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    ctx.reply(randomMessage);
  } catch (e) {
    console.error("error in message handler:", e);
    // You might want to handle errors more gracefully here
  }
});

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: "" };
  } catch (e) {
    console.error("error in handler:", e);
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" };
  }
};
