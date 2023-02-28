import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous·tes ! Je suis <span className="purple">Antoine Cadeau</span>, un étudiant en 3ème année à EPITECH, une école <span className="purple">d'expertise informatique</span> située à Toulouse.
            <br />
            C'est dans cette dernière que j'ai développé mes <span className="purple">soft skills</span> et mes <span className="purple">compétences professionnelles</span>.
            <br />
            <br />
            En effet, après avoir suivi une <span className="purple">formation de développement agile</span> j'ai pu fortement <span className="purple">améliorer mon travail</span> (que ce soit en équipe ou en autonomie),
             mieux <span className="purple">gérer le temps</span> nécéssaire à chaque projet et ainsi <span className="purple">m'adapter</span> au mieux aux besoins du client.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Pour réussir, travailler dur, ne jamais abandonner et surtout chérir une obsession magnifique."{" "}
          </p>
          <footer className="blockquote-footer">Walt Disney</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
