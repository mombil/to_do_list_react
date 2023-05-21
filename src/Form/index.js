import "./style.css"

const Form = () => (
	<form className="section__item form">
		<input
			className="form__input"
			type="text"
			autofocus
			placeholder="Co jest do zrobienia?"
		/>
		<button className="form__button">
			Dodaj zadanie
		</button>
	</form>
);

export default Form;