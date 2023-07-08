import React, { useState, useRef } from "react";
import emailjs from "emailjs-com"; // itt az emailjs-com csomagra változtattam
import "./Contact.css"


const Result = () => {
  return (
    <p>Az üzeneted sikeresen elküldve. Hamarosan felveszem veled a kapcsolatot.</p>
  );
};


function Contact() {
  const [result, showResult] = useState(false);
  const form = useRef<HTMLFormElement>(null); // Ref típus explicit megadása

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) { // Ellenőrizzük, hogy 'form.current' nem undefined vagy null
      emailjs
        .sendForm('service_qixq8iw', 'template_rlwg9xk', form.current, '7HeiuGPg0w2b4sknv')
        .then(
          (result: any) => {
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          }
        );
      e.currentTarget.reset();
      showResult(true);
    } else {
      console.error("A form nem található.");
    }
  };

  return (
    <form action="" onSubmit={sendEmail} ref={form}>
      <section className="formWord background" id="Contact" style={{backgroundColor: "#0d1117"}}>
        <div className="container-contact">
          <div className="wrap-contact">
        <div className="contact-box">
        <h1 style={{color: "white", textAlign: "center"}}>Contact</h1>
        <input className="input100" type="text" name="fullname" placeholder="Teljes név" required />
        <br />
        <input className="input100" type="text" name="email" placeholder="Email" required />
        <br />
        <textarea className="input100"  name="message" placeholder="Üzenet" required />
        <br />
        <button>Küldés</button>
        <br />
        <div className="row">{result ? <Result /> : null}</div>
        </div>
        </div>
        </div>
      </section>
    </form>
  );
}

export default Contact;