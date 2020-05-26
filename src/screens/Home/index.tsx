import React, { FC } from 'react';
import { Button, View, Image, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';
import Layout from '../../constans/Layout';
const CircleImage = styled.Image`
    width: 150px;
    height: 150px;
border-radius:75px;
margin-left:100px
margin-top:5px
`;
const CustomText = styled.Text`
text-align:justify;
margin:5%;
`;
const CustomView = styled.View`
background-color:${Colors.khaki};
margin-top:${Layout.statusBar}px;
`;
interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    

    return (
        <CustomView>
            <ScrollView>
                <CircleImage
                    source={require('../../assets/logo.png')}
                />

                <CustomText>Kraków (łac. Cracovia, niem. Krakau, jid. ‏קראָקע Kroke‎) – miasto na prawach powiatu położone w południowej Polsce nad Wisłą, drugie co do liczby mieszkańców i powierzchni miasto kraju, formalna stolica Polski do 1795 r. i miasto koronacyjne oraz nekropolia królów Polski, od 1000 r. nieprzerwanie stolica diecezji krakowskiej (jednej z pięciu w ówczesnej Polsce), a od 1925 archidiecezji i metropolii. Kraków uzyskał lokację miejską przed 1228 rokiem, ponowna lokacja Krakowa w 1257 r., od odzyskania niepodległości w 1918 r. miasto wojewódzkie (od 1998 r. siedziba władz województwa małopolskiego), jest także centralnym ośrodkiem metropolitalnym aglomeracji krakowskiej i Krakowskiego Obszaru Metropolitalnego. Kraków uznawany jest za stolicę historycznej Małopolski. Leży na obszarze Bramy Krakowskiej, Niecki Nidziańskiej i Pogórza Zachodniobeskidzkiego.

                W Krakowie znajdują się główne siedziby m.in.: Polskiej Akademii Umiejętności, Narodowego Centrum Nauki, Instytutu Nafty i Gazu – Państwowego Instytutu Badawczego, Instytutu Zootechniki – Państwowego Instytutu Badawczego, Krajowej Szkoły Sądownictwa i Prokuratury, dowództwa Sił Specjalnych RP będącego jednocześnie jednym z kilku dowództw sił specjalnych NATO, Centrum Operacji Lądowych – Dowództwa Komponentu Lądowego, Polskiego Związku Narciarskiego, Centrum Eksperckiego Kontrwywiadu NATO, Narodowe Centrum Radioterapii Hadronowej.

                W mieście działają placówki kulturalne o znaczeniu i statusie narodowym, m.in. Narodowy Stary Teatr, Muzeum Narodowe, Panteon Narodowy, Archiwum Narodowe, Biblioteka Jagiellońska, Instytut Książki, Instytut Literatury, Centrum Operacji Specjalnych, Narodowe Centrum Rugby.

                Miasto na prawach powiatu pełni funkcję centrum administracyjnego, kulturalnego, edukacyjnego, naukowego, gospodarczego, usługowego i turystycznego. Kraków jest drugim co do wielkości, po Warszawie, rynkiem nowoczesnej powierzchni biurowej(ponad milion metrów kwadratowych powierzchni biurowej), a także jednym z kluczowych węzłów kolejowych w Polsce.
                
                Kraków jest położony w południowej Polsce, w środkowo-zachodniej części województwa małopolskiego nad Wisłą; na jego terenie znajdują się ujścia wiślanych dopływów: Białuchy (dolny bieg Prądnika), Rudawy, Dłubni, Drwiny Długiej i Wilgi. Kraków znajduje się w miejscu zbiegu kilku krain geograficznych: Bramy Krakowskiej, Kotliny Oświęcimskiej, Kotliny Sandomierskiej, Pogórza Zachodniobeskidzkiego, Wyżyny Krakowsko-Częstochowskiej. Położenie Krakowa sprawia, że jest on bazą dla wycieczek w polskie góry, czy wypadów do malowniczej Jury Krakowsko-Częstochowskiej.

Miasto ma rozciągłość południkową 18 kilometrów i równoleżnikową 31 kilometrów. W granicach administracyjnych Krakowa znajduje się również punkt przecięcia południka i równoleżnika o pełnych dziesiątkach stopni (50°N i 20°E), stanowiący jedyny taki przypadek w Europie.

Z Krakowem sąsiadują gminy: Igołomia-Wawrzeńczyce, Kocmyrzów-Luborzyca, Koniusza, Liszki, Michałowice, Mogilany, Niepołomice, Skawina, Świątniki Górne, Wieliczka, Wielka Wieś, Zabierzów, Zielonki. Gminy te należą do trzech powiatów sąsiadujących z Krakowem: krakowskiego, wielickiego oraz proszowickiego.



</CustomText>
            </ScrollView>
        </CustomView>
    );
};

export default Home;