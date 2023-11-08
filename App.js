// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 

  const [dish, newdish] = useState({

    name: "ONE POT CREAMY CAJUN CHICKEN PASTA ",
    ima: 'https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-V1.jpg',
    z: "INGREDIENTS",
    a: " Cajun Seasoning - 2 tsp smoked paprika ($0.20)",
    b: "1 tsp oregano ($0.10)",
    c: " 1 tsp thyme ($0.10)",
    d: "1/2 tsp garlic powder ($0.05)",
    e: "1/2 tsp onion powder ($0.05)",
    f: "1/4 tsp cayenne pepper ($0.03)",
    g: "1/4 tsp black pepper ($0.02)",
    h: " 1/4 tsp salt ($0.02)",
    i: "Chicken Pasta- 1 Tbsp olive oil ($0.16)",
    j: "1 Tbsp butter ($0.13)",
    k: "1 lb. boneless, skinless chicken breast ($5.47)",
    l: "1 yellow onion, diced ($0.32)",
    m: " 1/2 lb. penne pasta (uncooked) ($0.75)",
    n: "15 oz. fire roasted diced tomatoes ($1.00)",
    o: "2 cups chicken broth ($0.26)",
    p: "2 oz. cream cheese ($0.50)",
    q: " 3 green onions, sliced ($0.25)",
    s: "Combine the ingredients for the Cajun seasoning in a small bowl. Cut the chicken into 1/2 to 3/4-inch cubes. Place the cubed chicken in a bowl, pour the Cajun seasoning over top, and stir to coat the chicken in spices.2)Add the olive oil and butter to a large deep skillet.",
    t: "Heat the oil and butter over medium-high until the skillet is very hot and the butter is melted and foamy. Add the seasoned chicken to the skillet and cook for a couple minutes on each side, or just until the outside gets some color.  The chicken does not need to be cooked through at this point.",
    u: " Add the diced yellow onion to the skillet and continue to sauté for about 2 minutes more, or just until the onion begins to soften. Allow the moisture from the onion to dissolve any browned bits from the bottom of the skillet.Next, add the pasta, fire roasted diced tomatoes (with the juices), and chicken broth to the skillet. Stir just until everything is evenly combined, then place a lid on top and allow the broth to come up to a boil.",
    v: "Once boiling, turn the heat down to medium-low and let the pasta simmer for about ten minutes, stirring every couple of minutes, until the pasta is tender and the liquid is thick and saucy.Add the cream cheese to the skillet in chunks, then stir until it has melted into the sauce. Top the pasta with sliced green onions and serve",
    w: "Calories: 482.65kcal",
    A: "Carbohydrates: 51.53g",
    B: "Protein: 34.95g",
    C: " Fat: 14.58g",
    D: "Sodium: 847.23mg",
    E: "Fiber: 3.45g"
});

// const Pasta = () => {
function Pasta() {
    newdish({
        name: "ONE POT CREAMY CAJUN CHICKEN PASTA ",
        ima: 'https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-V1.jpg',
        z: "INGREDIENTS",
        a: " Cajun Seasoning - 2 tsp smoked paprika ($0.20)",
        b: "1 tsp oregano ($0.10)",
        c: " 1 tsp thyme ($0.10)",
        d: "1/2 tsp garlic powder ($0.05)",
        e: "1/2 tsp onion powder ($0.05)",
        f: "1/4 tsp cayenne pepper ($0.03)",
        g: "1/4 tsp black pepper ($0.02)",
        h: " 1/4 tsp salt ($0.02)",
        i: "Chicken Pasta- 1 Tbsp olive oil ($0.16)",
        j: "1 Tbsp butter ($0.13)",
        k: "1 lb. boneless, skinless chicken breast ($5.47)",
        l: "1 yellow onion, diced ($0.32)",
        m: " 1/2 lb. penne pasta (uncooked) ($0.75)",
        n: "15 oz. fire roasted diced tomatoes ($1.00)",
        o: "2 cups chicken broth ($0.26)",
        p: "2 oz. cream cheese ($0.50)",
        q: " 3 green onions, sliced ($0.25)",
        s: "Combine the ingredients for the Cajun seasoning in a small bowl. Cut the chicken into 1/2 to 3/4-inch cubes. Place the cubed chicken in a bowl, pour the Cajun seasoning over top, and stir to coat the chicken in spices.2)Add the olive oil and butter to a large deep skillet.",
        t: "Heat the oil and butter over medium-high until the skillet is very hot and the butter is melted and foamy. Add the seasoned chicken to the skillet and cook for a couple minutes on each side, or just until the outside gets some color.  The chicken does not need to be cooked through at this point.",
        u: " Add the diced yellow onion to the skillet and continue to sauté for about 2 minutes more, or just until the onion begins to soften. Allow the moisture from the onion to dissolve any browned bits from the bottom of the skillet.Next, add the pasta, fire roasted diced tomatoes (with the juices), and chicken broth to the skillet. Stir just until everything is evenly combined, then place a lid on top and allow the broth to come up to a boil.",
        v: "Once boiling, turn the heat down to medium-low and let the pasta simmer for about ten minutes, stirring every couple of minutes, until the pasta is tender and the liquid is thick and saucy.Add the cream cheese to the skillet in chunks, then stir until it has melted into the sauce. Top the pasta with sliced green onions and serve",
        w: "Calories: 482.65kcal",
        A: "Carbohydrates: 51.53g",
        B: "Protein: 34.95g",
        C: " Fat: 14.58g",
        D: "Sodium: 847.23mg",
        E: "Fiber: 3.45g",
    });
}

