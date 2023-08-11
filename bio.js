 var organela=prompt ("digite uma organela")
 
 let celulaanimal=
[
'nucleo', 'menbrana nuclear', 'citplasma', 'ribossomos', 'lisossomos', 'complexo de golgi', 
'reticulo endoplasmatico liso', 'reticulo endoplasmatico rugoso', 'centriolo', 'citoesqueleto', 'menbrana plasmática', 
'DNA', 'cromossomos', 'mitocondria']

for (let i=0; i < celulaanimal.length; i++){
    if (celulaanimal[i]=='nucleo' && organela=='nucleo'){
        document.write('O núcleo é uma, dupla menbrana que comporta o DNA <img src="imagens/nucleo.jpg" style="width:30%; height:30%;">' );
    
    }else if (celulaanimal [i] == 'menbrana nuclear' && organela=='menbrana nuclear'){
        document.write(`A principal função da membrana nuclear é para regular o movimento de entrada e saída de substâncias numa célula <img src="imagens/menbrananuclear.jpg">`);

    }else if (celulaanimal [i] == 'citoplasma' && organela=="citoplasma"){
        document.write(`responsável por armazenar substâncias químicas fundamentais para a manutenção da vida. <img src="imagens/citoplasma-procarionte.webp">`);

    }else if (celulaanimal [i] == 'ribossomos' && organela=='ribossomos'){
        document.write(`responsáveis pela síntese de proteínas.<img src="imagens/ribossomo.webp">`);

    }else if (celulaanimal [i] == 'lisossomos' && organela=="lisossomos"){
        document.write(`responsáveis pela digestão intracelular, promovendo a degradação de várias partículas extracelulares e moléculas ingeridas pelas células. <img src="imagens/lisossomo.webp">`);

    }else if (celulaanimal [i] == 'complexo de golgi' && organela== 'complexo de golgi'){
        document.write(`armazenamena, transforma e exporta as substâncias das células. <img src="imagens/golgi.wbp">`)
   
    }else if (celulaanimal [i] == 'reticulo endoplasmatico liso' && organela=='reticulo endoplasmatico liso'){
        document.write(`participar da produção lipídios (gordura), especialmente os fosfolipídios, que compõem a membrana plasmática. <img src="imagens/liso.png">`)

    }else if (celulaanimal [i] == 'reticulo endoplasmatico rugoso' && organela=='reticulo endoplasmatico rugoso'){
        document.write(`Faz Síntese de proteínas, glicosilação de proteínas montagem de moléculas proteicas, síntese de fosfolipídios <img src="imagens/rugoso.png">`)

    }else if (celulaanimal [i] == 'centriolo' && organela=="centriolo"){
        document.write(`Auxiliam na separação do material genético na divisão celular e podem formar cílios e flagelos. <img src="imagens/centriolo.jpg">`)
        
    }else if (celulaanimal [i] == 'citoesqueleto' && organela=='citoesqueleto'){
        document.write(`A principal função do citoesqueleto é dar sustentação e resistência.<img src="imagens/citoesqueleto.webp">`)

    }else if (celulaanimal [i] == 'DNA' && organela=="DNA"){
        document.write(`Armazena e transmite as informações genéticas. <img src="imagens/DNA.avif"`)

    }else if (celulaanimal [i] == 'cromossomos' && organela=="cromossomos"){
        document.write(`carregam a informação genética. <img src="imagens/cromossomo.webp">`)

    }else if (celulaanimal [i] == 'mitocondria' && organela=='mitocondria'){
        document.write(`responsáveis pelo processo de respiração celular <img src="imagens/mitocondria.webp">`)
    }
}

