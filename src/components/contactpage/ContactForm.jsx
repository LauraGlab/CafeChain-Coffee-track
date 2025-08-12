import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./../../css/components/contactpage/ContactForm.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_PUBLIC_KEY"
      );
      alert("Wiadomość wysłana!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Błąd podczas wysyłania.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Imię:
        <input
          type="text"
          {...register("name", { required: "Imię jest wymagane" })}
        />
        <span className="error-message">{errors.name?.message || ""}</span>
      </label>

      <label>
        Email:
        <input
          type="email"
          {...register("email", {
            required: "Email jest wymagany",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Nieprawidłowy format e-mail",
            },
          })}
        />
        <span className="error-message">{errors.email?.message || ""}</span>
      </label>

      <label>
        Wiadomość:
        <textarea
          rows="4"
          {...register("message", { required: "Wiadomość jest wymagana" })}
        />
        <span className="error-message">{errors.message?.message || ""}</span>
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Wysyłanie..." : "Wyślij"}
      </button>

      {isSubmitSuccessful && <p>Dziękujemy za kontakt!</p>}
    </form>
  );
}