function BakedChiken() {
    newdish({
        name: "BAKED CHICKEN DRUMSTICKS",
        ima: 'https://www.budgetbytes.com/wp-content/uploads/2021/08/Baked-Chicken-Drumsticks-tongs-500x375.jpg',
        z: "INGREDIENTS",
        a: "1 tsp smoked paprika ($0.10)",
        b: " 1/2 tsp garlic powder ($0.05)",
        c: " 1/4 tsp onion powder ($0.03)",
        d: "1/8 tsp cayenne pepper ($0.02)",
        e: "1/4 tsp dried oregano ($0.03)",
        f: " 1/2 tsp salt ($0.02)",
        g: "1/4 tsp freshly cracked black pepper ($0.02)",
        h: "1.75 lbs. chicken drumsticks (6 pieces) ($3.42)",
        i: "2 Tbsp cooking oil* ($0.32) ",
        s: "Preheat the oven to 425ºF. Combine the smoked paprika, garlic powder, onion powder, cayenne pepper, oregano, salt, and pepper in a bowl.Place the chicken drumsticks in a bowl and drizzle the cooking oil over top. ",
        t: "Sprinkle the prepared seasoning over the drumsticks, then toss until they're evenly coated in oil and spices.",
        u: " Place the seasoned drumsticks on a baking sheet with enough space around each so they're not touching. ",
        v: "You can line the baking sheet with foil or parchment for easier cleanup, if desired.Transfer the chicken to the oven and bake for 40 minutes, or until they reach an internal temperature of 175ºF, flipping the drumsticks once half-way through. Serve hot.",
        w: "Calories: 254kcal",
        A: "Carbohydrates: 1g",
        B: "Protein: 23g",
        C: "Fat: 17g",
        D: "Sodium: 332mg",
        E: "Fiber: 1g"
    });
};

// const Biryani = () => {
function Biryani() {
    newdish({
        name: "ONE POT CHICKEN AND RICE",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2022/05/Chicken-and-Rice-V1-800x1067.jpg",
        z: "INGREDIENTS",
        a: "2 tsp paprika ($0.20) ",
        b: "1 tsp dried oregano ($0.10)",
        c: "1 tsp dried thyme ($0.10)",
        d: "1/2 tsp garlic powder ($0.05)",
        e: "1/2 tsp onion powder ($0.05)",
        f: "1/4 tsp salt ($0.02) ",
        g: "1/4 tsp pepper ($0.02)",
        h: "1.25 lbs. boneless, skinless chicken thighs (4-5 thighs) ($4.23)",
        i: "2 Tbsp cooking oil, divided ($0.08)",
        j: "1 yellow onion, diced ($0.32)",
        k: "1 cup long-grain white rice (uncooked) ($0.32)",
        l: " 1.75 cups vegetable broth ($0.23)",
        m: " 1 Tbsp chopped parsley (optional garnish) ($0.10)",
        s: "Combine the paprika, oregano, thyme, garlic powder, onion powder, salt, and pepper in a small bowl. Coat both sides of the chicken thighs in the seasoning mix.Add 1 Tbsp cooking oil to a deep skillet and heat over medium. Once hot, swirl to coat the surface of the skillet, then add the chicken thighs.",
        t: "Cook the thighs for a few minutes on each side, or until well browned. The chicken does not need to be cooked through at this point.Remove the browned chicken to a clean plate. Reduce the heat to medium-low, add an additional 1 Tbsp cooking oil to the skillet, then add the diced onion. Sauté the onion for about 5 minutes, or until softened.",
        u: " Allow the moisture from the onion to dissolve the browned bits from the skillet as you stir.Add the uncooked rice to the skillet and continue to sauté for 1-2 minutes more to toast the rice. Add the vegetable broth to the skillet and briefly stir to dissolve any remaining brown bits from the bottom of the skillet. Return the chicken to the skillet, setting it on top of the rice. ",
        v: "Place a lid on the skillet, turn the heat up to medium-high, and allow the broth to come up to a full boil Once boiling, turn the heat down to low and let the chicken and rice continue to simmer over low, without lifting the lid or stirring, for 20 minutes. After 20 minutes, turn off the heat and let it rest, without lifting the lid, for an additional 5 minutes.Finally, remove the lid and fluff the rice around the chicken. Garnish with chopped parsley, if desired, then serve and enjoy!",
        w: " Calories: 421kcal",
        A: "Carbohydrates: 42g",
        B: "Protein: 31g",
        C: "Fat: 13g",
        D: "Sodium: 688mg",
        E: "Fiber: 2g"
    });
};

