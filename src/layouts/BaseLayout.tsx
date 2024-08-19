import { PropsWithChildren } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { Container } from "react-bootstrap";

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <Container fluid>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Container>
  );
}
