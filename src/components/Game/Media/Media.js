import { Container } from "semantic-ui-react";
import { Video } from "./Video/page";
import { Gallery } from "./Gallery/page";
import { Separator } from '../../Shared/Separator/Separator';


export function Media(props) {
  const { video, screenshots } = props;

  return (
    <Container>
      <h2>Visuales</h2>
      <Separator height={30} />
      <Video video={video} />
      <Separator height={30} />
      <Gallery screenshots={screenshots} />
    </Container>
  );
}