// const wings = () => {
function wings() {
    newdish({
        name: "STICKY GINGER CHICKEN WINGS",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2010/08/Sticky-Ginger-Chicken-Wings-V1-800x1067.jpg ",
        z: "INGREDIENTS",
        a: "2 lbs. chicken wings or drummettes (6.58)",
        b: "1 Tbsp cooking oil ($0.04)",
        c: "1/4 cup honey ($0.66)",
        d: "2 Tbsp soy sauce ($0.12)",
        e: "1 Tbsp chili garlic sauce ($0.13)",
        f: "1 Tbsp toasted sesame oil ($0.24)",
        g: "1 Tbsp rice vinegar ($0.13)",
        h: "2 cloves garlic, minced ($0.16)",
        i: "1 Tbsp grated fresh ginger ($0.30)",
        j: "2 green onions, sliced ($0.20)",
        k: " 1 tsp smoked",
        s: "Preheat the oven to 400ºF. Place the chicken wings in a glass or ceramic baking dish so that they're in a single layer. Drizzle the cooking oil over top, then toss the wings to coat in the oil. Transfer the wings to the oven and bake for 15 minutes.",
        t: " While the wings are baking, prepare the sticky ginger sauce. Combine the honey, soy sauce, chili garlic sauce, toasted sesame oil, rice vinegar, minced garlic, and grated ginger in a bowl.",
        u: " After the wings have baked for 15 minutes, pour the sauce over the wings, then toss to coat.  Return the wings to the oven and bake for an additional 45 minutes, stirring every 15 minutes, or until the sauce has reduced into a sticky glaze and deepened in color. ",
        v: "Baking time may vary slightly, so keep an eye on the sauce toward the end of the baking time.Top with sliced green onions and serve!",
        w: "Calories: 1129.25kcal",
        A: " Carbohydrates: 38.05g",
        B: " Protein: 81.95g",
        C: " Fat: 72.05g ",
        D: "Sodium: 1409.5mg",
        E: "Fiber: 0.75g "
    });
};

