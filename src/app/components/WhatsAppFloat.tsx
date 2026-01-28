export function WhatsAppFloat() {
  // Configure the phone number (international format, no + or spaces) and default message
  const phoneNumber = '5216121587255'; // example: '5213412345678' (country code + number)
  const defaultMessage = 'Hola Pol! Me gustaría ponerme en contacto contigo.';

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-6 right-6 z-80 group"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-[0_6px_24px_rgba(16,185,129,0.35)] flex items-center justify-center transform transition-transform duration-200 hover:scale-105">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
          aria-hidden
        />
      </div>
    </a>
  );
}

export default WhatsAppFloat;
