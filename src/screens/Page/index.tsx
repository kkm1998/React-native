import React, { FC } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';
import Layout from '../../constans/Layout';
const PageView = styled.View`
    background-color:${Colors.grey};
    margin-top:${Layout.statusBar}px;
`;
const Banner = styled.Image`
    width: 100%;
    height: 200px;
`;
const ImageLeft = styled.Image`
    width: 150px;
    height: 150px;
    margin:5px 0 0 10px;
    flex:1
`;
const ImageRight = styled.Image`
    width: 150px;
    height: 150px;
    margin:5px 10px 0 0;
    flex:1
`;
const CustomText = styled.Text`
    text-align:justify;
    margin-right:10px;
    margin-left:10px;
    flex:1;
`;

const CracowView = styled.View`
    flex-direction:row;
`;
interface IPageProps { }

const Page: FC<IPageProps> = () => {
    return (
        <PageView>
            <ScrollView>
                <Banner source={require('../../assets/LogoPage.png')} />
                <CustomText>
                    Kraków jest położony w południowej Polsce, w środkowo-zachodniej części województwa małopolskiego nad Wisłą; na jego terenie znajdują się ujścia wiślanych dopływów: Białuchy (dolny bieg Prądnika), Rudawy, Dłubni, Drwiny Długiej i Wilgi. Kraków znajduje się w miejscu zbiegu kilku krain geograficznych: Bramy Krakowskiej, Kotliny Oświęcimskiej, Kotliny Sandomierskiej, Pogórza Zachodniobeskidzkiego, Wyżyny Krakowsko-Częstochowskiej. Położenie Krakowa sprawia, że jest on bazą dla wycieczek w polskie góry, czy wypadów do malowniczej Jury Krakowsko-Częstochowskiej
                </CustomText>
                <CracowView>
                    <CustomText>
                        Miasto ma rozciągłość południkową 18 kilometrów i równoleżnikową 31 kilometrów. W granicach administracyjnych Krakowa znajduje się również punkt przecięcia południka i równoleżnika o pełnych dziesiątkach stopni (50°N i 20°E), stanowiący jedyny taki przypadek w Europie
                    </CustomText>
                    <ImageRight source={require('../../assets/Wawel.png')} />
                </CracowView>
                <CustomText>
                    W Krakowie znajduje się 5 rezerwatów przyrody o łącznej powierzchni 48,6 ha (0,15% powierzchni miasta)[31]. Na obszarze miasta Krakowa znajdują się niewielkie zielone obszary wchodzące w skład Zespołu Jurajskich Parków Krajobrazowych. Zespół ten zajmuje się ochroną terenów Jury Krakowsko-Częstochowskiej m.in. fragmenty parku Bielańsko-Tynieckiego, Tenczyńskiego oraz Dolinek Krakowskich, wraz z ich otulinami
                    </CustomText>
                <CracowView>
                    <ImageLeft source={require('../../assets/Zakrzowek.jpg')} />
                    <CustomText>
                        Zachodnia część Krakowa stanowi tzw. Obszar Krakowski i podlega polskiej sieci ekologicznej, a część obszaru miasta usytuowana jest w zasięgu korytarza ekologicznego rzeki Wisły. Rzeki, ich doliny oraz zbiorniki wodne to jedne z najciekawszych z przyrodniczego punktu widzenia miejsc w Krakowie.
                    </CustomText>
                </CracowView>
            </ScrollView>
        </PageView>

    );
};

export default Page;