// const pollo = () => {
function pollo() {
    newdish({
        name: "PINCHOS DE POLLO",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2023/08/Pinchos-overhead-500x375.jpg",
        z: "INGREDIENTS",
        a: "3 lbs boneless and skinless chicken thighs, about 5 to 6 ($5.97)",
        b: "2 tsp adobo* ($0.10)",
        c: "1 1/2 tsp sazón** ($0.19)",
        d: "2 tsp salt ($0.16)",
        e: " 2 Tbsp cooking oil, plus a touch more for greasing ($0.09)",
        f: "1 cup BBQ Sauce ($1.16)",
        s: "Pat chicken thighs dry with a paper towel. Then chop the chicken into bite-size pieces (about 5 to 6 pieces per thigh).Add the adobo, sazón, and salt to a large bowl and mix.  Add the chopped chicken thighs to the bowl along with the cooking oil and mix until the chicken is thoroughly covered. Cover with plastic wrap or parchment directly on the surface of the chicken and marinate for at least an hour, but preferably overnight.",
        t: "Half an hour before you pull the chicken, soak at least 6 wood skewers in water so they don't burn. It's best to soak a few extra skewers just in case one of them breaks. When you're ready to cook, preheat a grill pan on high. Then thread a thigh's worth of chicken pieces on each skewer, about 5 or 6 chunks. You want the chicken chunks close but not pressed tightly against each other. Brush both sides of each skewer with BBQ sauce, about 1/2 cup total.",
        u: " When the grill pan is smoking hot, brush it with a touch of cooking oil. Then, place the skewers on the grill pan, making sure not to crowd the pan or place the skewers too close to each other. After 5 minutes, brush 1/4 cup of BBQ sauce on the top surface of the chicken. Next, flip the chicken, and brush another 1/4 cup of BBQ sauce on the top layer.",
        v: "  Cook for 5 more minutes, until char develops and the internal temperature of the chicken registers at 160°F. Now all you have left to do is eat! Buen provecho!",
        w: "Calories: 623kcal",
        A: " Carbohydrates: 21g",
        B: "Protein: 37g ",
        C: " Fat: 43g ",
        D: " Sodium: 1531mg ",
        E: " Fiber: 1g",
    });
};

// const pizza = () => {
function pizza() {
    newdish({
        name: "BBQ CHICKEN PIZZA",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-V2.jpg ",
        z: "INGREDIENTS",
        a: "Quick BBQ Chicken* 1 boneless, skinless chicken breast (about ⅔ lb.)",
        b: "($3.22) ½ tsp smoked paprika ($0.05)",
        c: "¼ tsp garlic powder ($0.02) ",
        d: "⅛ tsp salt ($0.02) ⅛ tsp pepper ($0.02) ",
        e: "½ Tbsp cooking oil ($0.04)",
        f: "¼ cup BBQ sauce ($0.11) ",
        g: "Pizza -1 prepared pizza dough ($0.62)",
        h: "½ cup BBQ sauce ($0.22)",
        i: "4 oz. Monterey jack cheese, shredded ($0.85)",
        j: "1 jalapeño (optional), sliced ($0.15)",
        k: "¼ cup sliced red onion ($0.11)",
        s: "In a small bowl, combine the smoked paprika, garlic powder, salt, and pepper. Season both sides of the chicken breast with the spices. Heat a skillet over medium. Add the cooking oil and swirl to coat the surface of the skillet.",
        t: "Add the seasoned chicken breast and cook for about 5-7 minutes on each side, or until cooked through (internal temperature of 165ºF).Transfer the chicken to a clean cutting board. Let the chicken rest for about 5 minutes, then chop into small pieces.",
        u: " Add ¼ cup BBQ sauce to the chopped chicken, and stir to coat the chicken in the sauce.Preheat the oven to 450ºF.  Place the prepared pizza dough or crust on a pizza pan, then spread about ½ cup BBQ sauce over the surface. Add the cheese",
        v: " BBQ chicken, sliced jalapeños, and sliced onion to the pizza.Bake the pizza for 10-12 minutes, or until the crust and cheese are golden brown. Slice into 8 pieces and serve.",
        w: "Calories: 532.88kcal",
        A: "Carbohydrates: 54.03g ",
        B: " Protein: 30.83g",
        C: " Fat: 20g",
        D: "Sodium: 2640.13mg",
        E: "Fiber: 2.28g"
    });
};

// const sandwich = () => 
function sandwich() {
    newdish({
        name: "EASY BBQ CHICKEN SANDWICHES",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2020/07/Easy-BBQ-Chicken-Sandwiches-two-V2.jpg ",
        z: "INGREDIENTS",
        a: "1 tsp smoked paprika ($0.10)",
        b: "1/2 tsp garlic powder ($0.05) ",
        c: "  1/4 tsp salt ($0.02) ",
        d: "  1/4 tsp pepper ($0.02)",
        e: " 1 lb. boneless, skinless chicken thighs ($2.99)",
        f: "1 Tbsp cooking oil ($0.04)",
        g: "1/4 cup BBQ sauce ($0.11) ",
        h: "7 oz. coleslaw mix* ($0.65) ",
        i: "2 green onions, sliced ($0.20)",
        j: "1/4 cup ranch dressing ($0.37) ",
        k: "4 buns ($2.49)",
        s: "Combine the smoked paprika, garlic, powder, salt, and pepper in a small bowl. Cut any large chicken thighs in half to make them more sandwich-sized (you'll want four pieces total). Season both sides of the chicken thighs with the prepared spice mix.",
        t: "Heat the cooking oil in a large skillet over medium heat.  Once hot, swirl to coat the surface of the skillet.  Add the seasoned chicken and cook for 5-7 minutes on each side, or until the chicken thighs are well browned and cooked through. ",
        u: " Remove the chicken from the heat and brush BBQ sauce over both sides of each piece.Add the coleslaw mix, sliced green onions, and ranch dressing to a bowl. ",
        v: " Stir until everything is combined and evenly coated in dressing.To build the sandwiches, place one piece of BBQ chicken on each bun and top with a heaping scoop of the ranch slaw. Serve immediately.",
        w: " Calories: 415.23kcal",
        A: " Carbohydrates: 32.28g",
        B: "Protein: 28.18g ",
        C: "Fat: 18.73g",
        D: "Sodium: 1552.98mg ",
        E: "Fiber: 2.3g"
    });
};

