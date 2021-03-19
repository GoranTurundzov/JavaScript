function chinesezodiac() {
    var yearBorn = parseInt(document.querySelector("#yearBorn").value);
    var result = (yearBorn - 4) % 12;
    if (result == 0){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Rat <br/> An interesting Chinese legend about the ranking of the Rat goes that the Chinese supreme deity Jade Emperor held a birthday party and would decide the order of the zodiac animals according to their arrival times. Originally, the hardworking Ox departed early and should be the first one to reach. However, the Rat hid in the Ox’s ear and jumped down when arriving, occupying the first place. Thus the Rat had since been the No. 1 in the 12-year cycle and represents spirit, wit, alertness, delicacy, and flexibility. <br/> What’s more, the vitality of the Rat including the high fertility and high survival rate also makes it a lucky sign for couples hoping to conceive."
    }
    else if (result == 1){
        document.querySelector("#zodiacInfo").innerHTML = result + ".OX <br/>Oxen used to be capable farming tools in an agricultural society, which attach to the symbol of diligence, persistence, and honesty. In Chinese culture, Ox is a faithful friend that made great contributions to the development of the society. Like the ox, people born in the Year of the Ox are industrious, cautious, hold their faith firmly, and always glad to offer help. <br/>It is said that Ox ranks the second among the Chinese zodiacs because it helped the Rat but was later tricked by it. The myth goes that the Jade Emperor declared the order of zodiac signs would be based on the arrival orders of 12 animals. Ox could have arrived the first but it kindly gave a ride to Rat. However, when arriving, Rat just jumped to the terminus ahead of Ox, and thus Ox lost the first place";
    }
    else if (result == 2){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Tiger <br/>igers, considered to be brave, cruel, forceful, and terrifying, are the symbol of power and lordliness in Chinese culture. In ancient times, people usually compared emperors or kings with the tigers. Tigers are also considered as a patron deity for children and parents will prepare the shoes and hats with tiger designs for their babies. <br/>The Chinese zodiac Tiger sign entitles people born in the Years of the Tiger to be natural leaders. They are adventurous, ambitious and have a strong sense of justice, but maybe also a little arrogant and impetuous.";
    }
    else if (result == 3){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Rabbit <br/> For Chinese people, the rabbit is a tame creature representing hope and life for a long time. It is tender and lovely. The moon goddess Chang'e in the Chinese legend has a rabbit as her pet, which stimulates the thought that only this creature is amiable enough to match her noble beauty. Another way of saying is that the Rabbit is the incarnation of the moon goddess per se and it is always a symbol of pureness and auspiciousness. <br/> People born in the Year of the Rabbit are gentle and approachable. They have a decent, noble and elegant manner.";
    }
    else if (result == 4){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Draggon <br/>Chinese Dragon is de facto an imaginary animal, also the only fictitious creature in the 12 zodiac animals, which is composed of 9 animals, including the body of a snake, the horns of a deer, the head of an ox, the mouth of a crocodile, the claws of an eagle, and the scales of a fish. The Dragon enjoys a very high reputation in Chinese culture and it represents auspiciousness and imperial power since ancient times.<br/>Chinese people regard themselves as descendants of the Chinese dragon and emperors entitled themselves exclusively as the 'dragon'. It is the token of authority, dignity, honor, success, luck, and capacity";
    }
    else if (result == 5){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Snake <br/>Snake carries the meanings of malevolence, cattiness, mystery, as well as acumen and divination. In most cases, this animal is considered evil and the elongated legless body always scares people. However, in ancient Chinese traditions, the snake once presented a venerated image and it is one of the earliest totems of Chinese nations. Chinese mother goddess Nüwa who said to have created humanity has the body of a snake and the head of a human. The Chinese dragon also has a snake body. Today, in some places in China, people still believe that a snake found in their courtyard can bring good luck. <br/> People born in the Year of the Snake are considered rational, calm, thoughtful, and loyal to the loved ones.";
    }
    else if (result == 6){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Horse <br/>The horse was the most frequent transport means in ancient society and it is considered as No. 1 of the most important 6 animals in China. They are strong, powerful and elegant animals. In Chinese culture, horses are always the representative of heroes and talents. People born in the Year of the Horse will share some similarities with the horse and thus they are brave, strong, talented, and independent. The Five Elements of Horse is Fire (Huo), symbolizing enthusiasm and energy, which entitles the Horse people energetic and enthusiastic character.";
    }
    else if (result == 7){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Goat <br/> Sheep (Goat or Ram) is among the animals that people like most. It is docile, mellow, and Timid. The white cure creature sheep is considered auspicious since long time ago and it was often used to offer sacrifices and pray for good fortune. It was also once served as currency in ancient times, and this the sheep represents rich and lucky <br/>People born in the Year of the Sheep are gentle, calm, and decent, while sometimes they can be naive and emotional.";
    }
    else if (result == 8){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Monkey <br/>The monkey is a clever, lively, and witty animal. Because of a lot of similarities to humans, the monkey is admired by people in many cultures and Chinese culture is no exception. In traditional Chinese culture, monkey has been considered a mascot to pray for the luck of official career as it pronounces the same with the Chinese character for “marquis (hou)” in ancient times. In some west areas of China, monkey is also believed to be able to protect little babies from evil spirits. <br/>The most famous monkey in China is the Monkey King (Sun Wukong) born from a stone who is intelligent, brave, rebellious, and talented. Some similar personalities may present in people born in the Year of the Monkey, who tend to be lively, quick witted, righteous, brave, and humorous.";
    }
    else if (result == 9){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Rooster <br/>Rooster is almost the epitome of fidelity and punctuality. For ancestors who had no alarm clocks, the crowing was significant, as it could awaken people to get up and start to work. In Chinese culture, another symbolic meaning of chicken carries is exorcising evil spirits.";
    }
    else if (result == 10){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Dog <br/>Dog is men's good friend who can understand the human spirit and obey its master, whether he is wealthy or not. Chinese people regard it as an auspicious animal. If a dog happens to come to a house, it symbolizes the coming of fortune. In Chinese legend, the invincible God Erlang has a loyal dog partner to help him capture monsters.";
    }
    else if (result == 11){
        document.querySelector("#zodiacInfo").innerHTML = result + ".Pig <br/>As the last sign of the Chinese zodiac, Pig represents wealth and luck from the ancient times. It is docile, has no plan to harm others, and can bring affluence to people. And its chubby faces and large ears also win the affection of people. However, pig sometimes is not thought to be a smart animal in China as it likes sleeping and eating and becomes fat, and thus it also features laziness and clumsiness.";
    }
    else {
        
        !alert('Please enter Year in Number Format');
         window.location.reload();
    }  
        
    
}