import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Import Icons
import htmlIcon from '../public/img/html5iconNew.png'
import cssIcon from '../public/img/css3icon.png'
import jsIcon from '../public/img/jsquarter.png'
import tsIcon from '../public/img/typescript.jpeg'
import reactIcon from '../public/img/reactIcon.png'
import nextIcon from '../public/img/nextjs_logo.png'
import tailwindIcon from '../public/img/Tailwind.jpg'
import styledIcon from '../public/img/styledComponents.png'
import bootstrapIcon from '../public/img/bootstrap_icon.png'
import muiIcon from '../public/img/MaterialUIicon.png'
import mysqlIcon from '../public/img/MySQL-Logo.png'
import postgreIcon from '../public/img/postgresql_icon.png'
import mongoIcon from '../public/img/mongodb_icon.png'
import sequelizeIcon from '../public/img/sequelizeicon.png'
import mongooseIcon from '../public/img/mongoose.png'
import firebaseIcon from '../public/img/firebase.png'
import nodeIcon from '../public/img/nodejs.jpg'
import expressIcon from '../public/img/expressjsicon.png'
import apiIcon from '../public/img/apirestIcon.png'
import googleIcon from '../public/img/google_cloud.png'
import awsIcon from '../public/img/aws_icon.png'
import herokuIcon from '../public/img/heroku.png'
import npmIcon from '../public/img/npmicon.png'
import yarnIcon from '../public/img/yarnicon.png'
import reactnativeIcon from '../public/img/reactnative.png'
import protoIcon from '../public/img/protolayout.png'
import usabilidadeIcon from '../public/img/usabilidade_icon.png'
import acessibilidadeIcon from '../public/img/acessibilidade.png'
import figmaIcon from '../public/img/figmaIcon.png'
import githubIcon from '../public/img/GitHub.png'
import photoIcon from '../public/img/photoshop.png'
import linuxIcon from '../public/img/Linux2.png'
import materialDesignIcon from '../public/img/materialDesign.jpg'
import jestIcon from '../public/img/jestIcon.webp'
import lucidChartIcon from '../public/img/lucidchart_logo.webp'


