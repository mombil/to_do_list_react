import "./style.css";

const Section = ({ title, body, extraHeaderContent}) => (
	<section className="section secion__container">
		<header className="section__item section__container">
			<h2>
        {title}
      </h2>
			{extraHeaderContent}
		</header>
		<div>
      {body}
    </div>
	</section>
);

export default Section;