// const pan = () => {
function pan() {
    newdish({
        name: "SHEET PAN CHICKEN FAJITAS",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2022/03/Sheet-Pan-Chicken-Fajitas-V1-800x1067.jpg",
        z: "INGREDIENTS",
        a: " FAJITAS 2 small yellow onions (or one large) ($0.57)",
        b: "3 bell peppers, any color ($3.69) ",
        c: "1 lb chicken breast ($6.24)",
        d: "2 Tbsp cooking oil ($0.08)",
        e: "1 lime ($0.30)",
        f: " 8 6-inch tortillas ($1.28)",
        g: "1/2 cup sour cream (optional) ($0.90)",
        h: "1/4 bunch cilantro (optional) ($0.22)",
        s: "Preheat the oven to 400ºF. Mix all of the spices for the fajita seasoning in a small bowl and set aside (chili powder, paprika, onion powder, garlic powder, cumin, cayenne pepper, sugar, and salt).Cut the onion and bell peppers into 1/4-inch wide strips.",
        t: " Slice the chicken breast into thin strips. Add the chicken and vegetables to a large baking sheet or casserole dish.Drizzle the cooking oil over the chicken and vegetables, then sprinkle the fajita seasoning mix over top. ",
        u: "Use your hands to toss the ingredients until everything is well coated in oil and seasoning. Spread the chicken and vegetables out over the baking sheet evenly.  Bake the chicken and vegetables in the preheated oven for 35-40 minutes, stirring once halfway through. ",
        v: "Squeeze the juice from half of the lime over top of the meat and vegetables after they come out of the oven.To serve, scoop a small amount of meat and vegetables into the center of each tortilla. Top with a few sprigs of cilantro, a dollop of sour cream, and an extra squeeze of lime if desired.",
        w: "Serving: 1Serving ,Calories: 483kcal",
        B: "Carbohydrates: 43g",
        C: "Protein: 31g",
        D: "Fat: 21g",
        E: "Sodium:910mg",
        A: "Fiber:4g",
    });
};

