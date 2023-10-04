'use client'
import { BasicLayout } from "@/layouts/BasicLayout/BasicLayout";
import { BarTrust, Separator } from '@/components/Shared/page';
import { Home } from "@/components/Home/page";
import { Container } from 'semantic-ui-react';
import { BannerAd } from '../../components/Shared/BannerAd/BannerAd';
import { Seo } from '@/components/Shared/page';

const platformsId = {
  playstation: 1,
  xbox: 4,
  nintendo: 5,
  pc: 3,
};

export default function HomePage() {
  return (
    <>
      <Seo />

      <BasicLayout>
        <Home.BannerLastGamePublished /> 

        <Separator height={100} />

        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>   

        <Separator height={100} />

        <BarTrust />
        
        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="PlayStation"
            limit={3}
            platformId={platformsId.playstation}
          />
        </Container>

        <Separator height={100} /> 

        <BannerAd 
          title="Registrate y obten los mejores precios"
          subtitle="¡Compara con otros juegos y elige el tuyo!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/images/img01.png"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestGames
            title="Xbox"
            limit={3}
            platformId={platformsId.xbox}
          />
        </Container>

        <Separator height={100} />  
      </BasicLayout>
    </>
  );
}
