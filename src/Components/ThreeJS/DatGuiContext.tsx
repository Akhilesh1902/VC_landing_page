import { createContext, useContext, useState } from 'react';

export interface lightSettingstype {
  active: boolean;
  intensity: number;
  bg_color: string;
  hdri:
    | 'sunset'
    | 'dawn'
    | 'night'
    | 'warehouse'
    | 'forest'
    | 'apartment'
    | 'studio'
    | 'city'
    | 'park'
    | 'lobby';
}

export type DatGuiContextType = {
  lightSettings: lightSettingstype;
  updateLightSettings: (data: lightSettingstype) => void;
};

const Context = createContext<DatGuiContextType | null>(null);

interface Props extends React.PropsWithChildren {}

const DatGuiContext = (props: Props) => {
  const [lightSettings, setLightSettings] = useState({
    active: false,
    intensity: 10,
    bg_color: '#F5F5F5',
    hdri: 'sunset',
  });

  const updateLightSettings = (data: lightSettingstype) => {
    setLightSettings(data);
  };

  return (
    <Context.Provider
      value={{
        lightSettings,
        updateLightSettings,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default DatGuiContext;
export const useDatGUIContext = () => {
  const con = useContext(Context);

  if (!con) {
    throw new Error('use context err');
  }

  return con;
};
