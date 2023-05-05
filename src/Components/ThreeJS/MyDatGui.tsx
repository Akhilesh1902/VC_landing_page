import React from 'react';
import DatGui, {
  DatBoolean,
  DatNumber,
  DatColor,
  DatString,
  DatSelect,
} from 'react-dat-gui';
import { lightSettingstype, useDatGUIContext } from './DatGuiContext';

type Props = {};

export const hdriOptions = [
  'sunset',
  'dawn',
  'night',
  'warehouse',
  'forest',
  'apartment',
  'studio',
  'city',
  'park',
  'lobby',
  undefined,
];

const MyDatGui = (props: Props) => {
  const { lightSettings, updateLightSettings } = useDatGUIContext();

  const handleUpdate = (data: lightSettingstype) => {
    updateLightSettings(data);
  };

  return (
    <DatGui
      data={lightSettings}
      onUpdate={handleUpdate}
      className='bg-slate-700 w-[300px] absolute top-0 right-0 rounded p-2 text-white flex felx-col'>
      <DatBoolean path='active' label='active' />
      <DatNumber
        path='intensity'
        label='intensity'
        min={0}
        max={100}
        step={4}
      />
      <DatString path='bg_color' label='bg_color' />
      <DatSelect path='hdri' label='hdri' options={hdriOptions} />
    </DatGui>
  );
};

export default MyDatGui;
