// Afiliados: cada slug vira uma página (ex.: /lais) com o mesmo site,
// mudando só o link de checkout (parâmetro affiliate). Novo afiliado = 1 linha.
export const CHECKOUT_BASE =
  "https://www.payment.eng.br/checkout?product=N96CYS7N&price=3FKRHT7N";

export const affiliates: Record<string, string> = {
  lais: "6d4a8838-e6a5-4cf4-942b-e5baadd7aea6",
  livia: "0b045096-bcb2-4314-9ce3-d149164f3894",
  jayane: "406df519-20f4-4d00-9f22-563ac21b3b07",
};

export function checkoutUrl(affiliateId?: string) {
  return affiliateId ? `${CHECKOUT_BASE}&affiliate=${affiliateId}` : CHECKOUT_BASE;
}
