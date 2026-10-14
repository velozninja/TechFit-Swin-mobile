
import ViweBaseSheet from "../../components/ScrollViewBaseSheet";

import BoxTitle from "../../components/boxTitle";
import Title from "../../components/title";
import BoxOptions from "../../components/BoxOptions";
import ButtonForBoxOptions from "../../components/ButtonForBoxOptions";


export default function AlunoHomeScreen() {
    return (
        <ViweBaseSheet>
            <BoxTitle>
                <Title>Bem vindo Aluno</Title>
            </BoxTitle>
            <BoxOptions>
        
                <ButtonForBoxOptions
                    icon="person"
                    text="Perfil"
                    func={() => console.log("Perfil")}>
          

                </ButtonForBoxOptions>
                <ButtonForBoxOptions
                  icon="water"
                  text="Treinos"
                  func={()=> console.log("treinos")} >

                </ButtonForBoxOptions>
                <ButtonForBoxOptions
                  icon="barbell"
                  text='Teinador'
                  func={() => console.log("treinador")}
                  

                ></ButtonForBoxOptions>
                <ButtonForBoxOptions
                   icon='stats-chart'
                   text='Estatisticas'
                   func={() => console.log("estatisticas")}
                ></ButtonForBoxOptions>
                <ButtonForBoxOptions
                   icon='receipt-outline'
                   text='Histórico'
                   func={() => console.log("Historico")}
                >

                </ButtonForBoxOptions>
                <ButtonForBoxOptions
                   icon='settings-outline'
                   text='Configuração'
                   func={()=> console.log("Configuração")} 
                    
                   
                >

                </ButtonForBoxOptions>
                
         
                

            </BoxOptions>





            


        


        
        </ViweBaseSheet>

    );
}

        

        
    
