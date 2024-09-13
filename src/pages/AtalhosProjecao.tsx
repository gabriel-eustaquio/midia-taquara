import styles from './AtalhosIluminacao.module.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AtalhosProjecao() {
  return (
    <>
      <section className={`container`}>
        <h1>Atalhos para a iluminação</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Grupo 1 - Atalhos padrão</AccordionTrigger>
            <AccordionContent>
              <ul className={`${styles.atalhosLista}`}>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>F1</span> Descrição: Remove fundo e letra.</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>F2</span> Descrição: Remove letra</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>F3</span> Descrição: Remove fundo</li>
              </ul>
              <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </section>
    </>
  )
}

export default AtalhosProjecao;