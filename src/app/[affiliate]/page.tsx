import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Landing } from "@/components/site/landing";
import { affiliates, checkoutUrl } from "@/content/affiliates";

// Só os slugs em `affiliates` existem; qualquer outro caminho = 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(affiliates).map((affiliate) => ({ affiliate }));
}

// Páginas de afiliado são cópias da home -> fora do índice de busca (evita conteúdo duplicado).
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default async function AffiliatePage({
  params,
}: {
  params: Promise<{ affiliate: string }>;
}) {
  const { affiliate } = await params;
  const affiliateId = affiliates[affiliate];
  if (!affiliateId) notFound();
  return <Landing checkoutUrl={checkoutUrl(affiliateId)} />;
}
