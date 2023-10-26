import { Container } from "semantic-ui-react";
import { Separator } from "@/components/Shared/page";
import { Footer, HeaderCart} from '@/components/Layout/page';

export function CartLayout(props) {
  
  const { children, context } = props;
  const { searchParams: { step = 1 } } = context;
  
  return (
    <>
      <HeaderCart data={step} />
      <Separator height={150} />
      <Container>{children}</Container>
      <Separator height={70} />
      <Footer />
    </>
  );
}
