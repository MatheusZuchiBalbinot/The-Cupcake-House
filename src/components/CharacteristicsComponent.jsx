import Characteristics__Custom from '../assets/backgroundCupCake.jpg'

const CharacteristicsComponent = () => {
    return (
      <div
        id='main__Characteristics__customize'
        className='grid grid-cols-2 rounded-2xl'
      >
        <div className='m-4 bg-pink-200 bg-opacity-40 rounded-2xl'>
          <h2 className='text-center p-2 font-semibold text-xl'>História:</h2>
          <p className='m-4 text-justify'>
            Em 2010, Laura e Amanda, amigas apaixonadas por confeitaria, abriram uma pequena empresa caseira de cupcakes. Com criatividade e sabores únicos, conquistaram clientes e expandiram para uma loja física, tornando-se um ponto de encontro para amantes de doces. Mantendo a qualidade artesanal, ganharam prêmios locais e destaque em programas culinários. Oferecendo encomendas personalizadas, seus cupcakes se tornaram essenciais em celebrações locais. Hoje, a marca é reconhecida regionalmente, atraindo clientes fiéis. Laura e Amanda, comprometidas com qualidade e inovação, mantêm viva a paixão original. Sua empresa de cupcakes é um testemunho de determinação, inspirando amantes de cupcakes e se tornando um pilar em sua comunidade local.
          </p>
        </div>
  
        <div className='m-4 bg-pink-200 bg-opacity-40 rounded-2xl'>
          <h2 className='text-center p-2 font-semibold text-xl' >Compromisso:</h2>
          <div className='m-4 text-justify'>
            <h2 className='py-2'>
              <span className='font-semibold'>Missão:</span> Nosso propósito é criar alegria através de cupcakes excepcionais, mantendo a qualidade artesanal, enquanto inspiramos momentos especiais e memoráveis em cada mordida.
            </h2>
            <h2 className='py-2'>
              <span className='font-semibold'>Visão:</span> Tornar-se um ícone culinário nacional com cupcakes inovadores, expandindo nossa presença e proporcionando alegria por meio da excelência gastronômica.
            </h2>
            <h2 className='py-2'>
              <span className='font-semibold'>Valores:</span> Nossos valores se baseiam na paixão pela confeitaria, busca pela excelência, criatividade contínua e conexão com a comunidade. Comprometemo-nos a ser uma empresa sustentável, responsável e inspiradora para os amantes de cupcakes em todo lugar.
            </h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default CharacteristicsComponent;