// const rice = () => {
function rice() {
    newdish({
        name: "ONE POT TERIYAKI CHICKEN AND RICE",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2019/05/One-Pot-Teriyaki-Chicken-and-Rice-skillet-V1.jpg ",
        z: "INGREDIENTS",
        a: "1 boneless, skinless chicken breast (about 2/3 lb.) ($2.81) ",
        b: " 1 Tbsp cooking oil ($0.04)",
        c: "2 cloves garlic, minced ($0.16)",
        d: "1 tsp grated fresh ginger ($0.10)",
        e: " 1.5 cups uncooked jasmine rice ($0.99)",
        f: "2.5 cups water ($0.00)   ",
        g: "12 oz. frozen stir fry vegetables ($1.59)",
        h: "1/4 cup soy sauce ($0.24)   ",
        i: "2 Tbsp brown sugar ($0.08)  ",
        j: " 1 tsp toasted sesame oil ($0.10)",
        k: "2 green onions, sliced ($0.15)",
        s: "Cut the chicken breast into very small pieces, about 1/2 to 3/4-inch in size.    Add the cooking oil, garlic, and ginger to a large, deep skillet. Cook over medium heat for about 1 minute, then add the chicken pieces and continue to sauté just until the outside of the chicken is no longer pink.  Do not over cook the chicken here, it will finish cooking with the rice.     Add the uncooked rice to the skillet and continue to sauté for 1-2 minutes more.",
        t: " You should hear the rice popping. Finally, add the water and give everything a brief stir to make sure there is no rice stuck to the bottom of the skillet.     Place a lid on the skillet, turn the heat up to medium-high, and allow the water to come to a full boil. Once boiling, turn the heat down to low and let it simmer for 10 minutes.    While the skillet is simmering over low, prepare the teriyaki sauce. In a small bowl, stir together the soy sauce, brown sugar, and toasted sesame oil. The brown sugar may not fully dissolve, but that’s okay. Set the sauce aside.",
        u: "After the rice has simmered for 10 minutes, lift the lid briefly to sprinkle the frozen vegetables on top, then replace the lid immediately. Make sure the vegetables are spread evenly over the surface. Let the skillet continue to heat over low for an additional five minute.    After steaming the rice and vegetables together for 5 minutes, turn the heat off and let the skillet rest with the lid in place for an additional five minutes.    Give the teriyaki sauce another brief stir, lift the lid on the skillet, and drizzle the sauce over the vegetables.",
        v: "Make sure to scrape out all the sugar from the bottom of the bowl. Using a spatula or large spoon, gently fold the rice and vegetables together until everything is mostly coated in the sauce. Make sure to scoop all the way to the bottom of the skillet when folding, as the sauce will sink to the bottom.    Place the lid back on top and let the skillet rest for a final 5 minutes to let the flavor soak in (heat turned off). Sprinkle sliced green onions over top just before serving.",
        w: "  Calories: 498.93kcal ",
        A: "Carbohydrates: 79.45g",
        B: " Protein: 27.53g ",
        C: " Fat: 7.2g ",
        D: " Sodium: 950.73mg ",
        E: "Fiber: 5.25g",
    });
};

// const chili = () => {
function chili() {
    newdish({
        name: "CLASSIC HOMEMADE CHICKEN CHILI",
        ima: "https://www.budgetbytes.com/wp-content/uploads/2013/12/Basic-Chili-in-Bowl-V2.jpg",
        z: "INGREDIENTS :",
        a: "2 Tbsp olive oil ($0.32)",
        b: "1 yellow onion ($0.49) ",
        c: " 2 cloves garlic ($0.32)  ",
        d: " 1 lb. ground beef ($4.79)",
        e: " 1 15oz. can kidney beans ($1.09)",
        f: " 1 15oz. can black beans ($0.89)",
        g: " 1 15oz. can diced tomatoes ($0.50) ",
        h: "1 6oz. can tomato paste ($0.55) ",
        i: "  1 cup water ($0.00) ",
        j: " Chili Seasoning ",
        k: "  1 Tbsp chili powder ($0.30) ",
        l: "  1 tsp ground cumin ($0.10)",
        m: " 1/4 tsp cayenne powder ($0.02) ",
        n: " 1/4 tsp garlic powder ($0.02)",
        o: " 1/2 tsp onion powder ($0.03) ",
        p: " 1/2 Tbsp brown sugar ($0.02) ",
        q: " 1 tsp salt ($0.05)",
        r: " 1/2 tsp Freshly cracked black pepper ($0.03)",
        s: "Dice the onion and mince the garlic. Add both to a large pot with the olive oil and cook over medium heat until they are soft and transparent. ",
        t: "Add the ground beef and continue to sauté until the beef is fully browned. Drain the beans and add them to the pot along with the diced tomatoes, tomato paste, 1 cup water, and all of the ingredients for the chili seasoning.",
        u: "Stir until well combined. Place a lid on the pot and allow it to simmer over a low flame for at least 30 minutes, stirring occasionally (the flavor gets better the longer it simmers). ",
        v: "Give the chili one final taste, adjust the salt or seasonings if needed, then serve hot with your favorite toppings.",
        w: "Serving: 1Cup Calories: 413.55kcal",
        A: " Carbohydrates: 38.73g  ",
        B: "Protein: 25.78g ",
        C: "Fat: 17.7g ",
        D: " Sodium: 1114.32mg ",
        E: "Fiber: 10.73g",
    });
};

