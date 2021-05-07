import React from 'react';
import {SvgProps, SvgXml, XmlProps} from 'react-native-svg';
import {theme} from 'src/util/themes';

const defaultSize = theme.font.iconSizeRegular;

const PolarisIcon = (props: XmlProps) => (
  <SvgXml
    height={defaultSize}
    width={defaultSize}
    fill={theme.colors.primary}
    {...props}
  />
);
export const CirclePlusMajor = (props: SvgProps) => (
  <PolarisIcon
    {...props}
    xml={
      '<svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10zm5 0a1 1 0 011-1h3V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 01-1-1z"/></svg>'
    }
  />
);
export const CircleMinusMajor = (props: SvgProps) => (
  <PolarisIcon
    {...props}
    xml={
      '<svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10zM6 9a1 1 0 100 2h8a1 1 0 100-2H6z"/></svg>'
    }
  />
);
export const CircleCancelMajor = (props: SvgProps) => (
  <PolarisIcon
    {...props}
    xml={
      '<svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10C0 4.486 4.486 0 10 0s10 4.486 10 10-4.486 10-10 10S0 15.514 0 10zm7.707-3.707a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293z"/></svg>'
    }
  />
);
export const SearchMajor = (props: SvgProps) => (
  <PolarisIcon
    {...props}
    xml={
      '<svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm17.707 10.293l-5.395-5.396A7.946 7.946 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8a7.954 7.954 0 004.897-1.688l5.396 5.395A.998.998 0 0020 19a1 1 0 00-.293-.707z"/></svg>'
    }
  />
);
export const ImageMajor = (props: SvgProps) => (
  <PolarisIcon
    {...props}
    xml={
      '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0017.5 1h-15zm5 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM16.499 17H3.497c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01L9 14l3.06-4.781a.5.5 0 01.84.02l4.039 7.011c.18.34-.06.75-.44.75z"/></svg>'
    }
  />
);
