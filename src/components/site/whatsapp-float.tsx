const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5511992367278&text=Ol%C3%A1+estou+vindo+do+Instagram+e+gostaria+de+saber+sobre+o+Psicoplanilhas&type=phone_number&app_absent=0";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o PsicoPlanilhas pelo WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22s.95 2.58 1.09 2.76c.14.18 1.87 2.85 4.53 4 .63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.58-.65 1.8-1.27.22-.62.22-1.15.16-1.27-.07-.11-.24-.18-.51-.31Z" />
        <path d="M16.02 3.2A12.68 12.68 0 0 0 5.2 22.49L3.2 28.8l6.47-1.97a12.8 12.8 0 1 0 6.35-23.63Zm0 23.29c-2.08 0-4.12-.56-5.9-1.62l-.42-.25-3.84 1.17 1.19-3.73-.27-.43a10.46 10.46 0 1 1 9.24 4.86Z" />
      </svg>
      <span>Fale pelo WhatsApp</span>
    </a>
  );
}
