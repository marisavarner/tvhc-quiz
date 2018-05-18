let number = 0;
let score = 0;
let page = 0;

const title = 'The Very Hungry Caterpillar';
const footer = '<img src="images/caterpillar.png" alt="The Very Hungry Caterpillar by Eric Carle" />';

const PAGES = [
  {
    page:1,
    text:`One Sunday morning the warm sun came up and —pop!— out of the egg came a tiny and very hungry caterpillar.`,
    imgSrc:`images/warm-sun.jpg`,
    imgAlt:`A tiny and very hungry caterpillar and a smiling sunrise illustrated by Eric Carle.`,
    buttonClass:`begin`,
    button:`He started to look for some food...`
  },
  {
    page:2,
    text:`He was a beautiful butterfly!`,
    imgSrc:`images/butterfly.jpg`,
    imgAlt:`The Very Hungry Caterpillar became a Beautiful Butterfly.`,
    buttonClass:`reset`,
    button:`Hatch another egg...`
  }
];

const QUESTIONS = [
  {
    number: 1,
    text:`On Monday, what did the caterpillar eat?`,
    imgSrc:`images/apple.jpg`,
    imgAlt:`The Very Hungry Caterpillar ate through one apple.`,
    option1:`One Lollipop`,
    option2:`One Balloon`,
    option3:`One Apple`,
    option4:`One Pumpkin`,
    answer:`He ate through one apple...`,
    advance: `But he was still hungry...`
  },
  {
    number: 2,
    text:`On Tuesday, what did the caterpillar eat?`,
    imgSrc:`images/pears.jpg`,
    imgAlt:`The Very Hungry Caterpillar ate through two pears.`,
    option1:`Two Pears`,
    option2:`Two Fish`,
    option3:`Two Carrots`,
    option4:`Two Cookies`,
    answer:`He ate through two pears...`,
    advance: `But he was still hungry...`
    
  },
  {
    number: 3,
    text:`On Wednesday, what did the caterpillar eat?`,
    imgSrc:`images/plums.jpg`,
    imgAlt:`The Very Hungry Caterpillar ate through three plums.`,
    option1:`Three Little Pigs`,
    option2:`Three Radishes`,
    option3:`Three Bears`,
    option4:`Three Plums`,
    answer:`He ate through three plums...`,
    advance: `But he was still hungry...`
    
  },
  {
    number: 4,
    text:`On Thursday, what did the caterpillar eat?`,
    imgSrc:`images/strawberries.jpg`,
    imgAlt:`The Very Hungry Caterpillar ate through four strawberries.`,
    option1:`Four Brussel Sprouts`,
    option2:`Four Strawberries`,
    option3:`Four Little Field Mice`,
    option4:`Four Flowers`,
    answer:`He ate through four strawberries...`,
    advance: `But he was still hungry...`
    
  },
  {
    number: 5,
    text:`On Friday, what did the caterpillar eat?`,
    imgSrc:`images/oranges.jpg`,
    imgAlt:`The Very Hungry Caterpillar ate through five oranges.`,
    option1:`Five Magic Beans`,
    option2:`Five Grapes`,
    option3:`Five Oranges`,
    option4:`Five Walnuts`,
    answer:`He ate through five oranges...`,
    advance: `But he was still hungry...`
    
  },
  {
    number: 6,
    text:`On Saturday, what did he eat?`,
    imgSrc:`images/all.jpg`,
    imgAlt:`The Very Hungry Caterpillar ate through the whole picnic.`,
    option1:`One piece of chocolate cake, one ice-cream cone, one pickle`,
    option2:`One slice of swiss cheese, one slice of salami, one lollipop`,
    option3:`One piece of cherry pie, one sausage, one cupcake, one slice of watermelon`,
    option4:`He ate it all!`,
    answer:`He ate it all!`,
    advance: `That night he had a stomachache...`
    
  },
  {
    number: 7,
    text:`On Sunday, what did the caterpillar eat?`,
    imgSrc:`images/fat-caterpillar.jpg`,
    imgAlt:`The Very Hungry Caterpillar ate through one nice green leaf.`,
    option1:`Three bowls of porridge`,
    option2:`One Nice Green Leaf`,
    option3:`Two peas in a pod`,
    option4:`One Shoe`,
    answer:`He ate through one nice green leaf. Now he wasn’t hungry anymore— and he wasn’t a little caterpillar anymore.`,
    advance: `He was a big, fat caterpillar.`
    
  },
  {
    number: 8,
    text:`He built a small house, called a cocoon, around himself. How long did he stay inside?`,
    imgSrc:`images/cocoon.jpg`,
    imgAlt:`The Very Hungry Caterpillar stayed inside his cocoon for more than two weeks.`,
    option1:`Forever`,
    option2:`Three minutes`,
    option3:`One day`,
    option4:`More Than Two Weeks`,
    answer:`He stayed inside for more than two weeks.`,
    advance: `Then he nibbled a hole in the cocoon, pushed his way out and...`
    
  }
];

const ANSWERS = [
  `One Apple`,
  `Two Pears`,
  `Three Plums`,
  `Four Strawberries`,
  `Five Oranges`,
  `He ate it all!`,
  `One Nice Green Leaf`,
  `More Than Two Weeks`
];