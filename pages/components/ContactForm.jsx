import en from '../../public/locale/en'
import es from '../../public/locale/es'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

export default function ContactForm() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [question, setQuestion] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function sendEmail(name, email, projectType, question, message) {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          question,
          message,
        }),
      });

      if (response.ok) {
        openModal();
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico: ', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError(`${t.emailR}`);
      return;
    }
    sendEmail(name, email, projectType, question, message);
  };

  return (
    <div id="form" className="flex flex-col text-left">
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto bg-black bg-opacity-30 text-black border border-color rounded-lg p-4 m-3">
        <h3 className="py-2 mb-3 text-xl text-white text-center">{t.form}</h3>
        <input className="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" 
          id="name" type="text" placeholder={t.form1}
          onChange={(e) => setName(e.target.value)}/>
        <input className="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" 
          id="email" type="email" placeholder={t.form2}
          onChange={(e) => setEmail(e.target.value)}/>
          {error && <p className="text-color pb-3">{error}</p>}
        <select className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none cursor-pointer" 
          id="projectType" name="projectType"
          onChange={(e) => setProjectType(e.target.value)}>
          <option value="unknow">{t.form3}</option>
          <option value="web">{t.form3a}</option>
          <option value="web-mobile">{t.form3b}</option>
          <option value="p-management">{t.form3c}</option>
          <option value="p-design">{t.form3d}</option>
        </select>
        <input className="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" 
          id="3q" type="text" placeholder={t.form4}
          onChange={(e) => setQuestion(e.target.value)}/>
        <textarea className="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" 
          id="message" rows="4" placeholder={t.form5}
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        <div className="flex justify-center">
        <button className="mb-4 bg-color hover:shadow-color hover:shadow-sm py-2 px-4 rounded focus:outline-none" type="submit">{t.submit}</button>
      </div>
    </form>
    
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Mensaje de confirmación"
      style={{ overlay: { background: 'rgba(4, 10, 18, 0.63)' } }}
      className="fixed inset-0 flex items-center justify-center"
    > 
      <div className="w-10rem p-4 rounded-lg bg-white text-center">
        <h2 className="text-lg font-bold mb-2">{t.formSend}</h2>
        <p className="mb-4">{t.formSendText}</p>
        <button 
          className="bg-color text-black px-4 py-2 rounded hover:shadow-color hover:shadow-sm"
          onClick={closeModal}>{t.close}
        </button>
      </div>
    </Modal>
  </div>
  ) 
}