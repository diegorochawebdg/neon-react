export type MenuType = 'PF' | 'PJ' | 'Footer PF' | 'Footer PJ' | 'Social Links';

export interface IMenuLinks {
  __component: string;
  id: number;
  Label: string;
  Url: string;
}

export default interface IMenus {
  id: number,
  created_at: string,
  updated_at: string,
  Name: MenuType,
  additionalText?: string;
  Links: IMenuLinks[];
}