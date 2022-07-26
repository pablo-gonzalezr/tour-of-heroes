// export interface Hero {
//   id: number;
//   name: string;
// }

export class Hero {
  constructor(
    public name: string,
    public power: string,
    public alterEgo?: string,
    public id?: number
  ) {}
}
