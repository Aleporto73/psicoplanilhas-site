"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { previews } from "@/content/previews";

export function SpreadsheetCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: false });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on("select", sync).on("reInit", sync);
    return () => {
      emblaApi.off("select", sync).off("reInit", sync);
    };
  }, [emblaApi, sync]);

  return (
    <div className="preview-carousel">
      <div className="preview-nav">
        <button
          type="button"
          className="preview-arrow"
          aria-label="Ver prévias anteriores"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          className="preview-arrow"
          aria-label="Ver próximas prévias"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="preview-viewport" ref={emblaRef}>
        <ul className="preview-track" aria-label="Prévias das planilhas">
          {previews.map((preview) => (
            <li key={preview.image} className="preview-slide">
              {/* só a imagem: sem link, sem legenda. O nome vive no alt (leitor de tela) e na lista alfabética. */}
              <Image
                className="preview-thumb"
                src={`/planilhas/${preview.image}`}
                alt={`Prévia da planilha ${preview.name}`}
                width={800}
                height={800}
                loading="lazy"
                draggable={false} /* evita o "fantasma" de arrastar imagem do navegador atrapalhar o swipe */
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 20vw, 160px"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
