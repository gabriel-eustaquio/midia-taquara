import styles from './AtalhosIluminacao.module.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function AtalhosIluminacao() {
  return (
    <>
      <section className={`container`}>
        <h1>Atalhos para a iluminação</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Grupo 1 - Seleção de equipamentos, Blackout e Pausar movimentos dos movings</AccordionTrigger>
            <AccordionContent>
              <ul className={`${styles.atalhosLista}`}>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>Z</span> Descrição: Selecionar todos os equipamentos</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>B</span> Descrição: Blackout</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>P</span> Descrição: Pausar o movimento dos movings</li>
              </ul>
              <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Grupo 2 - Posição movings</AccordionTrigger>
            <AccordionContent>
              <ul className={`${styles.atalhosLista}`}>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>Seta esquerda e direita</span> Descrição: Pan</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>Seta cima e baixo</span> Descrição: Tilt</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>Ctrl</span> Descrição: Centralizar</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>Space</span> Descrição: Flip</li>
              </ul>
              <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Grupo 3 - (Desativar comandos de um determinado equipamento)</AccordionTrigger>
            <AccordionContent>
            <ul className={`${styles.atalhosLista}`}>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>X</span> Descrição: Disable fixture</li>
            </ul>
            <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Grupo 4 - Selecionar grupos de equipamentos</AccordionTrigger>
            <AccordionContent>
            <ul className={`${styles.atalhosLista}`}>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>1</span> Descrição: Pentaled</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>2</span> Descrição: Quadraled</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>3</span> Descrição: Parled</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>4</span> Descrição: Todos os moving-head</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>5</span> Descrição: Brut</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>6</span> Descrição: Cobs</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>7</span> Descrição: Moving de cima</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>8</span> Descrição: Moving de baixo</li>
            </ul>
            <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Grupo 5 - Blackout grupos</AccordionTrigger>
            <AccordionContent>
            <ul className={`${styles.atalhosLista}`}>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>Q</span> Descrição: Pentaled</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>W</span> Descrição: Quadraled</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>E</span> Descrição: Parled</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>R</span> Descrição: Todos os moving-head</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>T</span> Descrição: Brut</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>I</span> Descrição: Movings de cima</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>U</span> Descrição: Movings de baixo</li>
            </ul>
            <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Grupo 6 - Strobo</AccordionTrigger>
            <AccordionContent>
              <span className={`${styles.tituloSecundario}`}>Teclado Numérico</span>
              <ul className={`${styles.atalhosLista}`}>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>7</span> Descrição: Desligar</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>8</span> Descrição: Médio</li>
                <li>Tecla: <span className={`${styles.atalhosTecla}`}>9</span> Descrição: Alto</li>
              </ul>
              <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Grupo 7 - Ligar e desligar todos os leds, menos os pentas</AccordionTrigger>
            <AccordionContent>
            <span className={`${styles.tituloSecundario}`}>Teclado Numérico</span>
            <ul className={`${styles.atalhosLista}`}>
              <li>Tecla: <span className={`${styles.atalhosTecla}`}>3</span> Descrição: Master 100%</li>
              <li>Tecla: <span className={`${styles.atalhosTecla}`}>2</span> Descrição: Master 0%</li>
              <li>Tecla: <span className={`${styles.atalhosTecla}`}>1</span> Descrição: Fade in</li>
              <li>Tecla: <span className={`${styles.atalhosTecla}`}>0</span> Descrição: Fade out</li>
            </ul>       
            <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Grupo 8 - Valores randômicos</AccordionTrigger>
            <AccordionContent>
            <span className={`${styles.tituloSecundario}`}>Valores randômicos</span>
            <ul className={`${styles.atalhosLista}`}>
              <li>Tecla: <span className={`${styles.atalhosTecla}`}>a</span> Descrição: Random color dos movings</li>
              <li>Tecla: <span className={`${styles.atalhosTecla}`}>c</span> Descrição: Random RGB dos leds</li>
              <li>Tecla: <span className={`${styles.atalhosTecla}`}>s</span> Descrição: Random strobe</li>
            </ul> 
            <span className={`${styles.tituloSecundario}`}>Vídeo será adicionado aqui</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  )
}

export default AtalhosIluminacao;