export default function Skills() {
  return (
    <div>
      <h1 className=' text-center text-4xl bg-tab font-[600] '>HABILIDADES</h1>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>FRONT-END</h3>

      <div className="grid grid-cols-10 flex flex-wrap  gap-20 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer ' title='HTML, vers??o 5, ?? uma linguagem de marca????o de hipertexto para apresentar e estruturar o conte??do na web.' ><Image src={htmlIcon} alt="html5" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Com o CSS, vers??o 3. Pode-se criar estilos ??nicos para seus projetos web, alterando diversos aspectos de design no layout da p??gina.' ><Image src={cssIcon} alt="cssIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='JavaScript ?? uma linguagem de programa????o interpretada estruturada, de script em alto n??vel com tipagem din??mica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript ?? uma das tr??s principais tecnologias da World Wide Web.' ><Image src={jsIcon} alt="jsIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' cursor-pointer ' title='TypeScript ?? uma linguagem de programa????o de c??digo aberto desenvolvida pela Microsoft. ?? um superconjunto sint??tico estrito de JavaScript e adiciona tipagem est??tica opcional ?? linguagem. Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documenta????o e permitindo que o TypeScript valide se seu c??digo est?? funcionando corretamente.' ><Image src={tsIcon} alt="tsIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='O React ?? uma biblioteca JavaScript de c??digo aberto com foco em criar interfaces de usu??rio em p??ginas web. ' ><Image src={reactIcon} alt="reactIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Next.js ?? uma estrutura da web de desenvolvimento front-end React de c??digo aberto criada por Vercel que permite funcionalidades como renderiza????o do lado do servidor e gera????o de sites est??ticos para aplicativos da web baseados em React ' ><Image src={nextIcon} alt="nextIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='O Tailwind ?? uma cole????o de componentes de interface do usu??rio bonitos e totalmente responsivos, projetados e desenvolvidos por n??s, os criadores do Tailwind CSS. Ele tem centenas de exemplos prontos para usar e ?? garantido para ajud??-lo a encontrar o ponto de partida perfeito para o que voc?? deseja construir. ' ><Image src={tailwindIcon} alt="tailwindIcon" width='200px' height='120px' className='hover:scale-110 ' /></div>
        <div className=' cursor-pointer              ' title='O estilo permite que voc?? use a sintaxe CSS real dentro de seus componentes. Componentes com estilo ?? uma variante do ???CSS-in-JS??? ??? que resolve muitos dos problemas com o CSS tradicional. Um dos problemas mais importantes que eles resolvem s??o as colis??es de nomes de seletores. Com CSS tradicional, voc?? deve ter cuidado para n??o sobrescrever seletores CSS usados em outro lugar em um site porque todos os seletores CSS vivem no mesmo namespace global. Essa restri????o infeliz pode levar a esquemas de nomenclatura de seletor elaborados (e muitas vezes confusos). ' ><Image src={styledIcon} alt="styledIcon" width='210px' height='220px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Bootstrap ?? um framework web com c??digo-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplica????es web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experi??ncia do usu??rio em um site amig??vel e responsivo.'><Image src={bootstrapIcon} alt="bootstrapIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Biblioteca de componentes React para um desenvolvimento ??gil e f??cil. Construa seu pr??prio design, ou comece com Material Design. ' ><Image src={muiIcon} alt="muiIcon" width='210px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' cursor-pointer ' title='Material Design (codinomeado Quantum Paper) ?? uma linguagem de design livre desenvolvida pela Google com o objetivo de unificar e padronizar as interfaces gr??ficas dos sistemas da empresa (conjunto de diretrizes ou guidelines), anunciado em 2014 como uma melhoria no "card" do assistente pessoa' ><Image src={materialDesignIcon} alt="materialDesignIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' cursor-pointer ' title='Jest ?? um framework de teste unit??rio de c??digo aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.' ><Image src={jestIcon} alt="jestIcon" width='200px' height='200px' className='hover:scale-110 bg-contain ' /></div>

      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>BASE DE DADOS</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-4 ' title='O MySQL ?? um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. ?? atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milh??es de instala????es pelo mundo.' ><Image src={mysqlIcon} alt="mysqlIcon" width='200px' height='150px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='PostgreSQL ?? um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de c??digo aberto.' ><Image src={postgreIcon} alt="postgreIcon" width='350px' height='240px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-2 ' title='MongoDB ?? um software de banco de dados orientado a documentos livre, de c??digo aberto e multiplataforma. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.' ><Image src={mongoIcon} alt="mongoIcon" width='350px' height='350px' className='hover:scale-105' /></div>
        <div className=' border-[1px] cursor-pointer ' title='O Sequelize ?? um ORM(Object/Relational Mapper) baseado em Promise para Node. js e io. js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transa????o, relacionamentos, replica????o de leitura e muito mais.' ><Image src={sequelizeIcon} alt="sequelizeIcon" width='200px' height='200px' className='hover:scale-105 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-2 ' title='O Mongoose ?? um ODM e fornece uma solu????o direta e baseada em esquema para modelar seus dados de aplicativos. Ele inclui convers??o de tipo integrada, valida????o, cria????o de consulta, ganchos de l??gica de neg??cios e muito mais, prontos para uso. ' ><Image src={mongooseIcon} alt="mongooseIcon" width='400px' height='320px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='Firebase ?? uma plataforma desenvolvida pelo Google para a cria????o de aplicativos m??veis e da web. Era originalmente uma empresa independente fundada em 2011. Em 2014, o Google adquiriu a plataforma e agora ?? sua oferta principal para o desenvolvimento de aplicativos.' ><Image src={firebaseIcon} alt="firebaseIcon" width='300px' height='300px' className='hover:scale-110 bg-cover ' /></div>
      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>BACK-END</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='Node.js ?? um software de c??digo aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execu????o de c??digos JavaScript fora de um navegador web.' ><Image src={nodeIcon} alt="nodeIcon" width='300px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='Express.js ?? um framework para Node.js que fornece recursos m??nimos para constru????o de servidores web. Foi lan??ado como software livre e de c??digo aberto sob a Licen??a MIT. ?? um dos mais populares frameworks para servidores em Node.js.' ><Image src={expressIcon} alt="expressIcon" width='300px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='API RESTful ?? uma interface que fornece dados em um formato padronizado baseado em requisi????es HTTP. Ela fornece dados para essas aplica????es, facilitando o cadastro e o acesso. API RESTful fica parada at?? que acontece uma requisi????o.' ><Image src={apiIcon} alt="apiIcon" width='300px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='O Google Cloud Platform possibilita a cria????o de aplicativos e sites web mais otimizados, resultando no crescimento do seu neg??cio. Assim, a empresa pode desenvolver fun????es com finalidades ??nicas, capazes de responder aos eventos em nuvem.' ><Image src={googleIcon} alt="googleIcon" width='300px' height='210px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-8 ' title='A Amazon Web Services (ou AWS) existe de 2006 e oferece servi??os de infraestrutura de TI para empresas por meio de servi??os web ??? a chamada computa????o na nuvem, que nos d?? a chance de trocar altos gastos com infraestrutura por pre??os que cabem no bolso. ' ><Image src={awsIcon} alt="awsIcon" width='300px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='Heroku ?? uma plataforma em nuvem como um servi??o que suporta v??rias linguagens de programa????o. Uma das primeiras plataformas em nuvem, o Heroku est?? em desenvolvimento desde junho de 2007, quando suportava apenas a linguagem de programa????o Ruby, mas agora suporta Java, Node.js, Scala, Clojure, Python, PHP e Go.' ><Image src={herokuIcon} alt="herokuIcon" width='200px' height='120px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='npm ?? um gerenciador de pacotes para o Node.JS npm, Inc. ?? uma subsidi??ria do GitHub, que fornece hospedagem para desenvolvimento de software e controle de vers??o com o uso do Git. npm ?? o gerenciador de pacotes padr??o para o ambiente de tempo de execu????o JavaScript Node.js. ' ><Image src={npmIcon} alt="npmIcon" width='350px' height='220px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Yarn ?? um sistema de empacotamento de software desenvolvido em 2016 pelo Facebook para Node.js JavaScript runtime environment que fornece velocidade, consist??ncia, estabilidade e seguran??a como uma alternativa ao npm (gerenciador de pacotes).' ><Image src={yarnIcon} alt="yarnIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>


      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>DESENVOLVIMENTO MOBILE</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer ' title='React Native ?? uma biblioteca Javascript criada pelo Facebook. ?? usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.' ><Image src={reactnativeIcon} alt="reactnativeIcon" width='500px' height='500px' className='hover:scale-110 ' /></div>
      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>TECNOLOGIAS RELACIONADAS</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer ' title='A prototipagem ?? a quarta e ??ltima fase do processo de Design Thinking e tem como fun????o validar as ideias geradas na fase anterior, a Idea????o. ?? o momento de unir propostas, refinar conceitos e colocar a m??o na massa. Seu objetivo ?? revelar problemas de design, usabilidade ou adequa????o.' ><Image src={protoIcon} alt="protoIcon" width='300px' height='300px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='A usabilidade visa assegurar que produtos sejam f??ceis de aprender a usar, eficazes e agrad??veis, sempre na perspectiva do usu??rio. N??o ?? apenas facilidade de uso, mas tamb??m trazer algo significativo, tendo um objetivo em comum com o usu??rio.' ><Image src={usabilidadeIcon} alt="usabilidadeIcon" width='300px' height='300px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='No contexto do software, o teste de acessibilidade ?? um processo para avaliar a usabilidade do sistema por pessoas que enfrentam algum tipo de restri????o que podem ser permanentes, como uma defici??ncia, tempor??rias, como um dedo quebrado ou situacionais, como usar a aplica????o enquanto segura uma crian??a.' ><Image src={acessibilidadeIcon} alt="acessibilidadeIcon" width='300px' height='300px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='Figma ?? um editor gr??fico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplica????es desktop para GNU/Linux, macOS e Windows.' ><Image src={figmaIcon} alt="figmaIcon" width='350px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='GitHub ?? uma plataforma de hospedagem de c??digo-fonte e arquivos com controle de vers??o usando o Git. Ele permite que programadores, utilit??rios ou qualquer usu??rio cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.' ><Image src={githubIcon} alt="githubIcon" width='350px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Adobe Photoshop ?? um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems. ?? considerado o l??der no mercado dos editores de imagem profissionais, assim como o programa de facto para edi????o profissional de imagens digitais e trabalhos de pr??-impress??o.' ><Image src={photoIcon} alt="photoIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='Linux ?? um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux. O n??cleo foi desenvolvido pelo programador finland??s Linus Torvalds, inspirado no sistema Minix. ' ><Image src={linuxIcon} alt="linuxIcon" width='350px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='Diagramas de classes UML mapeiam a estrutura de um determinado sistema modelando suas classes, seus atributos, opera????es e rela????es entre objetos.' ><Image src={lucidChartIcon} alt="lucidChartIcon" width='350px' height='200px' className='hover:scale-110 ' /></div>


      </div>

    </div>
  );
}
