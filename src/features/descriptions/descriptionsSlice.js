import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "Blue-eyed": {
        description: "Behold the enchanting Blue-eyed Cockatoo! While its feathers may be predominantly white, this charismatic bird boasts a unique feature that sets it apart - a mesmerizing light blue rim of featherless skin encircling each eye, which gives it its name. \n \n The Blue-eyed Cockatoo's striking blue eye patches are truly captivating. They are surrounded by a halo of brilliant blue skin that adds a touch of ethereal beauty to its already stunning appearance. The contrast between the pristine white feathers and the vivid blue eye patches creates a dazzling effect that's sure to turn heads and leave a lasting impression. \n \n ",
        description2: "But it's not just its looks that make the Blue-eyed Cockatoo a fascinating companion. This intelligent and social bird is known for its playful and outgoing personality. It loves to engage with its human companions, showing off its acrobatic skills, playing games, and even learning tricks. Its inquisitive nature and lively antics are bound to keep you entertained and enchanted. \n \n Moreover, the Blue-eyed Cockatoo is also known for its deep emotional connections with its humans. It forms strong bonds and craves affection, often seeking physical contact through cuddling and snuggling. Its gentle and loving nature makes it a devoted companion and a cherished member of the family.",
        img: "./descriptionsPics/blue-eyed.jpg",
        alt: "Blue-eyed Cockatoo",
        font: "./descriptionsPics/blue.png",
        fontAlt: "Feathered font reading 'Blue-eyed'",
    },

    "Cockatiel": {
        description: "Meet Cheddar, the tiny rockstar of the bird world! This pint-sized charmer is a cockatiel with a voice that can rival any famous pop star. With bright orange cheek feathers that earned him the nickname 'Cheddar,' he's as flashy as a disco ball and twice as entertaining. \n \n Despite being the smallest of the cockatoo family, Cheddar is not to be underestimated. He may be little, but he's got a personality as big as a stadium concert. He struts around with confidence, showing off his vibrant plumage and perky crest as if he's the king of the aviary. \n \n And when it comes to singing, Cheddar is a true diva. He hits high notes that can make even the most tone-deaf listener tap their feet in rhythm. His melodies are so catchy that you'll find yourself humming along, unable to resist his avian charms. \n \n ",
        description2: "But Cheddar doesn't just sing solo; he's a master at harmonizing with other birds, creating beautiful duets that are a symphony for the ears. He'll serenade you with his repertoire of tunes, from cheerful chirps to soulful melodies, and keep you entertained for hours. \n \n Cheddar's vocal talents are matched only by his playful nature. He loves to show off his acrobatic skills, performing daring aerial stunts and hanging upside down like a trapeze artist. He's a natural-born entertainer who knows how to steal the show and leave his audience begging for an encore.",
        img: "./descriptionsPics/cockatiel.jpg",
        alt: "Cockatiel",
        font: "./descriptionsPics/cockatiel.png",
        fontAlt: "Feathered font reading 'Cockatiel'",
    },

    "Galah": {
        description: "If you're in need of a good laugh, the Galah cockatoo is here to provide the comic relief! These feathered clowns are natural-born comedians, always ready to pull off a hilarious stunt or crack a joke with their playful antics. \n \n Galah cockatoos have an uncanny ability to find humor in everyday situations, and they're not afraid to show it. They might surprise you with a sudden burst of acrobatics, tumbling and rolling in the air like a circus performer, or they might break into a goofy dance routine that's guaranteed to make you chuckle. They're masters of physical comedy, using their crest, wings, and beak to express their humorous personality. \n \n But it's not just their physical comedy that's funny - Galah cockatoos also have a mischievous sense of humor. They love to play pranks and tease their human companions, whether it's stealing a sock, hiding a toy, or simply finding creative ways to get a reaction. Their playful and cheeky nature will keep you on your toes and bring a smile to your face every time. \n \n ",
        description2: "And let's not forget their repertoire of hilarious vocalizations! While they may not be the loudest cockatoo species, Galahs make up for it with their quirky and comical vocal expressions. They can mimic a wide range of sounds, from laughter to car alarms, and even imitate human speech in their own unique way. You'll often find yourself giggling at their silly vocal antics and wondering just what they'll come up with next. \n \n In conclusion, the Galah cockatoo is not just a party animal and a quiet companion, but also a natural-born comedian. With their physical comedy, mischievous pranks, and quirky vocalizations, they'll keep you entertained with their endless antics and contagious laughter. They're the feathered jester that will brighten up your day and fill your life with laughter and joy! Get ready for a barrel of laughs with the Galah cockatoo as your feathered funny bone!",
        img: "./descriptionsPics/galah.jpg",
        alt: "Galah Cockatoo",
        font: "./descriptionsPics/galah.png",
        fontAlt: "Feathered font reading 'Galah'",
    },

    "Gang-gang": {
        description: "Picture this - a bird that's not only funny and quiet, but also has a distinctive call that's bound to make you reach for a corkscrew! Meet the Gang-gang cockatoo, the avian jokester with a cork-tastic sense of humor. \n \n One of the most unique features of the Gang-gang cockatoo is its call, which has been likened to the sound of a cork being twisted from a wine bottle. It's a quirky and unmistakable vocalization that's sure to catch your attention and leave you chuckling in amazement. Imagine having a bird in your home that can recreate the sound of a celebratory bottle of bubbly being opened - talk about a party starter! \n \n ",
        description2: "But it's not just its cork-tastic call that makes the Gang-gang cockatoo a funny companion. This bird is known for its playful and mischievous nature, always coming up with new tricks and antics to keep you entertained. From playful games of peek-a-boo, to clever puzzles and toys that it can solve with ease, this bird is a natural-born comedian that will have you in stitches with its clever and witty behavior. \n \n Despite its humorous side, the Gang-gang cockatoo is also known for its calm and quiet demeanor. It's a bird that prefers to communicate with subtle body language and gentle vocalizations, rather than loud squawks or screeches. This unique combination of a funny and quiet personality makes the Gang-gang cockatoo a truly special and intriguing bird.",
        img: "./descriptionsPics/gang-gang.jpg",
        alt: "Gang-gang Cockatoo",
        font: "./descriptionsPics/gang.png",
        fontAlt: "Feathered font reading 'Gang-gang'",
    },

    "Major Mitchell": {
        description: "Ladies and gentlemen, meet the supermodel of the bird world - the Major Mitchell Cockatoo! This flamboyant and fabulous bird is like a feathery explosion of color and personality. \n \n With their stunning plumage resembling a work of art, the Major Mitchell Cockatoo is a vision in pink and white. Picture this: a crest of soft, cotton-candy pink feathers atop their head, framing their inquisitive face with bright, round eyes that seem to twinkle with mischief. Their body is adorned with a luscious coat of snow-white feathers, accentuated by blush-pink hues on their cheeks and a touch of lemon-yellow on their underwings. Their long, luxurious tail feathers fan out like a regal train, making them look like they're ready to strut down the red carpet! \n \n But it's not just their looks that make them the life of the party - their personality is equally awe-inspiring! Major Mitchell Cockatoos are known for their playful and outgoing nature. They love to dance, bobbing their head and tapping their feet to their own unique rhythm. They are natural-born comedians, with a repertoire of silly antics that will have you in stitches. They are also incredibly intelligent and curious, always eager to explore and learn new things. \n \n ",
        description2: "When it comes to socializing, Major Mitchell Cockatoos are the ultimate extroverts. They thrive on attention and will eagerly seek out human interaction. They are known to be affectionate and loving, forming strong bonds with their human companions. They are also natural-born chatterboxes, with a wide range of vocalizations that can range from sweet chirps and whistles to loud, boisterous calls that can wake up the entire neighborhood! \n \n In summary, the Major Mitchell Cockatoo is a true showstopper - a flamboyant, playful, and affectionate bird that will steal the limelight wherever they go. If you're lucky enough to be in the presence of one, prepare for a feathery fiesta that will leave you smiling from ear to ear! Long live the party-loving, feathered superstar - the Major Mitchell Cockatoo!",
        img: "./descriptionsPics/major-mitchell.jpg",
        alt: "Major Mitchell's Cockatoo",
        font: "./descriptionsPics/major.png",
        fontAlt: "Feathered font reading 'Major Mitchell'",
    },

    "Palm": {
        description: "Introducing the rockstar of the bird world, the Palm Cockatoo! With its striking appearance, unique personality, and impressive size, this avian dynamo is sure to steal the show wherever it goes. \n \n Imagine a bird with the swagger of Mick Jagger and the charisma of Freddie Mercury, and you've got the Palm Cockatoo! Its jet-black feathers are adorned with touches of fiery red, making it a true feathered fashionista. But it's the iconic crest that steals the limelight - a regal mohawk that can be raised and lowered at will, giving the Palm Cockatoo an air of confidence and flair. \n \n As the largest of all the cockatoos, the Palm Cockatoo is a true titan of the skies. Its majestic wingspan and commanding presence make it a force to be reckoned with, and its regal beauty is simply awe-inspiring. But it's not just about looks - this bird is a born performer and  it's got talent to match! \n \n ",
        description2: "Known for its exceptional drumming skills, the Palm Cockatoo is a rhythm master. Using specially crafted sticks or even its own beak, it creates a cacophony of beats on hollow trees, making it the ultimate percussionist of the rainforest. Move over, Ringo Starr - the Palm Cockatoo is in town! \n \n But that's not all - the Palm Cockatoo is also known for its charismatic personality. Just like Mick Jagger, this bird has a confident and social demeanor that's hard to resist. Its playful antics and mischievous nature will keep you entertained for hours, and its intelligence and problem-solving skills are truly impressive.",
        img: "./descriptionsPics/palm.jpg",
        alt: "Palm Cockatoo",
        font: "./descriptionsPics/palm.png",
        fontAlt: "Feathered font reading 'Palm'",
    },

    "Red-Tailed Black": {
        description: "Behold, the regal and flamboyant avian monarch of the skies - the red-tailed black cockatoo! With its ebony feathers that glisten like obsidian under the sun's warm embrace, this majestic creature is a true masterpiece of nature's artistic palette. But what truly sets it apart is its audacious, fiery red tail feathers that blaze like a fiery sunset, leaving all who witness its splendor in awe. \n \n As it takes to the air, the red-tailed black cockatoo displays a remarkable show of grace and power. Its enormous wingspan, adorned with feathers that seem to defy gravity with their sheer length and elegance, allows it to glide through the sky with unparalleled majesty. Its flight is a graceful ballet, as it swoops and soars, its striking red tail feathers trailing behind like a bold exclamation mark, demanding attention from all who lay eyes upon it. \n \n The red-tailed black cockatoo's beady eyes are as sharp as its sense of style. With a playful glint in its eye, it surveys its surroundings with curiosity and intelligence. Its iconic black beak, as sharp as a razor's edge, is a tool of both beauty and brawn. It uses it to crack open nuts and seeds with finesse, while also showcasing its formidable strength as it perches on a sturdy branch, surveying its kingdom with an air of regality. \n \n ",
        description2: "But it's not just its physical attributes that make the red-tailed black cockatoo a true showstopper. Its raucous and distinctive call is a symphony of nature's most vibrant notes, resonating through the air with its unique, soul-stirring melody. Its voice is a joyful proclamation, announcing its presence to the world and leaving an indelible impression on all who are fortunate enough to hear it. \n \n The red-tailed black cockatoo is a true luminary of the avian world, a living work of art that captivates with its boldness, elegance, and sheer charisma. It's a bird that exudes confidence and magnetism, an embodiment of nature's awe-inspiring beauty. Whether perched on a branch, soaring through the sky, or serenading the world with its enchanting voice, the red-tailed black cockatoo is a mesmerizing spectacle that leaves an indelible mark on the hearts and minds of all who encounter its awe-inspiring presence. Long live the majestic monarch of the skies - the red-tailed black cockatoo!",
        img: "./descriptionsPics/red-tailed.jpg",
        alt: "Red-tailed Black Cockatoo",
        font: "./descriptionsPics/red.png",
        fontAlt: "Feathered font reading 'Red-tailed Black'",
    },

    "Sulphur-crested": {
        description: "The sulphur-crested cockatoo is a majestic bird that captivates with its stunning appearance and charismatic personality. With its striking plumage and bold demeanor, this large parrot is truly a sight to behold. \n \n The sulphur-crested cockatoo boasts a regal crest of vibrant lemon-yellow feathers that adorn its head, giving it a distinctive and eye-catching appearance. The rest of its plumage is predominantly white, which provides a striking contrast to its bright crest. Its large, dark eyes are full of intelligence and curiosity, and its powerful beak is hooked and formidable, perfect for cracking open nuts and seeds. \n \n But it's not just its appearance that makes the sulphur-crested cockatoo unique; it's also known for its captivating personality. Highly social and intelligent, this bird is known to be a great mimic, capable of imitating a wide range of sounds, from human speech to other bird calls. Its playful and outgoing nature often makes it the life of the party, as it entertains with its dances, vocalizations, and curious antics. \n \n The sulphur-crested cockatoo is also known for its strong bond with its family or flock. It's a highly social bird that forms lifelong partnerships with its mate, and it's not uncommon to see them engaging in affectionate behaviors, such as preening each other's feathers or nuzzling. Additionally, they are known for their strong sense of loyalty and protectiveness towards their young, making them nurturing and devoted parents. \n \n ",
        description2: "In the wild, the sulphur-crested cockatoo is native to Australia and can be found in a variety of habitats, including rainforests, woodlands, and savannas. They are known for their loud and distinctive calls, which can be heard from quite a distance, adding to their unique charm. \n \n Overall, the sulphur-crested cockatoo is a captivating bird with its striking appearance, playful personality, and strong social bonds. Its vibrant plumage, intelligent eyes, and charismatic presence make it a true icon of the avian world, a bird that is sure to leave a lasting impression on anyone fortunate enough to encounter it.",
        img: "./descriptionsPics/sulphur-crested.jpg",
        alt: "Sulphur-crested Cockatoo",
        font: "./descriptionsPics/sulphur.png",
        fontAlt: "Feathered font reading 'Sulphur-crested'",
    },

    "Umbrella": {
        description: "Introducing the charismatic and awe-inspiring umbrella cockatoo - the ultimate showstopper of the bird world! With its striking appearance and unparalleled acrobatics, this feathery performer is bound to steal the spotlight in any room. \n \n Watch in wonder as the umbrella cockatoo effortlessly displays its acrobatic prowess. With feathers as white as freshly fallen snow and a majestic crest that can be raised and lowered at will, this avian acrobat is a sight to behold. Its flexible wings allow it to perform daring aerial displays, swooping and gliding with unparalleled grace. From daring flips to acrobatic spins, this bird is a true gymnast of the skies! \n \n ",
        description2: "But that's not all - the umbrella cockatoo has a unique palate that sets it apart from its feathered counterparts. While other cockatoos might prefer seeds or fruits, the umbrella cockatoo is known for its adventurous taste buds. In fact, it's the only cockatoo species known to have a penchant for lizards! Yes, you heard it right - this daring daredevil of the bird world isn't afraid to chomp down on a crunchy lizard snack. Talk about a unique and unexpected dietary choice! \n \n Beyond its acrobatics and daring culinary preferences, the umbrella cockatoo also has a personality as vibrant as its plumage. Highly intelligent and curious, this bird is known for its playful antics and mischievous charm. It loves to interact with its human companions, showing off its tricks and showering them with affection. Be prepared for endless entertainment as this feathered companion steals your heart with its witty antics and heartwarming gestures.",
        img: "./descriptionsPics/umbrella.jpg",
        alt: "Umbrella Cockatoo",
        font: "./descriptionsPics/umbrella.png",
        fontAlt: "Feathered font reading 'Umbrella'",
    },

    "Yellow-tailed Black": {
        description: "Behold, the majestic and flamboyant Yellow-tailed Black Cockatoo! With its striking ebony feathers, golden-yellow tail, and bold attitude, this avian celebrity is a true head-turner of the bird world. \n \n Picture this: a grand entrance worthy of a red carpet event. The Yellow-tailed Black Cockatoo swoops in, displaying its impressive wingspan that seems to demand attention. Its ebony plumage gleams in the sunlight, accentuated by the contrasting yellow tail feathers that trail behind like a regal train. The bright yellow patch on its cheek is like a burst of sunshine on a stormy day, adding a touch of sass to its already confident demeanor. \n \n But it's not just about the looks with this bird. The Yellow-tailed Black Cockatoo is a natural performer, exuding charisma and charm. It's known for its vocal prowess, belting out a variety of calls that range from deep, resonant booms to playful squawks. Its distinctive voice is like a rockstar hitting the high notes, commanding attention wherever it goes. \n \n ",
        description2: "And talk about attitude! The Yellow-tailed Black Cockatoo is not one to shy away from the limelight. It fearlessly takes charge of its surroundings, confidently perching atop tree branches or power lines, surveying the world below with a knowing glance. Its charismatic presence is a showstopper, leaving onlookers in awe of its regal poise and captivating allure. \n \n But don't be fooled by its confident exterior. The Yellow-tailed Black Cockatoo also has a mischievous side, known for its playful antics and acrobatics. It's not uncommon to see it engaging in daring maneuvers like hanging upside-down, dangling from a branch, or performing daring flips in mid-air, showing off its acrobatic prowess with a devil-may-care attitude.",
        img: "./descriptionsPics/yellow-tailed.jpg",
        alt: "Yellow-tailed Black Cockatoo",
        font: "./descriptionsPics/yellow.png",
        fontAlt: "Feathered font reading 'Yellow-tailed Black'",
    },
};

export const descriptionsSlice = createSlice({
    name: 'descriptions',
    initialState,
    reducers: {},
});

export const selectDescriptions = (state) => state.descriptions;
export const selectTypes = (state) => Object.keys(state.descriptions);

export default descriptionsSlice.reducer;
