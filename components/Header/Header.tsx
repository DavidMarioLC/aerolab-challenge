import {
  RootHeader,
  HeaderContent,
  WrapperImageMobile,
  WrapperImageDesktop,
} from "./StyledHeader";
import Image from "next/image";
import { Wrapper } from "../utility";
import LogoMobile from "../../public/aerolab-isotipo.svg";
import LogoDesktop from "../../public/aerolab-imagotipo.svg";

export const Header = () => {
  return (
    <RootHeader>
      <Wrapper>
        <HeaderContent>
          <WrapperImageMobile>
            <Image
              src={LogoMobile}
              alt="Logo de Aerolab"
              title="Logo de Aerolab"
            />
          </WrapperImageMobile>
          <WrapperImageDesktop>
            <Image
              src={LogoDesktop}
              alt="Logo de Aerolab"
              title="Logo de Aerolab"
            />
          </WrapperImageDesktop>
          <p>Menu</p>
        </HeaderContent>
      </Wrapper>
    </RootHeader>
  );
};
