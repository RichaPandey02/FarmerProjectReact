import React from "react";
import Carousel from "../layout/Carousel";
import HOme from "../styles/HOme.css";
import Footer from "../layout/Footer"
const Home = () => {
  return (
    <div>
      <Carousel />
      {/* <section id="education">
        <div id="about-para">
          <br />

          <h1
           className="agr"
            data-testid="testcase"
          
          >
            Agriculture
          </h1>

          <p
          
          >
            Agriculture is the science, art and practice of cultivating plants
            and livestock.Agriculture was the key development in the rise of
            sedentary human civilization, whereby farming of domesticated
            species created food surpluses that enabled people to live in
            cities. The history of agriculture began thousands of years ago.
            After gathering wild grains beginning at least 105,000 years ago,
            nascent farmers began to plant them around 11,500 years ago. Pigs,
            sheep, and cattle were domesticated over 10,000 years ago. Plants
            were independently cultivated in at least 11 regions of the world.
            Industrial agriculture based on large-scale monoculture in the
            twentieth century came to dominate agricultural output, though about
            2 billion people still depended on subsistence agriculture. Modern
            agronomy, plant breeding, agrochemicals such as pesticides and
            fertilizers, and technological developments have sharply increased
            crop yields, while causing widespread ecological and environmental
            damage. Selective breeding and modern practices in animal husbandry
            have similarly increased the output of meat, but have raised
            concerns about animal welfare and environmental damage.
            Environmental issues include contributions to global warming,
            depletion of aquifers, deforestation, antibiotic resistance, and
            growth hormones in industrial meat production. Agriculture is also
            very sensitive to environmental degradation, such as biodiversity
            loss, desertification, soil degradation and global warming, which
            cause decrease in crop yield.Genetically modified organisms are
            widely used, although some are banned in certain countries.
          </p>
        </div>
      </section>

      <section id="education">
        <div id="about-para">
          <h1 className="history">History</h1>
          <p
            
          >
            The development of agriculture enabled the human population to grow
            many times larger than could be sustained by hunting and gathering.
            Agriculture began independently in different parts of the globe, and
            included a diverse range of taxa, in at least 11 separate centres of
            origin. Wild grains were collected and eaten from at least 105,000
            years ago.From around 11,500 years ago, the eight Neolithic founder
            crops, emmer and einkorn wheat, hulled barley, peas, lentils, bitter
            vetch, chick peas and flax were cultivated in the Levant. Rice was
            domesticated in China between 11,500 and 6,200 BC with the earliest
            known cultivation from 5,700 BC, followed by mung, soy and azuki
            beans. Sheep were domesticated in Mesopotamia between 13,000 and
            11,000 years ago. Cattle were domesticated from the wild aurochs in
            the areas of modern Turkey and Pakistan some 10,500 years ago.Pig
            production emerged in Eurasia, including Europe, East Asia and
            Southwest Asia, where wild boar were first domesticated about 10,500
            years ago.In the Andes of South America, the potato was domesticated
            between 10,000 and 7,000 years ago, along with beans, coca, llamas,
            alpacas, and guinea pigs. Sugarcane and some root vegetables were
            domesticated in New Guinea around 9,000 years ago. Sorghum was
            domesticated in the Sahel region of Africa by 7,000 years ago.
            Cotton was domesticated in Peru by 5,600 years ago,and was
            independently domesticated in Eurasia. In Mesoamerica, wild teosinte
            was bred into maize by 6,000 years ago. Scholars have offered
            multiple hypotheses to explain the historical origins of
            agriculture. Studies of the transition from hunter-gatherer to
            agricultural societies indicate an initial period of intensification
            and increasing sedentism; examples are the Natufian culture in the
            Levant, and the Early Chinese Neolithic in China. Then, wild stands
            that had previously been harvested started to be planted, and
            gradually came to be domesticated.
          </p>
        </div>
      </section>
      <section id="education">
        <div id="about-para">
          <h1
            className="cont agr"
            data-testid="testcase-1"
          >
            Contemporary agriculture
          </h1>
          <p
           
          >
            Agriculture is the science, art and practice of cultivating plants
            and livestock.Agriculture was the key development in the rise of
            sedentary human civilization, whereby farming of domesticated
            species created food surpluses that enabled people to live in
            cities. The history of agriculture began thousands of years ago.
            After gathering wild grains beginning at least 105,000 years ago,
            nascent farmers began to plant them around 11,500 years ago. Pigs,
            sheep, and cattle were domesticated over 10,000 years ago. Plants
            were independently cultivated in at least 11 regions of the world.
            Industrial agriculture based on large-scale monoculture in the
            twentieth century came to dominate agricultural output, though about
            2 billion people still depended on subsistence agriculture. Modern
            agronomy, plant breeding, agrochemicals such as pesticides and
            fertilizers, and technological developments have sharply increased
            crop yields, while causing widespread ecological and environmental
            damage. Selective breeding and modern practices in animal husbandry
            have similarly increased the output of meat, but have raised
            concerns about animal welfare and environmental damage.
            Environmental issues include contributions to global warming,
            depletion of aquifers, deforestation, antibiotic resistance, and
            growth hormones in industrial meat production. Agriculture is also
            very sensitive to environmental degradation, such as biodiversity
            loss, desertification, soil degradation and global warming, which
            cause decrease in crop yield.Genetically modified organisms are
            widely used, although some are banned in certain countries.
          </p>
        </div>
      </section>

      <section id="education">
        <div id="about-para">
          <h1 className="workforce">WorkForce</h1>

          <p>
            <img
              src="data:image/png;base64,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"
              className="homegraph"
            
            ></img>
          </p>

          <p >
            Agriculture is the science, art and practice of cultivating plants
            and livestock.Agriculture was the key development in the rise of
            sedentary human civilization, whereby farming of domesticated
            species created food surpluses that enabled people to live in
            cities. The history of agriculture began thousands of years ago.
            After gathering wild grains beginning at least 105,000 years ago,
            nascent farmers began to plant them around 11,500 years ago. Pigs,
            sheep, and cattle were domesticated over 10,000 years ago. Plants
            were independently cultivated in at least 11 regions of the world.
            Industrial agriculture based on large-scale monoculture in the
            twentieth century came to dominate agricultural output, though about
            2 billion people still depended on subsistence agriculture. Modern
            agronomy, plant breeding, agrochemicals such as pesticides and
            fertilizers, and technological developments have sharply increased
            crop yields, while causing widespread ecological and environmental
            damage. Selective breeding and modern practices in animal husbandry
            have similarly increased the output of meat, but have raised
            concerns about animal welfare and environmental damage.
            Environmental issues include contributions to global warming,
            depletion of aquifers, deforestation, antibiotic resistance, and
            growth hormones in industrial meat production. Agriculture is also
            very sensitive to environmental degradation, such as biodiversity
            loss, desertification, soil degradation and global warming, which
            cause decrease in crop yield.Genetically modified organisms are
            widely used, although some are banned in certain countries.
          </p>
        </div>
      </section> */}
      
         </div>
  );
};
export default Home;