var pasta1 = "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-V1.jpg";
var pasta2 = "ONE POT CREAMY CAJUN CHICKEN PASTA";
var BakedChiken1 = "https://www.budgetbytes.com/wp-content/uploads/2021/08/Baked-Chicken-Drumsticks-tongs-500x375.jpg";
var BakedChiken2 = "BAKED CHICKEN DRUMSTICKS";
var Biryani1 = "https://www.budgetbytes.com/wp-content/uploads/2022/05/Chicken-and-Rice-V1-800x1067.jpg";
var Biryani2 = "ONE POT CHICKEN AND RICE";
var wings1 = "https://www.budgetbytes.com/wp-content/uploads/2010/08/Sticky-Ginger-Chicken-Wings-V1-800x1067.jpg";
var wings2 = "STICKY GINGER CHICKEN WINGS";
var pollo1 = "https://www.budgetbytes.com/wp-content/uploads/2023/08/Pinchos-overhead-500x375.jpg";
var pollo2 = "PINCHOS DE POLLO";
var pizza1 = "https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-V2.jpg";
var pizza2 = "BBQ CHICKEN PIZZA";
var sandwich1 = "https://www.budgetbytes.com/wp-content/uploads/2020/07/Easy-BBQ-Chicken-Sandwiches-two-V2.jpg";
var sandwich2 = "EASY BBQ CHICKEN SANDWICHES";
var pan1 = "https://www.budgetbytes.com/wp-content/uploads/2022/03/Sheet-Pan-Chicken-Fajitas-V1-800x1067.jpg";
var pan2 = "SHEET PAN CHICKEN FAJITAS";
var rice1 = "https://www.budgetbytes.com/wp-content/uploads/2019/05/One-Pot-Teriyaki-Chicken-and-Rice-skillet-V1.jpg";
var rice2 = "ONE POT TERIYAKI CHICKEN AND RICE";
var chili1 = "https://www.budgetbytes.com/wp-content/uploads/2013/12/Basic-Chili-in-Bowl-V2.jpg";
var chili2 = "CLASSIC HOMEMADE CHILI";

const [show1, Pastach] = useState(true)
function Pastaf() {
    BakedChikench(true);
    Biryanich(true);
    wingsch(true);
    polloch(true);
    pizzach(true);
    sandwichch(true);
    panch(true);
    ricech(true);
    chilich(true);
}
function Pastaff() {
    Pastach(false);
}

const [show2, BakedChikench] = useState(true)
function BakedChikenf() {
    Pastach(true);
    Biryanich(true);
    wingsch(true);
    polloch(true);
    pizzach(true);
    sandwichch(true);
    panch(true);
    ricech(true);
    chilich(true);
}
function BakedChikenff() {
    BakedChikench(true);
}

const [show3, Biryanich] = useState(true)
function Biryanif() {
    Pastach(true);
    BakedChikench(true);
    wingsch(true);
    polloch(true);
    pizzach(true);
    sandwichch(true);
    panch(true);
    ricech(true);
    chilich(true);
}
function Biryaniff() {
    Biryanich(false);
}


const [show4, wingsch] = useState(true)
function wingsf() {
    Pastach(true);
    BakedChikench(true);
    Biryanich(true);
    polloch(true);
    pizzach(true);
    sandwichch(true);
    panch(true);
    ricech(true);
    chilich(true);
}
function wingsff() {
    wingsch(false);
}

const [show5, polloch] = useState(true)
function pollof() {
    Pastach(true);
    BakedChikench(true);
    Biryanich(true);
    wingsch(true);
    pizzach(true);
    sandwichch(true);
    panch(true);
    ricech(true);
    chilich(true);

}
function polloff() {
    polloch(false);
}

const [show6, pizzach] = useState(true)
function pizzaf() {
    Pastach(true);
    BakedChikench(true);
    Biryanich(true);
    wingsch(true);
    polloch(true);
    sandwichch(true);
    panch(true);
    ricech(true);
    chilich(true);
}
function pizzaff() {
    pizzach(false);
}

const [show7, sandwichch] = useState(true)
function sandwichf() {
    Pastach(true);
    BakedChikench(true);
    Biryanich(true);
    wingsch(true);
    polloch(true);
    pizzach(true);
    panch(true);
    ricech(true);
    chilich(true);
}
function sandwichff() {
    sandwichch(false);
}

const [show8, panch] = useState(true)
function panf() {
    Pastach(true);
    BakedChikench(true);
    Biryanich(true);
    wingsch(true);
    polloch(true);
    pizzach(true);
    sandwichch(true);
    ricech(true);
    chilich(true);
}
function panff() {
    panch(false);
}

const [show9, ricech] = useState(true)
function ricef() {

    Pastach(true);
    BakedChikench(true);
    Biryanich(true);
    wingsch(true);
    polloch(true);
    pizzach(true);
    sandwichch(true);
    panch(true);
    chilich(true);
}
function riceff() {
    ricech(false);
}

