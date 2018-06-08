//Fornece os dados para a view
angular.module('toten')
    .controller('NoBrasCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/Justiça do Trabalho/No Brasil/Foto/No Brasil.jpg";
        //$scope.legenda = "alguma legenda";
        
        //Conteúdo da pagina (view)
        $scope.titulo = "A Justiça do Trabalho no Brasil";
        $scope.texto = ["Antes do surgimento da Justiça do Trabalho, cabia à Justiça Comum a apreciação das controvérsias relativas aos contratos regidos pelas leis civis e comerciais. A denominação Justiça do Trabalho (JT) surgiu na Constituição de 1934. Já se pensava em torná-la parte integrante do Poder Judiciário. No entanto, prevaleceu a posição de mantê-la no âmbito administrativo, por entender que assim se simplificaria e se daria mais rapidez às decisões."," A JT foi prevista pela Constituição de 1934, mas não instalada. A Constituição de 1937 manteve a previsão relativa à Justiça do Trabalho na esfera administrativa. Ela só foi criada no dia 1º de maio de 1939. A Constituição de 1946 transformou a Justiça do Trabalho em órgão do Poder Judiciário, mantendo a estrutura que tinha como órgão administrativo, inclusive com a representação classista. Sua estrutura permaneceu assim nas Constituições posteriores, de 1967 (alterada pela Emenda de 1969) e de 1988. Esta última passou a identificar o classista da 1ª instância (JCJs) como juiz classista e não mais de vogal e estabeleceu que em cada unidade da Federação haveria “pelo menos um” Tribunal Regional do Trabalho (TRT). Até então havia apenas 15 TRTs. Hoje existem 24 TRTs."," A Justiça do Trabalho foi declarada instalada por Getúlio Vargas em ato público realizado no dia 1º de maio de 1941, no campo de futebol do Vasco da Gama, Rio de Janeiro. Ficou estruturada em três instâncias. Na base, as Juntas de Conciliação e Julgamento (JCJs), que mantiveram o nome e a composição, com a diferença que seu presidente passava a ser um juiz de Direito ou bacharel nomeado pelo presidente da República para mandato de dois anos. Os vogais (classistas) continuavam sendo indicados pelos sindicatos, para mandato também de dois anos."," Em nível intermediário (2º grau), foram criados os Conselhos Regionais do Trabalho, para deliberação sobre recursos. E em nível superior (3º Grau), o Conselho Nacional do Trabalho."," Hoje a Justiça do Trabalho no Brasil tem as seguintes instâncias hierárquicas, na seguinte ordem: Varas do Trabalho, Tribunal Regional do Trabalho e Tribunal Superior do Trabalho. Há a possibilidade de um conflito empregado- empregador chegar até o Tribunal Superior do Trabalho, dado o direito das partes de pleitear uma decisão segura e definitiva."];
    });