import React from "react";

function AboutPage() {
  return (
    <div className="aboutpage">
      <div className="aboutImg">
        <img
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=296&q=80"
          alt="img"
        />
      </div>
      <div className="about">
        <h1>Hi there!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
          soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
          accusamus atque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
          soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
          accusamus expedita quo culpa tempora, assumenda, quis fugiat ut
          voluptates soluta, aut earum ne atque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
          soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
          accusamus expedita quo culpa tempora, assumenda, q cum expedita quo
          culpa tempora, assumenda, quis fugiat ut voluptates soluta,uis fugiat
          ut voluptates soluta, aut earum ne atque.
        </p>
      </div>

      <div className="skill-section">
        <h2>Technologies I know</h2>
        <div class="skills__data">
          <div class="skills__names">
            <span class="skills__name">HTML5</span>
          </div>
          <div class="skills__bar skills__html"></div>
          <div>
            <span class="skills__percentage">95%</span>
          </div>
        </div>

        <div class="skills__data">
        <div class="skills__names">
          <span class="skills__name">CSS</span>
        </div>
        <div class="skills__bar skills__css"></div>
        <div>
          <span class="skills__percentage">85%</span>
        </div>
      </div>

      <div class="skills__data">
      <div class="skills__names">
        <span class="skills__name">JavaScript</span>
      </div>
      <div class="skills__bar skills__js"></div>
      <div>
        <span class="skills__percentage">65%</span>
      </div>
    </div>

    <div class="skills__data">
    <div class="skills__names">
      <span class="skills__name">Bootstrap</span>
    </div>
    <div class="skills__bar skills__bootstrap"></div>
    <div>
      <span class="skills__percentage">75%</span>
    </div>
  </div>

  <div class="skills__data">
  <div class="skills__names">
    <span class="skills__name">ReactJs</span>
  </div>
  <div class="skills__bar skills__react"></div>
  <div>
    <span class="skills__percentage">80%</span>
  </div>
</div>

      </div>
    </div>
  );
}

export default AboutPage;
