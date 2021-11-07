import { FC, createContext, useContext } from 'react';
import { useMediaQuery } from "@chakra-ui/react";
import { BREAKPOINT } from '../../constants';

const BreakpointsContext = createContext({
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false
});

const BreakpointsProvider: FC = ({ children }) => {
  const [ sm, md, lg, xl, xxl ] = useMediaQuery([
    `(min-width: ${BREAKPOINT.SM})`,
    `(min-width: ${BREAKPOINT.MD})`,
    `(min-width: ${BREAKPOINT.LG})`,
    `(min-width: ${BREAKPOINT.XL})`,
    `(min-width: ${BREAKPOINT.XXL})`
  ]);

  return (
    <BreakpointsContext.Provider value={{ sm, md, lg, xl, xxl }}>
      {children}
    </BreakpointsContext.Provider>
  );
}

export const useBreakpointsContext = () => useContext(BreakpointsContext);

export default BreakpointsProvider;
