export type Audience = {
  title: string;
  text: string;
};

export type Assistant = {
  label: string;
  title: string;
  text: string;
};

export type Testimonial = {
  title: string;
  text: string;
  name: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SpreadsheetPreview = {
  image: string; /* arquivo dentro de /public/planilhas */
  category: string;
  name: string;
};
