import { RootHeader, HeaderContent } from "./StyledHeader";
import Image from "next/image";
import { Wrapper, WrapperImage } from "../utility";
import LogoMobile from "../../public/aerolab-isotipo.svg";
import LogoDesktop from "../../public/aerolab-imagotipo.svg";

export const Header = () => {
  return (
    <RootHeader>
      <Wrapper>
        <HeaderContent>
          <WrapperImage>
            <Image
              src={LogoMobile}
              alt="Logo de Aerolab"
              title="Logo de Aerolab"
            />
          </WrapperImage>

          <p>Menu</p>
        </HeaderContent>
      </Wrapper>
    </RootHeader>
  );
};
