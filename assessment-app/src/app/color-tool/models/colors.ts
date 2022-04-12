
export type Color = {
  id: number;
  name: string;
  hexcode: string;
};

export type NewColor = Omit<Color, 'id'>;

// export interface NewColor {
//   name: string;
//   hexcode: string;
// }

// export interface Color extends NewColor {
//   id: number;  
// }