const [show10, chilich] = useState(true)
function chilf() {
    Pastach(true);
    BakedChikench(true);
    Biryanich(true);
    wingsch(true);
    polloch(true);
    pizzach(true);
    sandwichch(true);
    panch(true);
    ricech(true);
}
function chilff() {
    chilich(false);

}



return (


    <>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div class="chikendetails">
                <b><u><p style={{ textAlign: 'center', fontSize: '35px', fontFamily: 'monospace' }}>{dish.name}</p></u></b>
                <div class="flex">
                    <div class="imge">
                        <img src={dish.ima} alt="jhgjh" style={{ maxWidth: '500px', maxHeight: '450px' }} />
                    </div>
                    <div class="list">
                        <b> <u> <p style={{ fontSize: '20px' }}> {dish.z}</p></u></b>
                        <ol>
                            <li>{dish.a} </li>
                            <li>{dish.b} </li>
                            <li>{dish.c} </li>
                            <li>{dish.d} </li>
                            <li>{dish.e} </li>
                            <li>{dish.f} </li>
                            <li>{dish.g} </li>
                            <li>{dish.h} </li>
                            <li>{dish.i} </li>
                        </ol>

                        <p style={{ fontSize: '20px' }}>{dish.j} </p>
                        <ol>
                            <li>{dish.k} </li>
                            <li>{dish.l} </li>
                            <li>{dish.m} </li>
                            <li>{dish.n} </li>
                            <li>{dish.o} </li>
                            <li>{dish.p} </li>
                            <li>{dish.q} </li>
                            <li>{dish.r} </li>

                        </ol>
                    </div>

                </div>
                <b> <u> <p style={{ fontSize: '20px' }}>PROCEDURE: </p></u> </b>
                <ol>
                    <li> {dish.s}</li>
                    <li> {dish.t}</li>
                    <li> {dish.u}</li>
                    <li> {dish.v}</li>
                </ol>
                <b> <u> <p style={{ fontSize: '20px' }}>NUTRITIONS:</p></u> </b>
                <ol>
                    <li> {dish.w}</li>
                    <li> {dish.A}</li>
                    <li> {dish.B}</li>
                    <li> {dish.C}</li>
                    <li> {dish.D}</li>
                    <li> {dish.E}</li>
                </ol>

            </div>
            <div class="chickenindex00" style={{alignItems:'normal'}}>


            <div style={{ overflowY: "scroll", top: "5px", height: "1175px", position: "sticky", width: "400px" }}>

                    {show1 ? <Card img={pasta1} name={pasta2} s={() => { Pasta(); Pastaf(); Pastaff() }}></Card> : null}
                    {show2 ? <Card img={BakedChiken1} name={BakedChiken2} s={() => { BakedChiken(); BakedChikenf(); BakedChikenff() }}></Card> : null}
                    {show3 ? <Card img={Biryani1} name={Biryani2} s={() => { Biryani(); Biryanif(); Biryaniff() }}></Card> : null}
                    {show4 ? <Card img={wings1} name={wings2} s={() => { wings(); wingsf(); wingsff() }}></Card> : null}
                    {show5 ? <Card img={pollo1} name={pollo2} s={() => { pollo(); pollof(); polloff() }}></Card> : null}
                    {show6 ? <Card img={pizza1} name={pizza2} s={() => { pizza(); pizzaf(); pizzaff() }}></Card> : null}
                    {show7 ? <Card img={sandwich1} name={sandwich2} s={() => { sandwich(); sandwichf(); sandwichff() }}></Card> : null}
                    {show8 ? <Card img={pan1} name={pan2} s={() => { pan(); panf(); panff() }}></Card> : null}
                    {show9 ? <Card img={rice1} name={rice2} s={() => { rice(); ricef(); riceff() }}></Card> : null}
                    {show10 ? <Card img={chili1} name={chili2} s={() => { chili(); chilf(); chilff() }}></Card> : null}
                </div>

            </div>
        </div>

    </>
)
}
function Card(props) {
return <>
    <div className="Card">
    <div className="Card mb-3" onClick={props.s} style={{ width: "100%" }}>

            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.img} class="img-fluid object-fit-cover rounded m-2" alt={props.name}></img>
                </div>
                <div className="col-md-8">
                    <div className="Card-body">
                        <h5 className="Card-title">{props.name}</h5>
                        <p className="Card-text">
                            {props.text0}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
}

export default App;
